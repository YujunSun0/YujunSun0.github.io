import { SvgIcon, type SvgIconTypeMap } from "@mui/material";
import { type OverridableComponent } from "@mui/material/OverridableComponent";
import { styled } from "styled-components";

interface InfoProps {
  icon: OverridableComponent<SvgIconTypeMap>;
  title: string;
  body: string;
}

const Info = ({ icon, title, body }: InfoProps) => {
  return (
    <Container>
      <SvgIcon component={icon} sx={{ stroke: "#ffffff", strokeWidth: 1 }} />
      <div className="content">
        <h4>{title}</h4>
        <p>{body}</p>
      </div>
    </Container>
  );
};

export default Info;

const Container = styled.li`
  display: flex;
  align-items: center;
  gap: 3rem;
  width: 100%;
  max-width: 18rem;
  margin: 0 auto 4rem;
  opacity: 0.8;
  white-space: nowrap;

  > svg {
    width: 4rem;
    height: 4rem;
    margin-bottom: 1rem;
  }

  .content {
    > h4 {
      margin-bottom: 1rem;
      font-size: 2rem;
    }

    > p {
      font-size: 1.6rem;
    }
  }
`;
