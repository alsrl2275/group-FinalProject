package com.web.persistence;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.web.dto.GroupInfo;
import com.web.dto.GroupInfoDAO;

public interface GroupInfoRepository extends JpaRepository<GroupInfo, Long> {

	GroupInfo findBySeq(Long seq);

	void save(GroupInfoDAO dao);

	
	List<GroupInfo> findAllByMeetingTitle(String meetingTitle);

	void deleteByMeetingTitle(String meetingTitle);

	GroupInfo findByMeetingTitle(String meetingTitle);


	
	
	
}
