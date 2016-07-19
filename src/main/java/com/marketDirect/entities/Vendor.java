package com.marketDirect.entities;

import javax.persistence.*;
import java.util.ArrayList;

/**
 * Created by michaeldelli-gatti on 7/19/16.
 */
@Entity
@Table(name = "vendors")
public class Vendor {
    @Id
    @GeneratedValue
    int id;

    @Column
    String creator;

    @Column
    String fileName;

    @Column
    String phone;

    @Column
    String email;

    @Column
    String website;

    @Column
    String location;

    @Column
    String date;

    public Vendor(String creator, String fileName, String phone, String email, String website, String location, String date) {
        this.creator = creator;
        this.fileName = fileName;
        this.phone = phone;
        this.email = email;
        this.website = website;
        this.location = location;
        this.date = date;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
