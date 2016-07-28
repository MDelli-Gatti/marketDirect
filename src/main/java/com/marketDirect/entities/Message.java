package com.marketDirect.entities;

import javax.persistence.*;

/**
 * Created by illladell on 7/28/16.
 */

@Entity
@Table (name = "messages")
public class Message {

    @Id
    @GeneratedValue
    Integer id;

    @Column(nullable = false)
    String text;

    @ManyToOne
    Vendor vendor;

    public Message(String text, Vendor vendor) {
        this.text = text;
        this.vendor = vendor;
    }

    public Message() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Vendor getVendor() {
        return vendor;
    }

    public void setVendor(Vendor vendor) {
        this.vendor = vendor;
    }
}
