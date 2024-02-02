package com.web.controller;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.hibernate.internal.build.AllowSysOut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.web.dto.GroupInfo;
import com.web.dto.GroupInfoDAO;
import com.web.dto.GroupListDTO2;
import com.web.persistence.GroupListRepository;
import com.web.service.GroupInfoService;
import com.web.service.GroupListService;

@RestController
public class GroupListController {
	

	
	@Autowired
	public GroupListService Gservice;
	
	@Autowired
	public GroupInfoService InfoService;
	
	@PostMapping("/api/test")
	public List<GroupInfo> test2(@RequestBody GroupListDTO2 dto2) {
		System.out.println("확인중");
		System.out.println(dto2.getGroupValue());
		if(dto2.getGroupValue() == null) {
			dto2.setGroupValue("무료");
		}
		
		List<GroupInfo> list = new ArrayList<>();

		list = Gservice.ShowGroupList(dto2);

		System.out.println(list);
	    return list;
	}
	
	@PostMapping("/api/content")
	public String test(@RequestBody GroupInfo dao) {
		LocalDate today = LocalDate.now();
		if(dao.getJoinPeople() == dao.getPeopleNum()) {
			System.out.println("확인용1");
			return "인원";
		}
		try {
			System.out.println("확인용2");
			DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
	        LocalDate recruitmentDate = LocalDate.parse(dao.getRecruitmentd(), formatter);
	        if (today.isAfter(recruitmentDate)) {
	        	System.out.println("모집일 지남");
	            return "기간";
	        }
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("확인용3");
		}
		
		System.out.println("확인용4");
		InfoService.updateGroup(dao);
		return "신청";
		
	}
}































