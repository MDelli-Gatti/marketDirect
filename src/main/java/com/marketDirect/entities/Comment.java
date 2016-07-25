package com.marketDirect.entities;

import javax.persistence.*;

/**
 * Created by michaeldelli-gatti on 7/25/16.
 */
@Entity
@Table(name = "comments")
public class Comment {
    @Id
    @GeneratedValue
    int id;

    @Column(nullable = false)
    String text;

    @Column(nullable = false)
    int rating;

    @ManyToOne
    User user;

    @ManyToOne
    Vendor vendor;

    public Comment() {
    }

    public Comment(String text, int rating, User user, Vendor vendor) {
        this.text = text;
        this.rating = rating;
        this.user = user;
        this.vendor = vendor;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Vendor getVendor() {
        return vendor;
    }

    public void setVendor(Vendor vendor) {
        this.vendor = vendor;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
}
