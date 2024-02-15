package com.web;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;

import com.web.dto.GroupInfo;
import com.web.dto.GroupInfoView;
import com.web.persistence.GroupInfoRepository;
import com.web.persistence.GroupInfoViewRepository;

@SpringBootTest
@Commit
public class SchduleTest {

	@Autowired
	GroupInfoViewRepository groupView;
	
	@Autowired
	GroupInfoRepository groupInfo;
	
//	@Test
//	public void add() {
//		try {
//			GroupInfoView group = new GroupInfoView();
//			group.setUserId("test12");
//			group.setMeetingTitle("123123");
//			group.setCategory("sports");
//			group.setFaceToFace("대면");
//			group.setProgram("X");
//			group.setMeetingType("무료");
//			group.setPeopleNum(15);
//			group.setJoinPeople(1);
//			group.setMeetingCost(0);
//			group.setRecruitments("2024-02-03");
//			group.setRecruitmentd("2024-02-11");
//			group.setMeetingDateStart("2024-02-01");
//			group.setMeetingDateEnd("2024-02-09");
//			group.setMeetingLocation("서울시");
//			group.setMembersId("alsrl2275");
//			group.setSearchLocation("서울특별시");
//			groupView.save(group);
//
//			
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//	}
	@Test
	public void delete() {
		long num = 2;
		try {
			
			groupInfo.deleteAll();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
