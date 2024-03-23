import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  // styled-reset을 이용한 스타일 초기화
  ${reset}

	:root {
		--font-NotoSansKR: "NotoSansKR";
		--font-JalnanGothic: "JalnanGothic";

		--bs-breakpoint-xs: 0;
		--bs-breakpoint-sm: 576px;
		--bs-breakpoint-md: 768px;
		--bs-breakpoint-lg: 905px;
	}

	*::-webkit-scrollbar {
		display: none;
	}

	html, body {
		font-size: 62.5%;
		scroll-behavior: smooth;
	}

	body {
		/* font-size: 1.6rem; */
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

	@media (max-width: 905px){
		html {
			font-size: 9px;
		}
	}

	@media (max-width: 768px){
		html {
			font-size: 8px;
		}
	}

	@media (max-width: 576px){
		html {
			font-size: 7px;
		}
	}

`;

export default GlobalStyle;
