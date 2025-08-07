package com.example.demo.controller;

import com.example.demo.model.Sight;
import com.example.demo.repository.SightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import com.org.crawler.KeelungSightsCrawler;

import java.util.ArrayList;
import java.util.Arrays;

//ApplicationRunner，當啟動DemoApplication.java時，自動呼叫爬蟲程式
@Component
public class KeelungSightRunner implements ApplicationRunner {
    private final String[] districts= {"七堵","中山","中正","仁愛","安樂","信義","暖暖"};
    @Autowired
    private SightRepository keelungSightRepo;

    private final int retryTime=3;
    @Override
    public void run(ApplicationArguments args) throws Exception {

        System.out.println("Call KeelungSight crawler");
        KeelungSightsCrawler crawler = new KeelungSightsCrawler();
        //findAllSight finder = new findAllSight(KeelungSightRepo);
        //deleteSights deleter = new deleteSights(KeelungSightRepo);
        //int totalLength=0;

        for(int i=0;i<districts.length;i++){//測試完記得改成districts.length
            for(int currentTime=0;currentTime<retryTime;currentTime++){
                try{
                    Sight[] sights = crawler.getItems(districts[i]);
                    //saveAll要接iterable的entity作為參數，因此要Array.asList
                    keelungSightRepo.saveAll(Arrays.asList(sights));
                    //sights.add(crawler.getItems(districts[i]));
                    System.out.println(districts[i]+"區 Saved successfully :)");
                    break;
                }
                catch (Exception e) {
                    if(currentTime<retryTime-1){
                        System.err.println("failed " + (currentTime+1) + " time at "+districts[i] +"區,trying fetch sights again");
                    }
                    else{
                        System.err.println("failed " + retryTime+ " time,stop fetching again");
                    }

                }
            }

        }

        /*Testing
        System.out.println("Fetching all sights from database...");
        finder.showAllSights();
        String deleteZone = "仙洞巖";
        deleter.deleteByName(deleteZone);
        */

    }
}
