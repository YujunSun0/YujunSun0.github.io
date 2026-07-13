import React, { useCallback, useEffect, useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { styled } from "styled-components"
import Spinner from "assets/Rolling2-1s-21px.gif"
import { useNavigate } from "react-router-dom"
import scrollIntersectionObserver from "utils/scrollIntersectionObserver"
import { debounce } from "utils/debounce"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import GitHubIcon from "@mui/icons-material/GitHub"
import EmailIcon from "@mui/icons-material/Email"
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined"
import { SvgIcon } from "@mui/material"
import { motion } from "framer-motion"
import { blogLinks } from "@/data/blog"

const footerLinks = [
  {
    href: "https://github.com/YujunSun0",
    label: "GitHub",
    type: "icon" as const,
    icon: GitHubIcon,
  },
  {
    href: "mailto:yujunsun0@gmail.com",
    label: "Email",
    type: "icon" as const,
    icon: EmailIcon,
  },
  {
    href: blogLinks.current,
    label: "Blog",
    type: "icon" as const,
    icon: ArticleOutlinedIcon,
  },
  {
    href: blogLinks.archive,
    label: "이전 블로그",
    type: "velog" as const,
  },
]

interface InputType {
  [key: string]: string
  from_name: string
  from_email: string
  message: string
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

const Contact = () => {
  const [values, setValues] = useState<InputType>({
    from_name: "",
    from_email: "",
    message: "",
  })
  const [isDisabled, setIsDisabled] = useState<boolean>(true)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const form = useRef<HTMLFormElement>(null)
  const target = useRef(null)
  const navigate = useNavigate()

  const [observe, unobserve] = scrollIntersectionObserver(() => {
    navigate("/#5")
  })

  const onChangeValues = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    if (form.current) {
      emailjs
        .send(
          `${import.meta.env.VITE_SERVICE_ID || process.env.REACT_APP_SERVICE_ID}`,
          `${import.meta.env.VITE_TEMPLATE_ID || process.env.REACT_APP_TEMPLATE_ID}`,
          values,
          `${import.meta.env.VITE_PUBLIC_KEY || process.env.REACT_APP_PUBLIC_KEY}`
        )
        .then(() => {
          setIsLoading(false)
          form.current?.reset()
          setValues({ from_email: "", from_name: "", message: "" })
          toast.success("이메일 전송이 완료되었습니다")
        })
        .catch(() => {
          toast.error("이메일 전송에 오류가 발생했습니다.")
          setIsLoading(false)
        })
    }
  }

  const checkValues = useCallback(
    debounce((vals: InputType) => {
      const hasBlank = Object.values(vals).some((v) => v === "")
      setIsDisabled(hasBlank)
    }, 700),
    []
  )

  useEffect(() => {
    if (target.current) observe(target.current)
    return () => {
      if (target.current) unobserve(target.current)
    }
  }, [])

  useEffect(() => {
    checkValues(values)
  }, [values])

  return (
    <>
      <Container id="5" ref={target}>
        <InnerWrapper>
          <SectionTitle
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2>Contact</h2>
            <p className="subtitle">
              궁금한 점이 있으시면 편하게 연락주세요.
            </p>
          </SectionTitle>

          <FormContainer ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input
              type="text"
              name="from_name"
              value={values.from_name}
              onChange={onChangeValues}
            />
            <label>Email</label>
            <input
              type="email"
              name="from_email"
              value={values.from_email}
              onChange={onChangeValues}
            />
            <label>Message</label>
            <textarea
              name="message"
              value={values.message}
              onChange={onChangeValues}
            />
            <button type="submit" disabled={isDisabled}>
              {isLoading ? <img src={Spinner} alt="로딩" /> : "Send Message"}
            </button>
          </FormContainer>
        </InnerWrapper>

        <Footer>
          <FooterLinks>
            {footerLinks.map((link) => (
              <FooterLinkWrap key={link.label}>
                <FooterLink
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.type === "velog" ? (
                    <VelogIcon>V</VelogIcon>
                  ) : (
                    <SvgIcon component={link.icon} />
                  )}
                </FooterLink>
                <FooterTooltip>{link.label}</FooterTooltip>
              </FooterLinkWrap>
            ))}
          </FooterLinks>
          <Copyright>
            Copyright &copy; 2026. YujunSun. All rights reserved.
          </Copyright>
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
      />
    </>
  )
}

export default Contact

const Container = styled.section`
  width: 100%;
  background-color: var(--color-bg);
`

const InnerWrapper = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 8rem 2rem 4rem;
  text-align: center;
`

const SectionTitle = styled.div`
  margin-bottom: 3rem;
  text-align: center;

  > h2 {
    font-size: 2.8rem;
    color: var(--color-white);
    position: relative;
    display: inline-block;

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 3px;
      background: var(--color-accent-gradient);
      margin-top: 0.8rem;
      border-radius: 2px;
    }
  }

  .subtitle {
    font-size: 1.4rem;
    color: var(--color-text-muted);
    margin-top: 1.2rem;
  }
`

const FormContainer = styled.form`
  max-width: 50rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: left;

  > label {
    font-size: 1.2rem;
    color: var(--color-text-muted);
    margin-bottom: 0.6rem;
    font-weight: 600;
  }

  > input {
    outline: none;
    margin-bottom: 2rem;
    padding: 0 1.2rem;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    height: 4rem;
    background-color: var(--color-bg-card);
    color: var(--color-text);
    font-size: 1.3rem;
    font-family: var(--font-NotoSansKR);
    transition: border-color 0.2s ease;

    &:focus {
      border-color: var(--color-primary);
    }
  }

  > textarea {
    margin-bottom: 2rem;
    border: 1px solid var(--color-border);
    padding: 1.2rem;
    resize: none;
    border-radius: 8px;
    height: 15rem;
    outline: none;
    background-color: var(--color-bg-card);
    color: var(--color-text);
    font-size: 1.3rem;
    font-family: var(--font-NotoSansKR);
    transition: border-color 0.2s ease;

    &:focus {
      border-color: var(--color-primary);
    }
  }

  > button {
    height: 4rem;
    border: none;
    background: var(--color-primary);
    border-radius: 8px;
    color: var(--color-white);
    font-size: 1.4rem;
    font-weight: 600;
    font-family: var(--font-NotoSansKR);
    cursor: pointer;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.85;
    }

    &:disabled {
      opacity: 0.4;
      pointer-events: none;
    }
  }
`

const Footer = styled.footer`
  width: 100%;
  padding: 4rem 2rem;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  border-top: 1px solid var(--color-border);
  overflow: visible;
`

const FooterLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`

const FooterLinkWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover > span:last-child {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0);
  }
`

const FooterLink = styled.a`
  color: var(--color-text-muted);
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: var(--color-primary-light);
  }

  > svg {
    width: 2.2rem;
    height: 2.2rem;
  }
`

const FooterTooltip = styled.span`
  position: absolute;
  bottom: calc(100% + 0.8rem);
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  padding: 0.4rem 0.9rem;
  background-color: #d1d5db;
  color: #1f2937;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1;
  border-radius: 4px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.15s ease,
    transform 0.15s ease,
    visibility 0.15s ease;
  pointer-events: none;
  z-index: 20;
`

const VelogIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.2rem;
  height: 2.2rem;
  font-size: 1.3rem;
  font-weight: 800;
  color: inherit;
  border: 2px solid currentColor;
  border-radius: 4px;
`

const Copyright = styled.p`
  font-size: 1.2rem;
  color: var(--color-text-dim);
`

const Toast = styled(ToastContainer)`
  .Toastify__toast {
    font-size: 1.4rem;
  }

  .Toastify__toast-icon {
    width: 20px;
    height: 20px;
  }
`
