package com.example.FlightService.repo;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.FlightService.entity.Flight;


public interface FlightRepository extends JpaRepository<Flight, Integer>{
		
	List<Flight> findByCarrier(String carrier);
	
	@Query("FROM Flight WHERE source =:src AND destination =:dest")
	List<Flight> findByRoute(
			
			@Param("src") String source,
			@Param("dest") String destination
			);
	
	@Query("FROM Flight WHERE cost BETWEEN :min AND :max")
	List<Flight> findByPriceRange(
			
			@Param("min") double minPrice,
			@Param("max") double maxPrice
			);
	
}
