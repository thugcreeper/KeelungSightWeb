package com.org.crawler;
import java.util.*;
import com.example.demo.model.Sight;
import org.jsoup.Jsoup;
import java.lang.NullPointerException;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import java.io.IOException;

public class KeelungSightsCrawler{
    String mainURL = "https://www.travelking.com.tw/tourguide/taiwan/keelungcity/";
    private Map<String, Sight[]> cache = new HashMap<>();
    public Sight[] getItems(String target) throws NullPointerException,IOException{
        if (cache.containsKey(target)) {return cache.get(target);}
        Sight[] siteArray = null;
        boolean found = false;
        try {
            int index=0;
            Document doc = Jsoup.connect(mainURL).get();
            Elements zones = doc.select("div.box h4");
            for (Element zone : zones) {
                if (zone.text().contains(target)) {
                    found = true;
                    // Get the next <ul> list under the same structure as h4
                    Element ul = zone.nextElementSibling();//h4 和 ul是兄弟關係
                    if (ul != null) {
                        Elements sights = ul.select("li a");
                        siteArray = new Sight[sights.size()];//必須先設定大小
                        for (Element sight : sights) {
                            Sight mysight = new Sight();
                            String link = "https://www.travelking.com.tw" + sight.attr("href");
                            Document sitePage = Jsoup.connect(link).get();//connect to sight website
                            mysight.setSightName(sight.text());
                            mysight.setZone(target);
                            //select the elements with temprop="address" and select its content attribute
                            mysight.setAddress(sitePage.select("meta[itemprop=address]").attr("content"));
                            mysight.setCategory(sitePage.select("span[property='rdfs:label']").text());
                            String description = sitePage.select("meta[itemprop=description]").attr("content");
                            if(description != null && !description.isEmpty()){
                                mysight.setDescription(description);
                            }
                            else{
                                Elements firstDiv=sitePage.select("div[property=dc:description]");
                                if(firstDiv != null){
                                    Element p = firstDiv.selectFirst(".point_list > p");
                                    if (p != null) {
                                        mysight.setDescription(p.text());
                                    }
                                    else {
                                        System.out.println("Can't find description");
                                    }
                                }
                            }
                            mysight.setMapURL(sitePage.select("div.address a").attr("href"));
                            String imgURL=sitePage.select("meta[itemprop=image]").attr("content");
                            if(imgURL != null && !imgURL.isEmpty()){
                                mysight.setPhotoURL(imgURL);
                            }
                            else{
                                //沒照片連結的範例
                                mysight.setPhotoURL("https://thumb.ac-illust.com/b1/b170870007dfa419295d949814474ab2_t.jpeg");
                            }
                            //System.out.println(mysight.toString());
                            siteArray[index++]=mysight;
                        }
                    }
                    break;
                }
            }
            if (!found) {
                throw new NullPointerException();//沒有搜尋結果的例外
            }
            cache.put(target, siteArray);
        }
        catch (IOException e) {
            throw new IOException();
        }
        return siteArray;
    }
}
