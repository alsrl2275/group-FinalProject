package com.web.dto;

import javax.persistence.Column;
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
@Entity
@ToString
@Table(name = "member")
public class MemberDTO {
	
	@Id
	private Long seq;
	@Column(name = "id")
	private String id;
	@Column(name = "pwd")
	private String pwd;
	@Column(name = "name")
	private String name;
	@Column(name = "email")
	private String email;
	@Column(name = "domain")
	private String domain;
	@Column(name = "phone")
	private String phone;
	@Column(name = "birth")
	private int birth;
	@Column(name = "age")
	private int age;
	@Column(name = "bank")
	private String bank;
	@Column(name = "banknum")
	private String banknum;
	@Column(name = "count")
	private int count;
	@Column(name = "point")
	private int point;
	@Column(name = "role")
	private String role;
	
}
