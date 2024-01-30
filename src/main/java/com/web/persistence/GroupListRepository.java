package com.web.persistence;

import java.util.List;
import java.util.Map;

import org.springframework.data.repository.CrudRepository;

import com.web.dto.GroupListDTO;

public interface GroupListRepository extends CrudRepository<GroupListDTO, Long>{

	List<GroupListDTO> findAllByCategory(String categoryValue);

	List<GroupListDTO> findAllByCategoryAndTitle(String selectedValue, String searchValue);

	List<GroupListDTO> findAllByTitleContaining(String searchValue);

	List<GroupListDTO> findAllByCategoryContainingAndTitleContaining(String selectedValue, String searchValue);

}
