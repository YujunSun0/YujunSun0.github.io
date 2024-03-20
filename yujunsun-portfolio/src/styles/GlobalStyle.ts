import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  // reset.css에서 스타일 초기화, GlobalStyle 에서는 폰트 등..을 관리함
  	@font-face {
	font-family: "NotoSansKR";
	src: url(assets/Noto_Sans_KR/NotoSansKR-VariableFont_wght.ttf);
    }

	@font-face {
		font-family: "JalnanGothic";
		src: url(assets/JalnanGothic/JalnanGothicTTF.ttf);
	}

	:root {
		--font-NotoSansKR: "NotoSansKR";
		--font-JalnanGothic: "JalnanGothic";
	}

	*::-webkit-scrollbar {
		display: none;
	}

	html {
		font-size: 62.5%;
	}

	body {
		font-size: 1.6rem;
		overflow: scroll;
		-ms-overflow-style: none;
	}

	html, body {
		font-family: var(--font-NotoSansKR);
	}

	h1, h2, h3, h4, h5, h6 {
		font-family: var(--font-JalnanGothic);
		letter-spacing: 2px;
	}

`;

export default GlobalStyle;
