package com.web.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.TableGenerator;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity
@TableGenerator(name="INSERT_SEQ_GENERATOR",
table="ALL_SEQUENCE",
pkColumnValue="METTING_NUMBER",
initialValue = 0,
allocationSize = 1)
public class GroupInfo {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "INSERT_SEQ_GENERATOR")
    private String meetingNumber;
    private String userId;
    private String meetingTitle;
    private String category;
    private String faceToFace;
    private String program;
    private int meetingcost;
    private String peopleNum;
    private String recruitments;
    private String recruitmentd;
    private String meetingDateStart;
    private String meetingDateEnd;
    private String meetingLocation;
}
