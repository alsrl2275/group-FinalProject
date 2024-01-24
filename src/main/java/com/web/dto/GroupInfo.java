package com.web.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class GroupInfo {

    private String meetingNumber;
    private String userId;
    private String meetingTitle;
    private String category;
    private String faceToFace;
    private String program;
    private String peopleNum;
    private String meetingDateStart;
    private String meetingDateEnd;
    private String meetingLocation;
}
