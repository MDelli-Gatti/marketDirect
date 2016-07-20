package com.marketDirect.controllers;

import com.marketDirect.entities.Item;
import com.marketDirect.entities.User;
import com.marketDirect.entities.Vendor;
import com.marketDirect.services.ItemRepository;
import com.marketDirect.services.UserRepository;
import com.marketDirect.services.VendorRepository;
import com.marketDirect.utilities.PasswordStorage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.FileOutputStream;


/**
 * Created by michaeldelli-gatti on 7/19/16.
 */
@RestController
public class MarketDirectController {
    @Autowired
    UserRepository users;

    @Autowired
    VendorRepository vendors;

    @Autowired
    ItemRepository items;

    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public void login(HttpSession session, @RequestBody User user) throws Exception {
        User userFromDb = users.findByUsername(user.getUsername());
        if (userFromDb == null) {
            user.setPassword(PasswordStorage.createHash(user.getPassword()));
            users.save(user);
        }
        else if (!PasswordStorage.verifyPassword(user.getPassword(), userFromDb.getPassword())) {
            throw new Exception("Incorrect password");
        }
        session.setAttribute("username", user.getUsername());
    }

    @RequestMapping(path = "/logout", method = RequestMethod.POST)
    public void logout(HttpSession session, HttpServletResponse response) throws Exception {
        session.invalidate();
        response.sendRedirect("/");
    }

    @RequestMapping(path = "create-item", method = RequestMethod.POST)
    public void createItem(HttpSession session, String category, MultipartFile file, String description, String price, int quantity) throws Exception {
        String username = (String) session.getAttribute("username");
        if (username == null) {
            throw new Exception("Not logged in!");
        }

        User user = users.findByUsername(username);
        if (user == null) {
            throw new Exception("User not in database!");
        }

        File dir = new File("public/files");
        dir.mkdirs();

        File uploadedFile = File.createTempFile("file", file.getOriginalFilename(), dir);
        FileOutputStream fos = new FileOutputStream(uploadedFile);
        fos.write(file.getBytes());

        Vendor vendor = vendors.findByName(username);

        Item item = new Item(username, description, category, uploadedFile.getName(), price, quantity, vendor);
        items.save(item);
    }

    @RequestMapping(path = "get-items", method = RequestMethod.GET)
    public Iterable<Item> getItems(HttpSession session) throws Exception {
        String username = (String) session.getAttribute("username");
        if (username == null) {
            throw new Exception("Not logged in!");
        }

        User user = users.findByUsername(username);
        if (user == null) {
            throw new Exception("User not in database!");
        }

        return items.findAll();
    }

    @RequestMapping(path = "get-item", method = RequestMethod.GET)
    public Item getItem(HttpSession session, int id) throws Exception {
        String username = (String) session.getAttribute("username");
        if (username == null) {
            throw new Exception("Not logged in!");
        }

        User user = users.findByUsername(username);
        if (user == null) {
            throw new Exception("User not in database!");
        }

        return items.findOne(id);
    }

    @RequestMapping(path = "delete-item", method = RequestMethod.POST)
    public void deleteItem(HttpSession session, int id) throws Exception {
        String username = (String) session.getAttribute("username");
        Item item = items.findOne(id);
        Vendor vendor = vendors.findByName(username);
        if (username == null) {
            throw new Exception("Not logged in!");
        }

        User user = users.findByUsername(username);
        if (user == null) {
            throw new Exception("User not in database!");
        }
        else if (vendor != item.getVendor()){
            throw new Exception("logged in user and item creator do not match");
        }

        items.delete(item);
    }
}
