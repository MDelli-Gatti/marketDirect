package com.marketDirect.entities;

import javax.persistence.*;

/**
 * Created by michaeldelli-gatti on 7/19/16.
 */
@Entity
@Table
public class Item {
    @Id
    @GeneratedValue
    int id;

    @Column(nullable = false)
    String name;

    @Column
    String description;

    @Column(nullable = false)
    String category;

    @Column
    String filename;

    @ManyToOne
    Vendor vendor;

    public Item(String name, String description, String category, String filename, Vendor vendor) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.filename = filename;
        this.vendor = vendor;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public Vendor getVendor() {
        return vendor;
    }

    public void setVendor(Vendor vendor) {
        this.vendor = vendor;
    }
}
