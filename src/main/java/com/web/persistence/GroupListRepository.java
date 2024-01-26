package com.web.persistence;

import java.util.List;
import java.util.Map;

import org.springframework.data.repository.CrudRepository;

import com.web.dto.GroupListDTO;

public interface GroupListRepository extends CrudRepository<GroupListDTO, Long>{

	List<GroupListDTO> findAllByCategory(String categoryValue);

}
