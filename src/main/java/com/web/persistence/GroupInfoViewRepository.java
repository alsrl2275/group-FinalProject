package com.web.persistence;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.web.dto.GroupInfoView;

public interface GroupInfoViewRepository extends JpaRepository<GroupInfoView, Long> {

	List<GroupInfoView> findAllByMeetingTitle(String meetingTitle);

	List<GroupInfoView> findByMembersId(String id);

	List<GroupInfoView> findByMembersIdAndRecruitmentdGreaterThanEqual(String id, String currentDate);

}
