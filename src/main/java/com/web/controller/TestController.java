package com.web.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.web.dto.TestDTO;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TestController {
	
	
	
	@PostMapping("/test")
	public String test(@RequestBody TestDTO dto) {
		return dto.getCategory();
	}
	
    @GetMapping("/api/test2")
    public String yourApiEndpoint(
            @RequestParam(name = "search", required = false) String search,
            @RequestParam(name = "category", required = false) String category,
            @RequestParam(name = "group", required = false) String group,
            @RequestParam(name = "selected", required = false) String selected
    ) {
        // 받은 값들을 이용한 로직 수행
        System.out.println("Search: " + search);
        System.out.println("Category: " + category);
        System.out.println("Group: " + group);
        System.out.println("Selected: " + selected);

        // 여기서 필요한 로직을 수행하고 응답을 반환
        return "Your Response"; // 실제로 반환할 응답을 작성해야 합니다.
    }
}
