package com.web.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity
@Table(name="member")
public class MemberDTO {
	
	@Id
	private String id;
	private String pwd;
	private String name;
	private String email;
	private String phone;
	private int birth;
	private int age;
	private String bank;
	private String banknum;
	private int count;
	private int point;
	private String role;
	
}
