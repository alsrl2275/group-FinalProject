package com.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableScheduling;

import com.web.service.GroupInfoService;

@SpringBootApplication
@EnableScheduling
public class SocialGroupProjectApplication {


	public static void main(String[] args) {
		SpringApplication.run(SocialGroupProjectApplication.class, args);
	}

}
