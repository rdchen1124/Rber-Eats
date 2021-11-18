# Rber Eats
![HomePage](https://www.site-shot.com/cached_image/zaxk3EgdEeyuogJCrBEAAg)

## 網站連結
[Rber Eats](http://food-app.rdchen.me/#/)

## 說明
本專案 (Rber Eats) 為學習 React + Redux 後，以 Uber Eats 為範本所實現的作品(SPA)，以 json-server 來建立 RESTFUL API，串接此 API 來取得 Rber Eats 所要的資料。 
- 前端: 以 React/Redux 建立 (SPA) 實現 Uber Eats 網站功能 
- 後端: 以 json-server 建立 RESTFUL API 供前端索取資料
- 部署: 使用 AWS EC2 服務，將 React App 及 json-server 跑在租來的執行個體上 (OS : Ubuntu 20)

## Necessary Package (SPA)
- react (17.0.2)
- react-redux (7.2.4)
- react-router-dom (5.2.0)
- styled-component (5.3.0)

## Necessary Package (RESTFUL API)
- json-server (0.17.0)

## 頁面/功能
- **登入** (加入最愛、結帳、瀏覽訂單、瀏覽最愛都需要先登入)
- **註冊** (註冊後即登入並跳轉回主頁面)
- **主頁面** (瀏覽商店、將商店加入最愛)
- **商店頁面** (瀏覽產品)
- **結帳頁面** (調整商品數量、移除商品、連結至對應商店、填寫個人資料、送出訂單)
- **歷史訂單頁面** (查看過去的訂單)
- **最愛商店頁面** (顯示以加入最愛的商店)
- **使用者面板** (登入、登出、訂單紀錄、個人喜好商店)
- **產品面板** (添加商品、更改商品數量)
- **購物車** (條列商品、金額、索取餐具、連結至結帳頁面)
