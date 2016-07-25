package com.marketDirect;

import com.marketDirect.services.CommentRepository;
import com.marketDirect.services.ItemRepository;
import com.marketDirect.services.UserRepository;
import com.marketDirect.services.VendorRepository;
import org.junit.Assert;
import org.junit.Before;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = MarketDirectApplication.class)
@WebAppConfiguration
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class MarketDirectApplicationTests {

	@Autowired
	WebApplicationContext wac;

	MockMvc mockMvc;

	@Before
	public void before() {
		mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
	}

	@Autowired
	UserRepository users;

	@Autowired
	VendorRepository vendors;

	@Autowired
	CommentRepository comments;

	@Autowired
	ItemRepository items;

	@Test
	public void testLogin() throws Exception {
		mockMvc.perform(
				MockMvcRequestBuilders.post("/login")
						.param("username", "Alice@gmail.com")
						.param("password", "mypass")
		);
		Assert.assertTrue(users.count() == 1);
	}

	@Test
	public void testCreateUser() throws Exception {
		mockMvc.perform(
				MockMvcRequestBuilders.post("/create-user")
						.param("username", "bob@gmail.com")
						.param("password", "password")
		);
		Assert.assertTrue(users.count() == 1);
	}

	@Test
	public void testCreateItem() throws Exception {
		MockMultipartFile file = new MockMultipartFile("farmer", "farmer.jpg".getBytes());
		mockMvc.perform(
				MockMvcRequestBuilders.fileUpload("/create-item")
					.file(file)
					.param()
					.sessionAttr("username", "Alice@gmail.com"));
	}
}
