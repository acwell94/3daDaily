## 1. prettier 설정

    가. 쌍따옴표 설정
    나. 코드 작성시 맨 뒤에 세미콜론 적용
    다. 탭 간격은 2칸
    라. 뒤에 ,가 올 수 있으면 ,를 붙힘
        예시) const obj = { name: "철수", }
    마. 한 줄에는 최대 80개의 단어만 올 수 있음


삼다일기 백엔드 구성

1. 유저

signup

스키마

{
name : 이름, string, 필수
email: 이름, string, 필수, 다른 아이디와 관계설정
password: 비밀번호, string, 필수
profileImg : 프로필이미지, string
contents : 글 관계설정, array, 필수
pair : 다른 아이디와 관계설정, string, 필수
}

2. 글 목록
{
title: 글제목, string, 필수
description : 글 내용, string, 필수
date: 날짜, string, 필수
weather : 날씨, string, 필수
location : {lat: 위도, number, 필수  lng: 경도, number, 필수 }
with: 누구와, string, 필수
what: 무엇을, string, 필수
feeling: 기분, string, 필수
image: 사진, string, 필수
}
