package com.sih.sanskriti;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SanskritiApplication {

    public static void main(String[] args) {
        SpringApplication.run(SanskritiApplication.class, args);
        System.out.println("====================================================================");
        System.out.println("  Sanskriti Darshan (संस्कृति दर्शन) Backend Started Successfully! ");
        System.out.println("  API available at: http://localhost:8080/api/states                ");
        System.out.println("  Map & Cultural Portal: http://localhost:8080/index.html            ");
        System.out.println("====================================================================");
    }
}
