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
  isVisible: number;
  id: string;
}

interface projectInfoType {
  projectType: string;
  projectName: string;
  projectDate: string;
  projectSite: string;
  projectGithub: string;
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
  isVisible,
  id,
}: ProjectListsProps) => {
  const [isActive, setIsActive] = useState<number>(0);

  // 새 탭을 열어주는 함수
  const handleOpenNewTab = (url: string) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  return (
    <Projects $isVisible={isVisible} id={id}>
      <div className="left">
        <div className="image_slider_wrapper">
          <div className="active_image_wrapper">
            <img
              src={images[isActive]}
              className="active_image"
              alt="활성화 된 프로젝트 이미지"
            />
          </div>
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
              $fontColor={"#ffffff"}
              onClick={() => {
                handleOpenNewTab(projectInfo.projectSite);
              }}
            >
              <SvgIcon component={OpenInNewIcon} />
              <p>사이트 바로가기</p>
            </Button>
            <Button
              color={"#202020"}
              $fontColor={"#ffffff"}
              onClick={() => {
                handleOpenNewTab(projectInfo.projectGithub);
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
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: projectDetail.projectExplain }}
        ></div>
        <h3 className="mgt-20">기술 스택</h3>
        <ul className="stack_lists">
          {projectDetail.projectStacks.map((stack, idx) => {
            return (
              <li className="stack_list" key={idx}>
                <img src={stack} alt="프로젝트 기술 스택" />
              </li>
            );
          })}
        </ul>
        <h3 className="mgt-20">후기</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: projectDetail.projectReview }}
        ></div>
      </div>
    </Projects>
  );
};

export default ProjectLists;

const Projects = styled.section.attrs((props) => ({
  id: props.id,
}))<{ $isVisible: number }>`
  @keyframes menuAni {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  width: 100%;
  margin: 0 auto;
  display: ${(props) =>
    props.$isVisible === Number(props.id) ? "flex" : "none"};
  gap: 3rem;
  color: white;
  opacity: ${(props) => (props.$isVisible === Number(props.id) ? 1 : 0)};
  animation: menuAni 2000ms;

  @media (max-width: 850px) {
    flex-direction: column;
    width: 75%;

    .left {
      width: 100% !important;
    }

    .right {
      width: 100% !important;
    }
  }

  .mgt-20 {
    margin-top: 2rem;
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

      .active_image_wrapper {
        width: 100%;
        border: 1px solid rgba(255, 255, 255, 0.3);
        box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
        aspect-ratio: 16/8;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        overflow: hidden;
      }

      .active_image {
        width: 100%;
        will-change: transform;
        transition: 500ms ease;
      }

      .image_lists {
        width: 100%;
        height: 7rem;
        padding-bottom: 0.3rem;
        white-space: nowrap;
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;

        .image_list {
          box-sizing: border-box;
          cursor: pointer;
          vertical-align: middle;
          aspect-ratio: 16/8;
          width: 24%;
          /* height: 6rem; */
          /* overflow: hidden; */
          transition: 200ms ease;

          .slider_image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top; /* 이미지의 상단부터 표시 */
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
      color: rgb(164 189 255 / 100%);
    }

    .code_block {
      background: #555555;
      font-size: 85%;
      padding: 0.1rem 0.4rem;
      border-radius: 3px;
    }

    .stack_lists {
      width: 100%;
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
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

const Button = styled.button<{ $fontColor?: string }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.6rem;
  border-radius: 4px;
  background-color: ${(props) => props.color ?? "white"};
  color: ${(props) => props.$fontColor ?? "#000000"};
  font-size: 1.4rem;
  font-weight: 600;

  &:hover {
    opacity: 0.8;
  }
`;
