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

    @Column(nullable = false)
    String description;

    @Column(nullable = false)
    String category;

    @Column
    String filename;

    @Column(nullable = false)
    String price;

    @Column(nullable = false)
    Integer quantity;

    @ManyToOne
    Vendor vendor;


    public Item() {
    }

    public Item(String name, String description, String category, String filename, String price, Integer quantity, Vendor vendor) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.filename = filename;
        this.price = price;
        this.quantity = quantity;
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

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
