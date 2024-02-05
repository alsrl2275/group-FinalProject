package com.web.controller;



import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	
	@PutMapping("/updateCalendar/{seq}")
	public ResponseEntity<String> updateEvent(@PathVariable Long seq, @RequestBody Map<String, Object> updateRequest) {
		System.out.println(seq);
		System.out.println(updateRequest);
		try {
			scheduleService.updateEvent(seq, updateRequest);
			return ResponseEntity.ok("update 성공");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("업데이트 실패");
		}
	}
	
	@DeleteMapping("/deleteCalendar/{seq}")
	public ResponseEntity<String> deleteCalnedar(@PathVariable Long seq) {
		try {
			scheduleService.deleteCalendar(seq);
			return new ResponseEntity<>("OK", HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>("ERROR", HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}	
}
