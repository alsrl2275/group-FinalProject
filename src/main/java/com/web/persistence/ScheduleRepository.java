package com.web.persistence;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.web.dto.Calendar;

public interface ScheduleRepository extends JpaRepository<Calendar, Long> {

		List<Calendar> findByUserId(String userId);
}
