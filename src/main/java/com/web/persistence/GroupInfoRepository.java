package com.web.persistence;

import org.springframework.data.jpa.repository.JpaRepository;

import com.web.dto.GroupInfo;

public interface GroupInfoRepository extends JpaRepository<GroupInfo, Long> {
	
	
}
