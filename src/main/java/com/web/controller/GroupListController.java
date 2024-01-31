package com.web.controller;

import java.util.ArrayList;
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

import com.web.dto.GroupListDAO;
import com.web.dto.GroupListDTO;
import com.web.dto.GroupListDTO2;
import com.web.persistence.GroupListRepository;
import com.web.service.GroupListService;

@RestController
public class GroupListController {
	

	
	@Autowired
	public GroupListService Gservice;
	
	@PostMapping("/api/test")
	public List<GroupListDTO> test2(@RequestBody GroupListDTO2 dto2) {
		System.out.println("확인할래");
		if(dto2.getGroupValue() == null) {
			dto2.setGroupValue("무료");
		}
		
		List<GroupListDTO> list = new ArrayList<>();

		list = Gservice.ShowGroupList(dto2);

		System.out.println(list);
	    return list;
	}
	
	@PostMapping("/api/content")
	public void test(@RequestBody GroupListDAO dao) {
		System.out.println("확이뇽ㅇ!!!");
		System.out.println(dao);
	}
}
