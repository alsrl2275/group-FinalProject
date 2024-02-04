package com.web.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
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
	
	public void updateEvent(Long id, Calendar calendar) {
		Optional<Calendar> CalendarOptional = scheduleRepo.findById(id);
		
		CalendarOptional.ifPresent(existCalendar -> {
			BeanUtils.copyProperties(calendar, existCalendar, "id");
			scheduleRepo.save(existCalendar);
		});
	}
	
}
