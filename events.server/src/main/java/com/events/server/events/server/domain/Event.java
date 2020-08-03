package com.events.server.events.server.domain;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table
public class Event {
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
    private Date plannedDate;

    @OneToMany
    private List<Sponsor> sponsors;

    @Column(columnDefinition = "TEXT")
    private String description;
    @Column
    private Integer ownerId;

    public Event() {
    }

    public Event(Integer id, String title, String location, Integer maxNumber, String imageUrl, Date plannedDate, List<Sponsor> sponsors, String description, Integer ownerId) {
        this.id = id;
        this.title = title;
        this.location = location;
        this.maxNumber = maxNumber;
        this.imageUrl = imageUrl;
        this.plannedDate = plannedDate;
        this.sponsors = sponsors;
        this.description = description;
        this.ownerId = ownerId;
    }

    public Event(String title, String location, Integer maxNumber, String imageUrl, Date plannedDate, List<Sponsor> sponsors, String description, Integer ownerId) {
        this.title = title;
        this.location = location;
        this.maxNumber = maxNumber;
        this.imageUrl = imageUrl;
        this.plannedDate = plannedDate;
        this.sponsors = sponsors;
        this.description = description;
        this.ownerId = ownerId;
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

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Date getPlannedDate() {
        return plannedDate;
    }

    public void setPlannedDate(Date plannedDate) {
        this.plannedDate = plannedDate;
    }

    public List<Sponsor> getSponsors() {
        return sponsors;
    }

    public void setSponsors(List<Sponsor> sponsors) {
        this.sponsors = sponsors;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(Integer ownerId) {
        this.ownerId = ownerId;
    }
}
