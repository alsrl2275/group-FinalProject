package com.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.web.dto.Calendar;
import com.web.persistence.ScheduleRepository;

@Service
public class ScheduleService {
	
	@Autowired
	ScheduleRepository scheduleRepo;
	
	public void insertSchedule(Calendar calendar) {
		scheduleRepo.save(calendar);
	}
	
	public List<Calendar> getAllEvents() {
		return scheduleRepo.findAll();
	}
}
