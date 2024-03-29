# 포트폴리오 사이트
#### ✏️ 개인 프로젝트 - 포트폴리오 웹사이트
#### ⏱️ 프로젝트 기간: `2024.03.18 ~ 2024.03.25`
#### [배포 링크](https://yujunsun0.github.io/)

포트폴리오 용으로 제작한 웹사이트입니다.<br />
한 페이지에서 편리한 정보 조회가 가능하도록 제작했으며, 반응형 웹으로 제작되어 모든 환경에서 볼 수 있습니다.<br />

<br />

## 주요 구현 기능

### 동적 요소 감지 및 내비게이션 하이라이팅

|데스크탑|모바일|
|--|--|
|![2024-03-285 22 08-ezgif com-video-to-gif-converter](https://github.com/kimtjrgus/Salog/assets/120611048/304d9238-c945-44d4-b4a4-0b2eb7b8eb46)|![2024-03-285 28 11-ezgif com-video-to-gif-converter](https://github.com/kimtjrgus/Salog/assets/120611048/32eab9c3-c08d-4f25-be05-8dee62e7d081)|

- `intersectionObserver API`를 이용하여 사용자가 **페이지를 스크롤**하는 동안 **관찰 중인 요소가 영역에 감지**되면 사용자의 위치를 나타내는 URL 해시(#)를 업데이트하고,
해당 요소와 연결된 내비게이션 메뉴의 링크(a 태그)에 .active 클래스를 추가하여 시각적으로 강조합니다.

<br />

<details>
<summary>소스 코드 보기</summary>
<div markdown="1">

<img width="560" alt="스크린샷 2024-03-28 오후 6 18 39" src="https://github.com/YujunSun0/YujunSun0.github.io/assets/120611048/c411c44a-c667-49d4-ae82-e49716ebedce">

</div>
</details>

<br />

### 스크롤 progress bar

![2024-03-286 33 51-ezgif com-video-to-gif-converter](https://github.com/YujunSun0/YujunSun0.github.io/assets/120611048/a5c9d8a3-02d3-4ed8-b82e-332410ba4faf)

- 스크롤 진행 상황을 표시하는 `bar`입니다.
- `useEffect`에서 `addEventListener`를 통해 스크롤 이벤트를 등록하여 현재 스크롤 위치의 **percent(%)**를 구하는 방식으로 구현했습니다.

  <br />


## 트러블 슈팅

### 문제
progress bar 컴포넌트에서 추가한 스크롤 이벤트가 발생할 때 마다 폰트가 깜빡이는 현상이 발생하였습니다.

![2024-03-213 09 53-ezgif com-video-to-gif-converter](https://github.com/YujunSun0/YujunSun0.github.io/assets/120611048/2387863a-78c9-4dab-b25d-b3b77b20826b)

### 원인
`styled-components`에서 `font-family`를 **GlobalStyle**에 저장해 둔 것이였으며, **새로운 스타일이 render 되면 폰트를 재요청** 하기 때문에 깜빡임 현상이 발생 한 것이였습니다.

### 해결 방법
**GlobalStyle**에 저장해 둔 `font-family` 속성을 css 파일로 옮겨주어 해결했습니다. (src 폴더의 index.tsx에서 해당 css 파일을 import)

<a href="https://velog.io/@yujunsun0/React-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%B0%9C%EC%83%9D-%EC%8B%9C-%ED%8F%B0%ED%8A%B8-%EA%B9%9C%EB%B9%A1%EC%9E%84-Feat.-styled-componets" target="_blank">해당 문제의 해결 과정을 블로그에 작성했습니다.</a>

