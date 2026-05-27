package com.example.FlightService.service;

import java.util.List;

import com.example.FlightService.entity.Flight;

public interface FlightService {
	
	Flight save(Flight flight);
	Flight findByCode(int code);
	List<Flight> findByCarrier(String carrier);
	List<Flight> findByRoute(String src, String dest);
	List<Flight> findByPriceRange(double min, double max);
	boolean deleteByCode(int code);
	List<Flight> findAll();
}
