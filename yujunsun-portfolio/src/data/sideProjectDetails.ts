import type { ProjectDetail } from "@/data/projects"
import deepdevMain from "@assets/projects/deepdev/01-main-deepdev.png"
import deepdevDashboard from "@assets/projects/deepdev/02-dashboard-deepdev.png"
import deepdevSession from "@assets/projects/deepdev/03-session-deepdev.png"
import deepdevExplore from "@assets/projects/deepdev/04-explore-deepdev.png"
import blogMain from "@assets/projects/blog/01-main-tech.png"
import blogGallery from "@assets/projects/blog/02-gall-tech.png"
import blogPost from "@assets/projects/blog/03-post-tech.png"
import blogEditor from "@assets/projects/blog/04-editor-tech.png"
import audioStudioMain from "@assets/projects/audio-studio/01-main-audio-studio.png"
import audioStudioMixer from "@assets/projects/audio-studio/02-mixer-audio-studio.png"
import onginoteLanding from "@assets/projects/onginote/02-landing-onginote.png"
import onginoteChat from "@assets/projects/onginote/03-chat-onginote.png"
import onginoteSummary from "@assets/projects/onginote/04-summary-onginote.png"
import onginotePerson from "@assets/projects/onginote/05-person-onginote.png"
import onginoteHome from "@assets/projects/onginote/06-home-onginote.png"

const SIDE = "개인 프로젝트"

export const sideProjectDetails: ProjectDetail[] = [
  {
    slug: "deepdev",
    company: SIDE,
    period: "2026.02 – 2026.09",
    name: "DeepDev",
    outcome: "기획부터 인증·결제·배포·모니터링까지 혼자 구축한 AI 학습 서비스",
    summary:
      "개념 그래프와 단계형 학습 세션으로 개발자의 개념 숙련도를 점수로 측정하는 서비스입니다.",
    lead: "AI와 대화하며 공부하면 '어디까지 아는지'가 남지 않는다는 점에서 시작한 서비스입니다. JavaScript·CS 개념을 그래프로 구조화하고, 개념 설명부터 객관식·서술형·응용 문제, 평가, 요약까지 이어지는 학습 세션으로 개념별 숙련도를 점수로 남깁니다. 기획 문서 작성부터 프론트엔드·백엔드, 인증·결제, 배포와 모니터링까지 혼자 진행했습니다.",
    meta: [
      { label: "역할", lines: ["1인 개발", "기획·설계·프론트·백엔드"] },
      { label: "구성", lines: ["개념 53개 · 도메인 4개", "학습 세션 8단계"] },
      {
        label: "기술",
        lines: [
          "Next.js, TanStack Query,",
          "NestJS, Prisma, PostgreSQL,",
          "OpenAI API"
        ]
      },
      {
        label: "운영",
        lines: ["Vercel · Railway", "Sentry · Lemon Squeezy"]
      }
    ],
    links: [
      { label: "서비스 바로가기", href: "https://deepdev.info/" },
      { label: "GitHub", href: "https://github.com/YujunSun0/DeepDev" }
    ],
    images: [
      {
        src: deepdevDashboard,
        alt: "DeepDev 대시보드 — Skill Index, 개념 트리, 업적",
        caption: "대시보드 — Skill Index와 레벨별 개념 트리"
      },
      {
        src: deepdevSession,
        alt: "DeepDev 학습 세션 결과 — 객관식·서술형·응용 점수와 AI 총평",
        caption: "세션 결과 — 문제 유형별 점수와 AI 총평"
      },
      {
        src: deepdevExplore,
        alt: "DeepDev 탐구 모드 대화 화면",
        caption: "탐구 모드 — 개념을 골라 AI와 자유롭게 대화"
      },
      {
        src: deepdevMain,
        alt: "DeepDev 랜딩 페이지",
        caption: "랜딩 페이지"
      }
    ],
    diagram: {
      type: "flow",
      steps: [
        { title: "개념 설명", description: "레벨에 맞춘 설명과 예제" },
        { title: "객관식", description: "정답률 40% 반영" },
        { title: "서술형", description: "설명의 논리 30% 반영" },
        { title: "응용", description: "문제 해결 30% 반영" },
        { title: "요약 · 숙련도 갱신", description: "개념별 점수와 약점 기록" }
      ],
      caption:
        "학습 세션은 단계별 API로 나뉘어 있고, 마지막 요약 단계에서 개념별 숙련도가 갱신됩니다."
    },
    tasks: [
      {
        title: "AI 대화를 '측정 가능한 학습'으로 바꾸기",
        steps: [
          {
            label: "문제",
            text: "자유 대화형 AI 학습은 대화가 끝나면 무엇을 얼마나 이해했는지 남지 않아, 다음에 무엇을 공부해야 할지 알기 어려웠습니다."
          },
          {
            label: "판단",
            text: "개념을 그래프로 나누고, 학습 한 번을 정해진 단계로 진행하면 결과를 같은 기준으로 비교할 수 있다고 판단했습니다. 구현 전에 PRD, 숙련도 점수 모델, 기술 아키텍처 문서를 먼저 작성했습니다."
          },
          {
            label: "구현",
            text: "세션을 개념 설명 → 객관식 → 서술형 → 응용 → 요약 단계로 나누고, 각 단계를 별도 API로 만들었습니다. LLM 응답은 JSON 형식으로 받아 점수와 피드백을 구조화했고, 객관식 40% · 서술형 30% · 응용 30% 가중 평균으로 개념별 숙련도를 갱신합니다."
          },
          {
            label: "결과",
            text: "JavaScript·자료구조·OS & 네트워크·React 4개 도메인, 53개 개념을 같은 기준으로 학습하고 대시보드에서 숙련도와 약점 개념을 확인"
          }
        ]
      },
      {
        title: "혼자 운영할 수 있는 서비스 기반 만들기",
        steps: [
          {
            label: "상황",
            text: "실제 사용자를 받는 서비스라서 기능 외에도 인증, 결제, 장애 대응, 비용 관리가 필요했지만, 이를 모두 혼자 운영해야 했습니다."
          },
          {
            label: "구현",
            text: "이메일 인증과 Google·GitHub 소셜 로그인, 탈퇴 후 재가입 제한을 구현했습니다. 결제는 Lemon Squeezy 구독으로 붙이고, 웹훅은 HMAC 서명을 timingSafeEqual로 검증한 뒤 처리했습니다."
          },
          {
            label: "구현",
            text: "요금제별로 월 세션 수, 토큰 사용량, 탐구 대화 횟수 한도를 두어 LLM 비용을 통제했습니다. API에는 rate limit과 Helmet 보안 헤더를 적용하고, Sentry 에러 수집과 헬스체크 기반 가용성 모니터링을 연결했습니다."
          },
          {
            label: "결과",
            text: "Vercel(웹)과 Railway(API)에 분리 배포해 운영 중이며, 장애·비용·결제 이슈를 혼자서도 추적할 수 있는 구조 확보"
          }
        ]
      },
      {
        title: "학습 화면의 상태를 URL과 서버 기준으로 정리하기",
        steps: [
          {
            label: "문제",
            text: "학습 기록과 도메인 탭 상태를 컴포넌트 state와 URL에 이중으로 들고 있어, 새로고침이나 뒤로 가기에서 화면이 어긋났습니다. 업적 알림도 페이지 진입 시 여러 개가 겹치며 순서가 밀렸습니다."
          },
          {
            label: "해결",
            text: "탭·필터 상태는 URL에서 파생하도록 바꿔 state를 없애고, 업적 알림은 큐로 순서를 보장하는 토스트로 변경했습니다. 출석 판정은 클라이언트가 아닌 서버에서 하도록 옮겼습니다."
          },
          {
            label: "결과",
            text: "새로고침·공유 링크에서도 같은 화면이 유지되고, 알림이 겹치거나 사라지는 문제 해소"
          }
        ]
      }
    ]
  },
  {
    slug: "tech-blog",
    company: SIDE,
    period: "2025.12 – 운영 중",
    name: "개인 기술 블로그",
    outcome: "블로그·갤러리·관리자 CMS를 직접 만들어 운영",
    summary:
      "글 작성부터 댓글, 통계, 갤러리까지 블로그에 필요한 기능과 관리자 화면을 직접 만들었습니다.",
    lead: "블로그 서비스를 빌려 쓰는 대신, 글을 쓰고 관리하는 도구까지 직접 만들어 운영하는 기술 블로그입니다. 마크다운 에디터와 관리자 CMS, 회원·비회원 댓글, 조회수 통계, 갤러리를 구현했고, Supabase Auth와 RLS로 관리자 권한을 나눴습니다. 이 포트폴리오에 연결된 글들도 이 블로그에서 작성했습니다.",
    meta: [
      { label: "역할", lines: ["1인 개발", "설계·구현·운영"] },
      {
        label: "기능",
        lines: ["관리자 CMS · 댓글 · 통계", "갤러리 · 검색 · 다크 모드"]
      },
      {
        label: "기술",
        lines: ["Next.js (App Router),", "Supabase, Tailwind CSS"]
      },
      { label: "운영", lines: ["Vercel", "GitHub Actions 크론"] }
    ],
    links: [
      { label: "블로그 바로가기", href: "https://yujunsun.tech/" },
      { label: "GitHub", href: "https://github.com/YujunSun0/Personal-Blog" }
    ],
    images: [
      {
        src: blogPost,
        alt: "기술 블로그 글 상세 화면 — 목차와 태그",
        caption: "글 상세 — 스크롤을 따라가는 목차"
      },
      {
        src: blogEditor,
        alt: "관리자 마크다운 에디터 — 작성 화면과 미리보기",
        caption: "관리자 에디터 — 마크다운 작성과 실시간 미리보기"
      },
      {
        src: blogMain,
        alt: "기술 블로그 메인 화면",
        caption: "메인"
      },
      {
        src: blogGallery,
        alt: "기술 블로그 갤러리 화면",
        caption: "갤러리 — masonry 레이아웃"
      }
    ],
    tasks: [
      {
        title: "글 쓰는 도구까지 직접 만들기",
        steps: [
          {
            label: "구현",
            text: "툴바와 실시간 미리보기가 있는 마크다운 에디터, 임시저장, 썸네일 업로드, 태그·카테고리 관리를 관리자 화면으로 만들었습니다. 본문은 remark-gfm과 rehype-highlight로 렌더링하고, rehype-slug로 만든 제목 앵커를 기반으로 스크롤을 따라가는 목차를 붙였습니다."
          },
          {
            label: "구현",
            text: "글 상세·메인·갤러리에 동적 메타 정보를 적용하고 sitemap과 robots를 생성해 검색 노출을 준비했습니다."
          },
          {
            label: "결과",
            text: "글 작성부터 발행·수정까지 외부 서비스 없이 운영"
          }
        ]
      },
      {
        title: "권한과 데이터 무결성을 서버와 DB에서 지키기",
        steps: [
          {
            label: "상황",
            text: "관리자 기능과 회원·비회원 댓글이 한 서비스에 섞여 있어, 화면에서 버튼을 숨기는 것만으로는 권한을 지킬 수 없었습니다."
          },
          {
            label: "구현",
            text: "Supabase RLS로 테이블 단위 권한을 나누고, API에서 관리자 여부를 다시 확인했습니다. 비회원 댓글은 비밀번호를 bcrypt 해시로만 저장하고, 수정·삭제할 때 해시를 비교해 검증합니다."
          },
          {
            label: "구현",
            text: "조회수는 쿠키와 IP 기반으로 24시간 내 중복 조회를 걸러 집계하고, 관리자 대시보드에서 일·주·월 단위 페이지뷰와 방문자 추이를 볼 수 있게 했습니다."
          },
          {
            label: "결과",
            text: "화면이 아닌 서버·DB 기준으로 권한을 보장하고, 새로고침만으로 부풀지 않는 조회수 통계 확보"
          }
        ]
      },
      {
        title: "무료 플랜 DB가 멈추지 않게 하기",
        steps: [
          {
            label: "문제",
            text: "Supabase 무료 플랜은 7일 동안 요청이 없으면 프로젝트가 일시 중지되어, 글을 자주 쓰지 않는 기간에 블로그가 멈출 수 있었습니다."
          },
          {
            label: "해결",
            text: "시크릿 헤더로 보호한 keepalive API를 만들고, GitHub Actions 크론이 3일마다 호출하도록 했습니다."
          },
          {
            label: "결과",
            text: "별도 서버 비용 없이 비활성 중지 방지"
          }
        ]
      }
    ]
  },
  {
    slug: "audio-studio",
    company: SIDE,
    period: "2026.11",
    name: "Audio Studio",
    outcome: "AI 보컬 분리 속도를 약 4배 개선한 로컬 GPU 웹앱",
    summary:
      "YouTube 링크 하나로 MP3 추출과 AI 보컬·악기 분리까지 처리하는 로컬 웹앱입니다.",
    lead: "YouTube 링크에서 MP3를 추출하고, AI 모델로 보컬·반주(또는 보컬·드럼·베이스·기타 4트랙)를 분리하는 웹앱입니다. 음원을 외부 서버로 보내지 않고 내 PC의 GPU에서 처리합니다. Python 서버(FastAPI)가 다운로드·변환·분리를 맡고, React가 진행 상황 표시와 트랙 믹서를 맡도록 역할을 나눴습니다.",
    meta: [
      { label: "역할", lines: ["1인 개발", "프론트엔드·백엔드"] },
      {
        label: "성과",
        lines: ["분리 속도 약 4배 개선", "(60초 음원 62초 → 16초)"]
      },
      {
        label: "기술",
        lines: [
          "React 19, TypeScript, Vite,",
          "FastAPI, PyTorch, Web Audio API"
        ]
      },
      { label: "실행", lines: ["로컬 실행 (Windows)", "GitHub에 코드 공개"] }
    ],
    links: [
      { label: "GitHub", href: "https://github.com/YujunSun0/audio-studio" }
    ],
    images: [
      {
        src: audioStudioMain,
        alt: "Audio Studio 메인 화면",
        caption: "메인 — 한 번에 처리 / MP3 추출 / 보컬 분리"
      },
      {
        src: audioStudioMixer,
        alt: "Audio Studio 4트랙 분리 결과와 믹서",
        caption: "4트랙 분리 결과 — 트랙별 파형, 볼륨, 음소거·솔로"
      }
    ],
    diagram: {
      type: "flow",
      steps: [
        { title: "YouTube 링크", description: "yt-dlp로 원본 오디오 수신" },
        { title: "변환", description: "ffmpeg로 44.1kHz WAV" },
        { title: "AI 분리", description: "BS-Roformer · Demucs (CUDA fp16)" },
        { title: "인코딩", description: "MP3 320k / WAV" },
        { title: "브라우저 믹서", description: "Web Audio API로 재생·믹스" }
      ],
      caption:
        "MP3가 아닌 원본 오디오로 분리해 손실 압축을 두 번 거치지 않습니다. 진행 상황은 단계마다 SSE로 전달합니다."
    },
    tasks: [
      {
        title: "보컬 분리 속도를 측정하며 튜닝하기",
        steps: [
          {
            label: "문제",
            text: "기본 설정(fp32, overlap 4)으로는 60초 음원을 분리하는 데 62초가 걸려, 실시간보다 느렸습니다."
          },
          {
            label: "판단",
            text: "추측으로 옵션을 바꾸지 않고 같은 음원으로 설정별 처리 시간을 측정했습니다. RTX 3060(Ampere)의 텐서 코어가 fp16 연산을 빠르게 처리한다는 점에 주목했습니다."
          },
          {
            label: "구현",
            text: "fp16 autocast를 켜고, 구간을 겹쳐 계산하는 overlap을 품질 옵션(빠르게 / 고품질)에 연결했습니다. 모델은 메모리에 유지하고, 옵션이 바뀌면 다시 불러오지 않고 설정값만 바꿉니다."
          },
          {
            label: "결과",
            text: "62초 → 30초(고품질) → 16초(빠르게), 약 4배 개선"
          }
        ]
      },
      {
        title: "오래 걸리는 작업의 진행 상황을 실시간으로 보여주기",
        steps: [
          {
            label: "상황",
            text: "다운로드부터 분리까지 수십 초 이상 걸리는 작업이라, 요청 하나로 기다리게 하면 사용자는 진행 여부를 알 수 없었습니다."
          },
          {
            label: "구현",
            text: "작업을 메모리 큐와 워커 스레드로 처리하고, 상태가 바뀔 때만 SSE로 전달했습니다. 연결이 끊기면 폴링으로 전환합니다. 진행률을 직접 알 수 없는 분리 단계는 측정한 처리 속도로 예상 시간을 보여줍니다."
          },
          {
            label: "구현",
            text: "분리된 트랙은 Web Audio API로 같은 시각에 재생해 싱크를 맞추고, 트랙별 볼륨·음소거·솔로와 파형 탐색을 Canvas로 직접 구현했습니다. 현재 믹스는 OfflineAudioContext로 렌더링해 WAV로 저장합니다."
          },
          {
            label: "결과",
            text: "단계·진행률·예상 시간을 보며 기다리고, 결과를 브라우저에서 바로 들어보고 저장"
          }
        ]
      },
      {
        title: "서버가 갑자기 응답하지 않던 문제 추적하기",
        steps: [
          {
            label: "문제",
            text: "서버 프로세스는 살아 있는데 요청에 응답하지 않는 현상이 간헐적으로 발생했습니다."
          },
          {
            label: "판단",
            text: "py-spy로 멈춘 프로세스의 스택을 확인해, 콘솔에 로그를 쓰는 줄에서 멈춰 있다는 것을 찾았습니다. Windows 콘솔의 빠른 편집 모드에서 창을 클릭하면 콘솔 출력이 막히는 것이 원인이었습니다."
          },
          {
            label: "해결",
            text: "실행 스크립트에서 Windows API(SetConsoleMode)로 해당 모드를 끄고, 포트 충돌·인코딩 문제도 실행 단계에서 미리 확인하도록 했습니다."
          },
          {
            label: "결과",
            text: "원인을 추측하지 않고 프로세스 상태를 단계적으로 좁혀 재발 방지"
          }
        ]
      }
    ]
  },
  {
    slug: "onginote",
    company: SIDE,
    period: "2026.11 – 운영 중",
    name: "온기노트",
    outcome: "2단계 LLM 구조와 사용량 한도로 비용을 통제하는 AI 상담 웹앱",
    summary:
      "말투가 다른 캐릭터들이 연애·인간관계 고민을 들어주고, 대화를 정리 카드와 인물 프로필로 남기는 웹앱입니다.",
    lead: "캐릭터와 대화하며 연애·인간관계 고민을 정리하는 웹앱입니다. 정해진 단계를 따라가지 않고 메시지마다 '들어주기 / 상황 해석 / 플랜 제안' 중 어떤 방식으로 답할지 판단하고, 상담이 끝나면 할 것·하지 말 것을 정리 카드로 만들어 줍니다. 민감한 대화를 다루는 서비스라 개인정보 보호와 LLM 비용 관리를 처음부터 함께 설계했고, 카카오·구글 로그인과 무료·Plus 요금제를 갖춰 Vercel에 배포해 운영하고 있습니다.",
    meta: [
      { label: "역할", lines: ["1인 개발", "기획·설계·구현"] },
      { label: "운영", lines: ["Vercel 배포", "카카오·구글 로그인"] },
      {
        label: "기술",
        lines: ["Next.js, TypeScript,", "Supabase, Claude API"]
      },
      {
        label: "핵심",
        lines: ["2단계 LLM 호출", "RLS · 사용량 한도"]
      }
    ],
    links: [{ label: "서비스 바로가기", href: "https://onginote.vercel.app/" }],
    images: [
      {
        src: onginoteChat,
        alt: "온기노트 PC 상담 화면 — 상담 목록, 대화, 인물 정보 패널",
        caption: "상담 — 목록·대화·참고 중인 인물 정보를 한 화면에"
      },
      {
        src: onginoteSummary,
        alt: "온기노트 상담 정리 카드 — 상황, 해석, 할 것, 하지 말 것",
        caption: "정리 카드 — 할 것·하지 말 것과 다시 물어볼 날짜"
      },
      {
        src: onginotePerson,
        alt: "온기노트 인물 프로필 — 좋아하는 것, 연락 스타일, 상담 기록",
        caption: "인물 프로필 — 대화에서 알게 된 정보와 상담 기록"
      },
      {
        src: onginoteHome,
        alt: "온기노트 홈 — 먼저 온 메시지, 내 사람들, 상담에서 정한 할 일",
        caption: "홈 — 캐릭터가 먼저 보낸 메시지와 할 일·다가오는 날"
      },
      {
        src: onginoteLanding,
        alt: "온기노트 랜딩 페이지",
        caption: "랜딩 페이지 — 카카오·구글 계정으로 바로 시작"
      }
    ],
    diagram: {
      type: "flow",
      steps: [
        { title: "사용자 메시지", description: "텍스트 · 카톡 캡처 최대 5장" },
        {
          title: "모드 판단",
          description: "가벼운 모델 + 구조화 출력"
        },
        {
          title: "캐릭터 답변",
          description: "캐싱된 시스템 프롬프트 + 모드 지시"
        },
        { title: "스트리밍 응답", description: "말풍선 2~3개로 나눠 표시" },
        { title: "정리 카드 · 프로필", description: "체크한 정보만 저장" }
      ],
      caption:
        "메시지 하나에 모델을 두 번 호출합니다. 판단은 가벼운 모델이, 답변은 요금제에 맞는 모델이 맡습니다."
    },
    tasks: [
      {
        title: "정해진 단계 대신 메시지마다 답변 방식을 고르기",
        steps: [
          {
            label: "문제",
            text: "'공감 → 해석 → 해결책'처럼 단계를 고정하면, 아직 하소연 중인 사용자에게 해결책을 내밀거나 이미 결정한 사용자에게 같은 선택지를 반복하게 됐습니다."
          },
          {
            label: "구현",
            text: "답변 전에 가벼운 모델이 최근 대화와 현재 모드를 보고 이번 답변 방식(들어주기·알아가기·상황 해석·반응·플랜)을 구조화 출력으로 고르게 했습니다. 사용자가 입력창 위 버튼으로 모드를 직접 고를 수도 있습니다."
          },
          {
            label: "결과",
            text: "대화 흐름에 맞춰 공감과 해결책을 오가고, 상담 끝에는 할 것·하지 말 것과 보낼 말 초안을 정리 카드로 제공"
          }
        ]
      },
      {
        title: "LLM 비용을 구조적으로 통제하기",
        steps: [
          {
            label: "상황",
            text: "메시지마다 모델을 두 번 부르고 대화가 길어질수록 보내는 양이 늘어나, 사용자가 늘면 비용을 예측하기 어려웠습니다."
          },
          {
            label: "구현",
            text: "시스템 프롬프트와 대화 앞부분에 프롬프트 캐싱을 적용하고, 캐시가 깨지지 않도록 대화 범위를 10개 단위로 밀었습니다. 깊게 생각할 턴만 모드 지시에서 effort를 올립니다."
          },
          {
            label: "구현",
            text: "API 응답마다 토큰과 금액을 서버 전용 테이블에 기록하고, 1인 하루 한도·서비스 전체 하루 한도·상담당 메시지 수를 요금제별로 적용했습니다. 사용자에게는 금액 대신 한도 대비 퍼센트를 보여줍니다."
          },
          {
            label: "결과",
            text: "사용자가 한도를 우회할 수 없는 구조로 서비스 전체 일일 비용 상한 확보"
          }
        ]
      },
      {
        title: "민감한 대화를 안전하게 다루기",
        steps: [
          {
            label: "구현",
            text: "모든 테이블에 Supabase RLS를 걸어 본인 데이터만 읽고 쓰게 했고, 대화 캡처 사진은 비공개 저장소에 두고 1시간짜리 서명 URL로만 보여줍니다."
          },
          {
            label: "구현",
            text: "첫 로그인 때 국외 이전(Anthropic)을 포함한 동의를 받기 전에는 모든 API가 403을 반환하고, 동의 여부는 토큰의 서버 전용 메타데이터로 확인해 요청마다 DB를 조회하지 않습니다. 탈퇴한 이메일은 HMAC 해시로만 보관합니다."
          },
          {
            label: "결과",
            text: "서버 코드에 실수가 있어도 DB가 다른 사람의 상담을 내주지 않는 구조"
          }
        ]
      }
    ]
  }
]

export const getSideProjectBySlug = (slug: string | undefined) =>
  sideProjectDetails.find((project) => project.slug === slug)
