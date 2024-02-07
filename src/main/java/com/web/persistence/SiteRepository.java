package com.web.persistence;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.web.dto.SiteDTO;

public interface SiteRepository extends JpaRepository<SiteDTO, Long>{

	List<SiteDTO> findByCategory(String category);


}
