import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  // styled-reset을 이용한 스타일 초기화
  ${reset}

	:root {
		--font-NotoSansKR: "NotoSansKR";
		--font-JalnanGothic: "JalnanGothic";
	}

	*::-webkit-scrollbar {
		display: none;
	}

	html {
		font-size: 62.5%;
		scroll-behavior: smooth;
	}

	body {
		font-size: 1.6rem;
		overflow: scroll;
		-ms-overflow-style: none;
		background-color: rgb(21, 24, 27);
		font-family: var(--font-NotoSansKR);
	}

	h1, h2, h3, h4, h5, h6 {
		font-family: var(--font-JalnanGothic);
		letter-spacing: 2px;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

`;

export default GlobalStyle;
