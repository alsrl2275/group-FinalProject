package com.web.persistence;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.web.dto.Review;

public interface ReviewRepository extends JpaRepository<Review, Long>{

	List<Review> findByLeaderId(String id);

}
