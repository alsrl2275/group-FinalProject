package com.web.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.TableGenerator;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity
@TableGenerator(name="PORTWON_SEQ_GENERATOR",
table="ALL_SEQUENCE",
pkColumnValue="ORDER_ID",
initialValue = 0,
allocationSize = 1)
public class PortWon {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "PORTWON_SEQ_GENERATOR")
    private String orderId;
    private String productName;
    private int amount;
    private String buyerName;
    private String buyerEmail;
    private String buyerTel;
    private String returnUrl;

	
}
