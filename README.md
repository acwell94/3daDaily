# 3다일기 v1.0.0

## 📌 서비스 소개
<p align='center'>
<img width='200px' src='https://user-images.githubusercontent.com/89783182/222035863-cd30cc07-2690-47b6-8cc7-7a829d95fd33.png'/>
</p>

🗒️ 간단하게 오늘 하루를 기록하는 서비스 웹 버전 🗒️

사이트 : [https://www.3dadaily.store/](https://www.3dadaily.store/)

### [개발 배경](https://github.com/acwell94/3daDaily/wiki/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B0%9C%EC%9A%94)

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
  <img src='https://user-images.githubusercontent.com/89783182/222051365-4d21ed7c-7ecc-43cf-b32d-0340ecddbdbf.png'/>
</p>
* 회원가입시 등록된 정보로 로그인이 가능합니다.<br>
* 간단히 이메일과 비밀번호로 로그인하고 DB에서 확인 후 JWT를 이용하여 AccessToken, RefreshToken을 발급합니다.<br>
* AccessToken은 1시간 RefreshToken은 14일 유지가 되며 1시간이 지난 후 RefreshToken을 이용해 다시 AccessToken을 발급합니다.<br>
<p align='center'>
  <img src='https://user-images.githubusercontent.com/89783182/222075168-7d82cbc6-cd85-430f-b837-2e08c9565734.png'/>
</p>



