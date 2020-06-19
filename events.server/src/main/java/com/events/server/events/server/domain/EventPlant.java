package com.events.server.events.server.domain;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table//(name="event")
public class EventPlant {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column
    private String title;
    @Column
    private String location;
    @Column
    private Integer maxNumber;
    @Column
    private String imageUrl;
    @Column
    private Date dates;
    @Column
    private String sponsor;
    @Column(columnDefinition = "TEXT")
    private String description;


    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String picUrl) {
        this.imageUrl = picUrl;
    }

    public String getSponsor() {
        return sponsor;
    }

    public void setSponsor(String sponsor) {
        this.sponsor = sponsor;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String descr) {
        this.description = descr;
    }

    public EventPlant() {
    }

    public EventPlant(String title, String location, Integer maxNumber, String imageUrl, Date dates, String sponsor, String description) {
        this.title = title;
        this.location = location;
        this.maxNumber = maxNumber;
        this.imageUrl = imageUrl;
        this.dates = dates;
        this.sponsor = sponsor;
        this.description = description;
    }

    public EventPlant(String title, String imageUrl, String description) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
    }


    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Integer getMaxNumber() {
        return maxNumber;
    }

    public void setMaxNumber(Integer maxNumber) {
        this.maxNumber = maxNumber;
    }

    public Date getDates() {
        return dates;
    }

    public void setDates(Date dates) {
        this.dates = dates;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

}
