package com.web.service;

import java.util.List;
import java.util.Map;
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
	
	public List<Calendar> getAllEvents(String userId) {
		return scheduleRepo.findByUserId(userId);
	}
	
	public void updateEvent(Long seq, Map<String, Object> updateRequest) {
		
        Optional<Calendar> calendarOptional = scheduleRepo.findById(seq);

        calendarOptional.ifPresent(existCalendar -> { // 조회된 seq가 존재하면
            // 동적으로 필드를 업데이트
            updateRequest.forEach((key, value) -> {
                switch (key) {
                    case "editedTitle":
                        existCalendar.setScheduleTitle((String) value); // String으로 강제 형변환
                        break;
                    case "editedMemo":
                        existCalendar.setScheduleMemo((String) value);
                        break;
                    case "editedStart":
                        existCalendar.setStartDate((String) value);
                        break;
                    case "editedEnd":
                        existCalendar.setEndDate((String) value);
                        break;
                    case "color":
                        existCalendar.setColor((String) value);
                        break;
                    // 다른 필요한 필드에 대한 처리 추가
                }
            });

            // 기타 필요한 수정 로직 추가

            scheduleRepo.save(existCalendar);
        });
    }
	
	public void deleteCalendar(Long seq) {
        Calendar calendar = scheduleRepo.findById(seq) 
                .orElseThrow(() -> new IllegalArgumentException("해당 일정이 존재하지 않습니다.")); // 조회된 일정이 없을경우 예외 발생

        scheduleRepo.delete(calendar);
	}
	
}
