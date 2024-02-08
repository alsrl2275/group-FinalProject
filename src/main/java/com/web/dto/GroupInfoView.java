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
public class GroupInfoView {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "INSERT_SEQ_GENERATOR")
    private Long seq;			
    private String userId;	// 모임장 아이디
    private String meetingTitle; // 모임명
    private String category; // 카테고리
    private String faceToFace; // 대면 or 비대면
    private String program; // 공유프로그램
    private String meetingType; // 유료 or 무료
    private int peopleNum; // 모집 인원수 
    private int joinPeople; // 현재 인원수
    private int meetingCost; // 모임유지비용
    private String recruitments; // 모집시작날짜
    private String recruitmentd; // 모집종료날짜
    private String meetingDateStart; // 모임시작날짜
    private String meetingDateEnd; // 모임종료날짜
    private String meetingLocation; // 모임장소
    private String membersId; // 모임에 참가한 아이디
}