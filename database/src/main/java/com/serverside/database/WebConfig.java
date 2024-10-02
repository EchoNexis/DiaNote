package com.serverside.database;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        WebMvcConfigurer.super.addCorsMappings(registry);
        registry.addMapping("/getAllNotes").
                allowedOrigins("http://localhost:4200/")
                .allowedMethods("GET");
        registry.addMapping("/addNote").
                allowedOrigins("http://localhost:4200/")
                .allowedMethods("PUT");
        registry.addMapping("/deleteNote").
                allowedOrigins("http://localhost:4200/")
                .allowedMethods("POST");
    }
}
