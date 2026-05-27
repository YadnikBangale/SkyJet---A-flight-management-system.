package com.example.FlightService.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.FlightService.entity.Flight;
import com.example.FlightService.service.FlightService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/api/v1/flights")
public class FlightController {
	
	@Autowired
	private FlightService service;
	
	@PostMapping("/add")
	public ResponseEntity<Flight> save(@RequestBody Flight flight) {
		
		Flight savedFlight= service.save(flight);
		
		return new ResponseEntity<>(
				
				savedFlight,
				HttpStatus.CREATED
				);
	}
	
	@GetMapping("/{code}")
	public ResponseEntity<Flight> findByCode(@PathVariable int code) {
		Flight flight = service.findByCode(code);
		
		return new ResponseEntity<>(
				flight,
				HttpStatus.OK
				);
	}
	
	@GetMapping("/carrier/{carrier}")
	public ResponseEntity<List<Flight>> findByCarrier(@PathVariable String carrier) {
		
		List<Flight> flights = service.findByCarrier(carrier);
		
		return new ResponseEntity <>(
				
				flights,
				HttpStatus.OK
				);
	}
	
	@GetMapping("/route")
	
	public ResponseEntity<List<Flight>> findByRoute(@RequestParam String src, @RequestParam String dest) {
		
		List<Flight> flights = service.findByRoute(src, dest);
		
		
		return new ResponseEntity <>(
				flights,
				HttpStatus.OK
				);
	}
	
	@GetMapping("/price")
	public ResponseEntity<List<Flight>> findByPriceRange(@RequestParam double min, @RequestParam double max) {
		
		List<Flight> flights = service.findByPriceRange(min, max);
		
		return new ResponseEntity<>(
				
				flights,
				HttpStatus.OK
				);
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<Flight>> findAll() {
		 List<Flight> flights = service.findAll();

	        return new ResponseEntity<>(
	                flights,
	                HttpStatus.OK
	        );
	}
	
	@DeleteMapping("/{code}")
	public ResponseEntity<String> deleteByCode(@PathVariable int code) {
		
		if(service.deleteByCode(code)) {
			
			return new ResponseEntity<>(
					"Flight deleted",
					HttpStatus.OK
					
					);
		}
		
		return new ResponseEntity<>(
				"Flight not found",
				HttpStatus.NOT_FOUND
				
				);
	}
	
	
	
	
	
}
