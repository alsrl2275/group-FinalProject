package com.web.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.web.dto.Calendar;
import com.web.service.ScheduleService;

@RestController
public class ScheduleController {
	
	@Autowired
	ScheduleService scheduleService;
	
	@PostMapping("/Calendar")
	public Calendar schedule(@RequestBody Calendar calendar) {
		System.out.println(calendar);
		scheduleService.insertSchedule(calendar);
		return calendar;
	}
	
	@GetMapping("/getEvents")
	public List<Calendar> getEvents() {
		System.out.println("안녕");
		return scheduleService.getAllEvents();
	}

	
}
