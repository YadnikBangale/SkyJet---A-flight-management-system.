package com.example.FlightService.service;

public class InvalidFlightException extends RuntimeException{
	
	public InvalidFlightException() {
		
	}
	
	public InvalidFlightException(String message) {
		super(message);
	}

}
