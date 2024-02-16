package com.web;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;

import com.web.dto.GroupInfo;
import com.web.dto.MemberDTO;
import com.web.persistence.GroupListRepository;
import com.web.persistence.MemberRepository;
import com.web.service.GroupInfoService;

@SpringBootTest
@Commit
public class GroupTest {
	
	@Autowired
	private GroupListRepository Grepo;
	@Autowired
	private GroupInfoService Inforepo;
	@Autowired
	private MemberRepository Memrepo;
	
	@Autowired
	private GroupInfoService gs;
	
	@Test
	public void add() {
		try {
			GroupInfo groupinfo = new GroupInfo();
			groupinfo.setCategory("sport");
			groupinfo.setFaceToFace("대면");
			groupinfo.setMeetingTitle("운동합시다");
			groupinfo.setJoinPeople(3);
			groupinfo.setMeetingCost(0);
			groupinfo.setMeetingDateStart("2024-01-01");
			groupinfo.setMeetingDateEnd("2024-01-21");
			groupinfo.setRecruitments("2023-12-29");
			groupinfo.setRecruitmentd("2023-12-30");
			groupinfo.setMeetingLocation("관악구우리집");
			groupinfo.setMeetingType("무료");
			groupinfo.setPeopleNum(3);
			groupinfo.setProgram("x");
			groupinfo.setUserId("강남아파트");
			String str = "우리집 강아지";
			Inforepo.insertGroup(groupinfo, str);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	
//
//	@Test
//	public void test() {
//		try {
//			gs.cleanGroup();	
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		
//	}
	
}
