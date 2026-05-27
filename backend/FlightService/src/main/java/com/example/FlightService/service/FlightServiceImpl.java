package com.example.FlightService.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.FlightService.entity.Flight;
import com.example.FlightService.repo.FlightRepository;

@Service
public class FlightServiceImpl implements FlightService{
	
	@Autowired
	private FlightRepository repo;
	
	@Override
	public Flight save(Flight flight) {
		return repo.save(flight);
	}
	
	@Override
	
	public Flight findByCode(int code) {
		return repo.findById(code).orElseThrow(
				
				() -> new RuntimeException(
						"Flight with code " + code + " not found"
						
						));
	}
	
	@Override
	public List<Flight> findByCarrier(String carrier) {
		return repo.findByCarrier(carrier);
	}
	
	@Override
	public List<Flight> findByRoute(String src, String dest) {
		return repo.findByRoute(src, dest);
	}
	
	@Override
	
	public List<Flight> findByPriceRange(double min, double max) {
		return repo.findByPriceRange(min, max);
	}
	
	@Override
	
	public boolean deleteByCode(int code) {
		repo.deleteById(code);
		return true;
	}
	
	@Override
	public List<Flight> findAll() {
		return repo.findAll();
	}
}
