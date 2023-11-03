package com.backendapp.controller.request;

import lombok.Data;

import java.time.LocalTime;

@Data
public class ShowtimeRequest {

    private LocalTime time;
}
