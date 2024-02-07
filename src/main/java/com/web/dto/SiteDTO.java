package com.web.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Entity
@Table(name="Site")
@Data
public class SiteDTO {

	@Id
	@GeneratedValue
	private Long seq;
	private String siteName;
	private String category;
	private String address;
	private String sitetalk;
	private String filePath;

	
}
