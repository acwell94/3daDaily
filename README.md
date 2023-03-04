# 삼다일기 v1.0.0

### 개발기간
* #### [v1.0.0]((https://github.com/acwell94/3daDaily/wiki) <span>2023.01.10 ~ 2023.02.28</span>

##

### 목차
1. [서비스 소개](#-서비스-소개)
2. [사용 기술](#-사용-기술)
3. [주요 기능](#-주요-기능)
4. [배포](#-배포)
5. [History](#-history)


## 📌 서비스 소개
<p align='center'>
<img width='200px' src='https://user-images.githubusercontent.com/89783182/222035863-cd30cc07-2690-47b6-8cc7-7a829d95fd33.png'/>
</p>

🗒️ 간단하게 오늘 하루를 기록하는 삼다일기 웹 버전 🗒️

사이트 : [https://www.3dadaily.store/](https://www.3dadaily.store/)

### [개발 배경](https://github.com/acwell94/3daDaily/wiki)

## 📌 사용 기술
<p align='start'>
  <img src='https://img.shields.io/badge/Typescript-v4.9.4-blue?logo=typescript'/>
    <img src='https://img.shields.io/badge/Next.js-v13.1.1-000000?logo=Next.js'/>
  <img src="https://img.shields.io/badge/styled components-v5.3.6-pink?logo=styled components">
  <img src="https://img.shields.io/badge/recoil-v0.7.6-blue?logo=react">
    <img src="https://img.shields.io/badge/hookform-v2.9.10-blue?logo=react">
      <img src="https://img.shields.io/badge/axios-v2.9.10-5A29E4?logo=axios">
</p>

## 📌 주요 기능

### 🛠️ 회원가입

<p align='center'>
  <img src='https://user-images.githubusercontent.com/89783182/222052335-598d888c-7db9-4213-afaa-bc5892d04e1b.png'/>
</p>
* 개인정보 제공 없이 간단히 아이디와 닉네임으로 회원가입이 가능합니다.<br>
* 유저에게서 아이디, 닉네임, 비밀번호, 프로필사진을 받아서 비밀번호는 hash하여 저장, 프로필사진은 AWS에 저장하여 DB에 링크로 저장합니다.
<p align='center'>
  <img src='https://user-images.githubusercontent.com/89783182/222068824-5088d79e-4531-43a8-81b0-6a866c0dbbcf.png'/>
</p>

### 🛠️ 로그인

<p align='center'>
  <img src='https://user-images.githubusercontent.com/89783182/222082594-2c6a95e0-5586-402d-87e2-5df64b9a3b0c.gif'/>
</p>

<p align='center'>
  <img src='https://user-images.githubusercontent.com/89783182/222082607-bfd1bed6-8ae7-435f-b843-6d8e6a727540.gif'/>
</p>

* 회원가입시 등록된 정보로 로그인이 가능합니다.<br>
* 간단히 이메일과 비밀번호로 로그인하고 DB에서 확인 후 JWT를 이용하여 AccessToken, RefreshToken을 발급합니다.<br>
* AccessToken은 1시간 RefreshToken은 14일 유지가 되며 1시간이 지난 후 RefreshToken을 이용해 다시 AccessToken을 발급합니다.<br>
<p align='center'>
  <img src='https://user-images.githubusercontent.com/89783182/222075168-7d82cbc6-cd85-430f-b837-2e08c9565734.png'/>
</p>

### 🛠️ 메인 페이지

<p align='center'>
  <img src='https://user-images.githubusercontent.com/89783182/222083557-d7cf8ed0-e63e-4c0c-8a97-bed26ae04472.gif'/>
</p>

* 유저가 작성한 글을 리스트 형식으로 보여주고 조건을 이용하여 검색할 수 있습니다.

### 🛠️ 일기 작성

<p align='center'>
  <img src='https://user-images.githubusercontent.com/89783182/222108839-b181fdf5-ed20-4b81-add6-8c2fe1d1349b.gif'/>
</p>

* browser-image-compression을 이용하여 유저가 올린 이미지를 압축해서 서버에 저장합니다.<br>
* google-maps-api를 이용하여 지도를 불러오고 use-places-autocomplete를 이용하여 위치검색을 지원합니다.<br>
* Geolocation.getCurrentPosition() web API를 이용하여 현재 위치를 불러옵니다.<br>

### 🛠️ 작성한 일기 확인

<p align='center'>
  <img src='https://user-images.githubusercontent.com/89783182/222110980-68aa804a-5c08-40c1-a833-1e1dd74e95c6.gif'/>
</p>

* 작성한 일기를 확인할 수 있습니다.<br>
* 수정을 원하시면 수정 버튼을 눌러 수정할 수 있습니다.<br>
* 삭제 버튼을 눌러 삭제할 수 있습니다.

### 🛠️ 설정 페이지

<p align='center'>
  <img src='https://user-images.githubusercontent.com/89783182/222111913-933d753e-ba4c-4c8e-8740-2c2323b1f54b.png'/>
</p>

* 프로필 관리 탭에서 프로필 사진, 닉네임을 변경할 수 있습니다.<br>
* 친구 관리 탭에서 다른 사용자와 친구를 할 수 있습니다.<br>
(친구 일기 보기 기능 추가 예정)
* 비밀번호 재설정 탭에서 비밀번호를 변경할 수 있습니다.<br>
* 회원탈퇴를 하면 유저가 작성한 글을 모두 지우고 삼다일기에서 탈퇴합니다.
(데이터는 복구 불가)

### 🛠️ openAI를 이용한 챗봇 시스템

<p align='center'>
  <img src='https://user-images.githubusercontent.com/89783182/222113170-6248a020-21b5-4f47-8dbc-b40840791fbc.gif'/>
</p>

* openAI의 ChatGPT api를 이용한 챗봇 시스템입니다.<br>
* 아직은 정확하지 않은 검색결과로 공부 및 실험 목적으로 개발한 기능입니다.<br>

## 📌 배포

### Vercel
* 이전에 배포를 해봤던 GCP는 무료 기간이 3개월로 짧아서 삼다일기는 무료로 이용가능하고 배포에 소요가 최대한 적은 클라우딩 플랫폼인 vercel을 이용하기로 하였습니다.<br>
* 가비아에서 도메인을 구입하여 커스텀 도메인을 연결하여 배포하였습니다.

## 📌 History
#### [v1.0.0](https://github.com/acwell94/3daDaily/wiki) <span>2023.02.28 배포</span>


