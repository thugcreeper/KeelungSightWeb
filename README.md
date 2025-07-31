# 基隆市景點瀏覽器 KeelungSightWeb

暑假專案練習，前端提供按鈕選取基隆市行政區，並回傳景點。

## 前端 (GitHub Pages)
👉 [基隆市旅遊景點前端網站](https://thugcreeper.github.io/KeelungSightWeb/)

- 使用 React + Vite 建置，Tailwind CSS 美化介面。
- 以按鈕快速查詢七大行政區的景點。
- 支援圖片展示、詳細說明與外部地圖連結。

## 後端 WebAPI (Render)
👉 [WebAPI連結](https://keelungsightweb.onrender.com/SightAPI/)

- 使用 Spring Boot 搭配 MongoDB Atlas 雲端資料庫。
- 啟動時自動執行爬蟲程式抓取資料。
- 提供 RESTful API 查詢景點，例如：
  - `GET /SightAPI?zone=七堵`
  - `GET /SightAPI/` (回傳所有行政區)


