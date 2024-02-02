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
@TableGenerator(name="CALENDAR_SEQ_GENERATOR",
table ="ALL_SEQUENCE",
pkColumnValue ="SCHEDULE_NUMBER",
initialValue = 0,
allocationSize = 1)
public class Calendar {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "CALENDAR_SEQ_GENERATOR")
	private Long seq;              
	private String scheduleTitle;  // 일정 제목
	private String scheduleMemo;  // 일정 내용
	private String startDate;  // 일정 시작날짜
	private String endDate;  // 일정 종료 날짜
	private String userId; // 아이디
	
}
