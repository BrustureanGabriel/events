package com.events.server.events.server.domain;

import javax.persistence.*;

@Entity
public class Sponsor {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column
    private String sponsorName;
    @Column
    private String sponsorImage;

    public Sponsor(String sponsorName, String sponsorImage) {
        this.sponsorName = sponsorName;
        this.sponsorImage = sponsorImage;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSponsorName() {
        return sponsorName;
    }

    public void setSponsorName(String sponsorName) {
        this.sponsorName = sponsorName;
    }

    public String getSponsorImage() {
        return sponsorImage;
    }

    public void setSponsorImage(String sponsorImage) {
        this.sponsorImage = sponsorImage;
    }
}
