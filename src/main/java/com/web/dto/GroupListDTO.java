package com.web.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity
@Table
public class GroupListDTO {
	
	@Id
	@GeneratedValue
	private Long seq;
	private String title;
	private String category;
	private String face;
	private String program;
	private int members;

	
    private String empty;

    // 'empty'에 대한 getter 및 setter
    public String getEmpty() {
        return empty;
    }

    public void setEmpty(String empty) {
        this.empty = empty;
    }
	
	
	
	
}
