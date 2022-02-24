# INTERIOR WEB

demo : https://relaxed-austin-b63a6c.netlify.app/  반응형X

## 프로젝트의 목적 및 용도
웹 퍼블리싱 실력을 높이기 위해 만든 웹 입니다. 인테리어 쇼핑을 배경으로 만든 웹 페이지 입니다.

## 사용 기술
1. HTML
2. CSS
3. JAVASCRIPT
4. Slick

## 구현 방법
**폰트**
구글 폰트 : Roboto+Serif

**색상**
![색상](https://user-images.githubusercontent.com/85346880/155471593-0d419b5e-6233-4104-b2e8-3c1f3baec137.png)

3가지 색상을 써서 웹 페이지의 심플하고 단순함을 나타냈습니다. 이미지도 갈색 위주로 색상을 뽑았으며, 따뜻한 느낌을 줍니다.

**첫 화면**
<img width="1265" alt="첫화면" src="https://user-images.githubusercontent.com/85346880/155471795-edd74fd0-d3ef-4f7f-9fff-6e04c1fc440a.png">

첫 화면이 어떤 홈페이지인지 알 수 있게 인테리어 사진의 슬라이드로 구현했습니다.
슬라이드는 slick을 썻으며, prev, next버튼과, dots 버튼을 디자인 했습니다.
header는 로고, 메뉴, 검색, 알림, 장바구니로 구성했으며, flex 박스 기능을 썻습니다.


**About**
<img width="1166" alt="about" src="https://user-images.githubusercontent.com/85346880/155472623-9deb2cd4-9405-4a56-8749-562f93b2c353.png">

about은 3박스로 나눴습니다. 

box1 : 텍스트 박스, 버튼으로 구성했으며, 버튼에 hover 효과를 주었습니다. 또한 버튼인 것을 알 수 있게 그림자 효과를 주었습니다.

box2,3 : 공백이 허전하기 않게 하기 위해 사진으로 배치하였습니다.


**Category**
<img width="927" alt="category" src="https://user-images.githubusercontent.com/85346880/155473386-f6fb7c28-394d-40dd-bbf3-f27ea6dba3d5.png">

4개의 사진으로 카테고리를 만들었습니다. display:flex를 기능을 사용했습니다. 
사진에 전체적으로 background:#000으로 줬습니다. 그리고 opacity로 투명도를 조절하여 마우스를 올렸을 때
(opacity:1) 밝게 변합니다.

**Packages**
<img width="1135" alt="packages" src="https://user-images.githubusercontent.com/85346880/155473954-43861fb0-7502-4752-bf9d-d6d1368e452e.png">

이 section은 패키지 박스입니다. 최고의 상품을 소개하고, 구매할 수 있는 용도로 쓰입니다.
버튼에 마우스를 올렸을 때 색상이 바뀌는 효과도 주었습니다. 
이 또한 flex박스를 사용해서 배치하였습니다.


**Footer**
<img width="1174" alt="footer" src="https://user-images.githubusercontent.com/85346880/155474351-17704b66-f6ab-4bf7-b2de-df65ec37e4b0.png">

마지막으로 푸터 입니다. 푸터의 백그라운드 색상을 진한 색으로 하기 위해 회색으로 골랐습니다.
아이콘을 배치하여 sns 박스를 만들었습니다. 아이콘은 폰트어썸에서 가져왔습니다.
아이콘을 선택했을 때 아이콘의 크기가 커지는 효과를 볼 수 있습니다. transform-scale

## 개선사항
반응형으로 바꾸는 것 입니다. 처음에는 태블릿 버전으로 바꾸기 위해 노력은 했지만 레이아웃 걱정을 했습니다. 
어떻게하면 예쁘게 레이아웃을 변경할 수 있을지 고민을 했습니다. 그러나 처음부터 태블릿, 모바일버전의 디자인을 먼저 구상을 했어야 했습니다.
지금 레이아웃을 바꾸려고 하니 변경사항이 너무 많아질 거 같아서 반응형으로 못 만들었습니다.
하지만 언젠간 꼭 반응형으로 만들어 보겠습니다.

## 후기
이 프로젝트를 하면서 부족한 점을 찾게 되어 다행이라고 생각합니다.
나의 부족한 점의 해결법은 처음부터 pc 태블릿 모바일 버전의 디자인을 먼저 구상하고, 하나씩 반응형으로 바꾸는 것입니다.
다음 프로젝트에서는 반응형으로 하나씩 바꾸어 보겠습니다.
