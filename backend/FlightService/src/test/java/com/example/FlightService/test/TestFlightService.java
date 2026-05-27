package com.example.FlightService.test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import static org.mockito.Mockito.when;
import static org.mockito.Mockito.doNothing;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.example.FlightService.entity.Flight;
import com.example.FlightService.repo.FlightRepository;
import com.example.FlightService.service.FlightServiceImpl;

public class TestFlightService {

    @Mock
    private FlightRepository repo;

    @InjectMocks
    private FlightServiceImpl service;

    private Flight flight1;
    private Flight flight2;

    @BeforeEach
    void setup() {

        MockitoAnnotations.openMocks(this);

        flight1 = new Flight(
                101,
                "Indigo",
                "Nagpur",
                "Mumbai",
                4500
        );

        flight2 = new Flight(
                102,
                "AirIndia",
                "Delhi",
                "Pune",
                6500
        );
    }

  

    @Test
    void testSaveFlight() {

        when(repo.save(flight1))
                .thenReturn(flight1);

        Flight savedFlight =
                service.save(flight1);

        assertEquals(
                101,
                savedFlight.getCode()
        );
    }


    @Test
    void testFindByCode() {

        when(repo.findById(101))
                .thenReturn(
                        Optional.of(flight1)
                );

        Flight foundFlight =
                service.findByCode(101);

        assertEquals(
                "Mumbai",
                foundFlight.getDestination()
        );
    }

  

    @Test
    void testFindAll() {

        List<Flight> flights =
                Arrays.asList(
                        flight1,
                        flight2
                );

        when(repo.findAll())
                .thenReturn(flights);

        List<Flight> result =
                service.findAll();

        assertEquals(
                2,
                result.size()
        );
    }

    

    @Test
    void testFindByCarrier() {

        List<Flight> flights =
                Arrays.asList(flight1);

        when(repo.findByCarrier("Indigo"))
                .thenReturn(flights);

        List<Flight> result =
                service.findByCarrier("Indigo");

        assertEquals(
                1,
                result.size()
        );

        assertEquals(
                "Indigo",
                result.get(0).getCarrier()
        );
    }

   

    @Test
    void testFindByRoute() {

        List<Flight> flights =
                Arrays.asList(flight1);

        when(repo.findByRoute(
                "Nagpur",
                "Mumbai"
        )).thenReturn(flights);

        List<Flight> result =
                service.findByRoute(
                        "Nagpur",
                        "Mumbai"
                );

        assertEquals(
                1,
                result.size()
        );
    }

   

    @Test
    void testFindByPriceRange() {

        List<Flight> flights =
                Arrays.asList(flight1);

        when(repo.findByPriceRange(
                4000,
                5000
        )).thenReturn(flights);

        List<Flight> result =
                service.findByPriceRange(
                        4000,
                        5000
                );

        assertEquals(
                1,
                result.size()
        );
    }

    

    @Test
    void testDeleteByCode() {

        doNothing()
                .when(repo)
                .deleteById(101);

        boolean result =
                service.deleteByCode(101);

        assertTrue(result);
    }
}