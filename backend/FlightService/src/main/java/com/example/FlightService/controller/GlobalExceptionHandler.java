package com.example.FlightService.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.example.FlightService.service.InvalidFlightException;

public class GlobalExceptionHandler {
	@ExceptionHandler(InvalidFlightException.class)
	public ResponseEntity<String> handleInvalidFlight(InvalidFlightException e) {
		return new ResponseEntity<String>(e.getMessage(), HttpStatus.NOT_FOUND);
	}
}

