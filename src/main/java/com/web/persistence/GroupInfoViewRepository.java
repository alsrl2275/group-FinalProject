package com.web.persistence;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.web.dto.GroupInfo;
import com.web.dto.GroupInfoView;

public interface GroupInfoViewRepository extends JpaRepository<GroupInfoView, Long> {

	List<GroupInfoView> findAllByMeetingTitle(String meetingTitle);

	List<GroupInfoView> findByMembersId(String id);

	List<GroupInfoView> findByMembersIdAndRecruitmentdGreaterThanEqual(String id, String currentDate);
	
	List<GroupInfoView> findByMembersIdAndRecruitmentdLessThan(String id, String currentDate);

	GroupInfoView findByMeetingTitle(String meetingTitle);
	

	void deleteAllByMeetingTitle(String meetingTitle);
	@Modifying
	@Query("DELETE FROM GroupInfoView g WHERE g.meetingDateEnd < CURRENT_DATE")
	void deleteExpiredMeetings();
}
