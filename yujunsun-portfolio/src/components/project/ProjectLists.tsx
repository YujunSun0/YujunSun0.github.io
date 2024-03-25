import { useState } from "react";
import styled from "styled-components";
import { SvgIcon } from "@mui/material";
// import HelpIcon from "@mui/icons-material/Help";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";

interface ProjectListsProps {
  images: string[];
  projectInfo: projectInfoType;
  projectDetail: projectDetailType;
}

interface projectInfoType {
  projectType: string;
  projectName: string;
  projectDate: string;
}

interface projectDetailType {
  projectExplain: string;
  projectStacks: string[];
  projectReview: string;
}

const ProjectLists = ({
  images,
  projectInfo,
  projectDetail,
}: ProjectListsProps) => {
  const [isActive, setIsActive] = useState<number>(0);

  // 새 탭을 열어주는 함수
  const handleOpenNewTab = (url: string) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  return (
    <Projects>
      <div className="left">
        <div className="image_slider_wrapper">
          <img
            src={images[isActive]}
            className="active_image"
            alt="활성화 된 프로젝트 이미지"
          />
          <ul className="image_lists">
            {images.map((image, idx) => {
              return (
                <li
                  key={idx}
                  className={`image_list ${isActive === idx ? "active" : ""}`}
                  onClick={() => {
                    setIsActive(idx);
                  }}
                >
                  <img
                    src={image}
                    className="slider_image"
                    alt="프로젝트 이미지 리스트"
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="introduce_wrapper">
          <span>{projectInfo.projectType}</span>
          <h3>{projectInfo.projectName}</h3>
          <p>{projectInfo.projectDate}</p>
          <div className="button_wrapper">
            {/* <Button>
              <SvgIcon component={HelpIcon} />
              <p>README</p>
            </Button> */}
            <Button
              color={"#5D5D8C"}
              fontColor={"#ffffff"}
              onClick={() => {
                handleOpenNewTab("https://yujunsun0.github.io/");
              }}
            >
              <SvgIcon component={OpenInNewIcon} />
              <p>사이트 바로가기</p>
            </Button>
            <Button
              color={"#202020"}
              fontColor={"#ffffff"}
              onClick={() => {
                handleOpenNewTab(
                  "https://github.com/YujunSun0/YujunSun0.github.io/tree/main"
                );
              }}
            >
              <SvgIcon component={GitHubIcon} />
              <p>GITHUB</p>
            </Button>
          </div>
        </div>
      </div>
      <div className="right">
        <h3>프로젝트 설명</h3>
        <div className="content">
          <span className="strong">
            포트폴리오용으로 제작한 웹사이트입니다.
          </span>{" "}
          한 페이지에서 편리한 정보 조회가 가능하도록 제작했으며,{" "}
          <span className="strong">반응형 웹</span>으로 제작되어 모든 환경에서
          볼 수 있습니다.
          <br />
          <br />
          개발 기간을 짧게 잡아 진행하였고 재사용 가능한 컴포넌트를 만들어
          유지보수에 용이하게 만들었습니다.
        </div>
        <h3 className="mgt-30">기술 스택</h3>
        <ul className="stack_lists">
          {projectDetail.projectStacks.map((stack, idx) => {
            return (
              <li className="stack_list" key={idx}>
                <img src={stack} alt="프로젝트 기술 스택" />
              </li>
            );
          })}
        </ul>
        <h3 className="mgt-30">후기</h3>
        <div className="content">
          이번 프로젝트는 앞으로도 업데이트해 나가야 할 사이트이므로{" "}
          <span className="strong">유지보수하기 좋은 코드</span>를 작성하려
          노력했으며,{" "}
        </div>
      </div>
    </Projects>
  );
};

export default ProjectLists;

const Projects = styled.section`
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 3rem;
  color: white;

  .mgt-30 {
    margin-top: 3rem;
  }

  .left {
    width: 45rem;
    display: flex;
    gap: 2rem;
    flex-direction: column;

    // 왼쪽 영역의 이미지 영역
    .image_slider_wrapper {
      width: 100%;
      display: flex;
      gap: 1rem;
      flex-direction: column;

      .active_image {
        border: 1px solid rgba(255, 255, 255, 0.3);
        box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
      }

      .image_lists {
        width: 100%;
        padding-bottom: 0.3rem;
        overflow-x: scroll;
        white-space: nowrap;

        .image_list {
          box-sizing: border-box;
          cursor: pointer;
          display: inline-block;
          width: 11.2rem;
          height: auto;
          transition: 200ms ease;

          .slider_image {
            width: 100%;
            will-change: transform;
          }

          &:not(:last-child) {
            margin-right: 1rem;
          }

          &:hover {
            border: 1px solid rgba(255, 255, 255, 0.5);
          }
        }

        .active {
          filter: brightness(50%);
          border: 1px solid rgba(255, 255, 255);
        }

        &::-webkit-scrollbar {
          display: block !important;
          height: 5px;
          background-color: transparent; /* 스크롤바 배경색을 투명으로 설정 */
        }

        &::-webkit-scrollbar-thumb {
          height: 30%; /* 스크롤바의 길이 */
          background: white; /* 스크롤바의 색상 */
        }

        &::-webkit-scrollbar-track {
          background: rgba(33, 122, 244, 0.1); /*스크롤바 뒷 배경 색상*/
        }
      }
    }

    // 왼쪽 영역의 프로젝트 간단 소개란
    .introduce_wrapper {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;

      > span {
        font-size: 1.4rem;
        font-weight: 500;
        color: #ffcd4d;
      }

      > h3 {
        font-size: 2rem;
      }

      > p {
        font-size: 1.4rem;
        font-weight: 500;
      }

      .button_wrapper {
        margin-top: 1rem;
        display: flex;
        gap: 1rem;
      }
    }
  }

  .right {
    /* border: 1px solid white; */
    width: 100%;
    display: flex;
    flex-direction: column;

    > h3 {
      color: #da8bff;
      font-family: var(--font-NotoSansKR);
      font-size: 1.8rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    // 제목 밑에 들어갈 내용
    .content {
      font-size: 1.4rem;
      word-break: keep-all;
      line-height: 2rem;
    }

    .strong {
      font-weight: 700;
    }

    .stack_lists {
      width: 100%;
      display: flex;
      gap: 1rem;
      margin-top: 1rem;

      .stack_list {
        width: 4rem;
        height: 4rem;

        > img {
          width: 3.5rem;
        }
      }
    }
  }
`;

const Button = styled.button<{ fontColor?: string }>`
  display: flex;
  gap: 0.5rem;
  padding: 0.8rem 1.6rem;
  border-radius: 4px;
  background-color: ${(props) => props.color ?? "white"};
  color: ${(props) => props.fontColor ?? "#000000"};
  font-weight: 600;

  &:hover {
    opacity: 0.8;
  }
`;
