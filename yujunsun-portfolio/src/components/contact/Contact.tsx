import React, { useCallback, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { styled } from "styled-components";
import Spinner from "assets/Rolling2-1s-21px.gif";
import { useNavigate } from "react-router-dom";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import { debounce } from "utils/debounce";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import github from "assets/github.png";
import velog from "assets/velog.png";

interface inputType {
  [key: string]: any;
  from_name: string;
  from_email: string;
  message: string;
}

const Contact = () => {
  const [values, setValues] = useState<inputType>({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useRef<HTMLFormElement>(null); // 이메일 form
  const target = useRef(null); // section 영역

  const navigate = useNavigate();

  const [observe, unobserve] = useIntersectionObserver(() => {
    navigate("/#4");
  });

  const onChangeValues = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    if (form.current) {
      emailjs
        .send(
          `${process.env.REACT_APP_SERVICE_ID}`,
          `${process.env.REACT_APP_TEMPLATE_ID}`,
          values,
          `${process.env.REACT_APP_PUBLIC_KEY}`
        )
        .then(() => {
          setIsLoading(false);
          form.current?.reset();
          setValues((prev) => {
            return { ...prev, from_email: "", from_name: "", message: "" };
          });
          // 작성완료 모달이나 토스트 띄우기
          toast.success("이메일 전송이 완료되었습니다");
        })
        .catch(() => {
          alert("이메일 전송에 오류가 발생했습니다.");
          setIsLoading(false);
        });
    }
  };

  const checkValues = useCallback(
    debounce((values: inputType) => {
      let isBlank = false;
      let isNotValid = true;

      // 빈 값 체크
      for (const key in values) {
        if (values[key] === "") {
          isBlank = true;
        }
      }
      if (!isBlank) {
        isNotValid = false;
      }
      setIsDisabled(isNotValid);
    }, 700),
    []
  );

  useEffect(() => {
    if (target.current !== null && target.current !== undefined) {
      observe(target.current);
    }

    return () => {
      if (target.current !== null && target.current !== undefined) {
        unobserve(target.current);
      }
    };
  }, []);

  useEffect(() => {
    checkValues(values);
  }, [values]);

  return (
    <>
      <Container ref={target}>
        <SectionTitle>
          <h3>CONTACT</h3>
        </SectionTitle>
        <FormContainer ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input
            type="text"
            name="from_name"
            //   placeholder="제목을 입력해주세요"
            value={values.from_name}
            onChange={onChangeValues}
          />
          <label>Email</label>
          <input
            type="email"
            name="from_email"
            value={values.from_email}
            //   placeholder={"이메일을 입력해주세요"}
            onChange={onChangeValues}
          />
          <label>Message</label>
          <textarea
            name="message"
            //   placeholder="내용을 입력해주세요"
            value={values.message}
            onChange={onChangeValues}
          />
          <button type="submit" disabled={isDisabled}>
            {isLoading ? <img src={Spinner} alt="로딩" /> : "Send Message"}
          </button>
        </FormContainer>
        <Footer>
          <div className="icon_wrapper">
            <a
              href="https://github.com/YujunSun0"
              target="_blank"
              rel="noreferrer"
              className="img_li"
            >
              <img src={github} alt="깃허브 링크 아이콘" />
            </a>
            <a
              href="https://velog.io/@yujunsun0/posts"
              target="_blank"
              rel="noreferrer"
              className="img_li velog"
            >
              <img src={velog} alt="velog 링크 아이콘" />
            </a>
          </div>
          <div className="copyright">
            Copyright ⓒ 2024. YujunSun. All rights reserved.
          </div>
        </Footer>
      </Container>
      <Toast
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        // transition:Slide
      />
    </>
  );
};

export default Contact;

const Container = styled.section`
  width: 100%;
  padding: 8rem 0 0;
  background-color: #f5f5f5;
`;

const SectionTitle = styled.div`
  display: table;
  font-size: 3.8rem;
  font-weight: 500;
  border-bottom: 2px solid #cccccc;
  padding-bottom: 1.5rem;
  margin: 0 auto 4.5rem;
  letter-spacing: 4px;
`;

const FormContainer = styled.form`
  max-width: 50rem;
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 8rem;
  padding: 3rem 10rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  box-shadow: rgba(149, 160, 165, 0.2) 0px 8px 25px;

  > label {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  > input {
    outline: none;
    margin-bottom: 2rem;
    padding: 0 1rem;
    border: 1px solid #b3b3b3;
    border-radius: 6px;
    height: 3.5rem;
  }

  > button {
    height: 3.5rem;
    border: none;
    background: rgb(135, 100, 255);
    pointer-events: auto;
    border-radius: 4px;
    color: white;
    cursor: pointer;

    &:disabled {
      opacity: 0.4;
      pointer-events: none;
    }
  }

  > textarea {
    margin-bottom: 2rem;
    border: 1px solid #b3b3b3;
    padding: 1rem;
    resize: none;
    border-radius: 6px;
    height: 15rem;
    outline: none;
  }

  > h3 {
    text-align: center;
    margin-bottom: 1rem;
    color: #000000;
  }

  > p {
    text-align: center;
    font-size: 1.4rem;
    color: #777777;
    margin-bottom: 5rem;
  }
`;

const Footer = styled.footer`
  width: 100%;
  height: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  justify-content: center;
  background: rgb(23, 24, 25);

  .icon_wrapper {
    display: flex;
    gap: 4rem;
  }

  .img_li {
    cursor: pointer;
    width: 4rem;
    height: 4rem;
    background-color: #fff;
    border-radius: 5rem;
    padding: 0.2rem;

    > img {
      width: 100%;
    }

    &:hover {
      opacity: 0.8;
    }
  }

  .velog {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    padding: 1px;

    > img {
      width: 90%;
    }
  }

  .copyright {
    color: white;
    font-size: 1.2rem;
  }
`;

const Toast = styled(ToastContainer)`
  .Tostify {
    max-width: 50rem;
  }

  .Toastify__toast-container {
    width: 100%;
  }

  .Toastify__toast {
    font-size: 1.6rem;
    width: 100%;
  }

  .Toastify__toast-icon {
    width: 22px;
    height: 22px;
  }
`;
