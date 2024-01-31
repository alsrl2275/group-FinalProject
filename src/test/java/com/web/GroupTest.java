package com.web;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;

import com.web.dto.GroupListDTO;
import com.web.persistence.GroupListRepository;

@SpringBootTest
@Commit
public class GroupTest {
	
	@Autowired
	private GroupListRepository Grepo;
	
	@Test
	public void add () {
		try {
			GroupListDTO dto = new GroupListDTO();
			dto.setCategory("sport");
			dto.setFace("대면");
			dto.setMembers(6);
			dto.setProgram("디코");
			dto.setTitle("language하실분");
			Grepo.save(dto);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
