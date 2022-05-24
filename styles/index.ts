import Link from "next/link";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.625rem 7.5625rem;
  flex-wrap: wrap;
`;


const Menu = styled.div`
  display: flex;
  gap: 1.25rem;

  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
  }
`;
const Main = styled.main``;

const HomeSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8.25rem;
  margin-top: 4rem;
`;

const Texts = styled.div``;
const Title = styled.h1`
  font-size: 3.25rem;
  background: linear-gradient(
    180deg,
    #bc7add 0.52%,
    #5c59df 32.81%,
    #6f48df 49.48%,
    #8a20dd 66.67%,
    #b00fff 92.71%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const SubText = styled.p``;

const HamburgerMenu = styled.button`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 30px;
  width: 2rem;
  border: none;
  background: transparent;
  cursor: pointer;

  span {
    width: 100%;
    background: #ffffff;
    height: 2px;
  }
`;

const AboutMe = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SubTitle = styled.h2`
  font-size: 6.25rem;
  color: rgba(255, 255, 255, 0.2);
  font-family: "Inter", sans-serif;
  margin-top: 21.3125rem;
`;
const AboutSection = styled.section`
  display: flex;
  margin-top: 5.9375rem;
  gap: 8.0625rem;
`;
const TextSection = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Text = styled.p`
  width: 30rem;
  margin: 0 auto;
  margin-bottom: 6.25rem;
`;
const TitleSection = styled.h4`
  font-size: 2.5rem;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  margin-bottom: 2.9375rem;
`;

const EducationalArea = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.375rem;
  text-align: center;
`;
const Type = styled.section``;
const Small = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;
const TypeStudy = styled.p`
  font-size: 1rem;
  font-weight: 700;
  width: 90%;
  margin: 0 auto;
  margin-top: 1.125rem;
`;
const Time = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin-top: 1.125rem;
`;

const Habilities = styled.section`
  text-align: center;
`;

const TitleHabilities = styled.h4`
  margin-top: 2.625rem;
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: 400;
`;
const HabilitiesSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10.25rem;
  gap: 11.875rem;
  padding: 0 5.3125rem;
`;
const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Circle = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  position: relative;

  #bgCircle{
    position: absolute;
    top: 0;
    transition: 1s all;
    cursor: pointer;

    :hover{
      transform: rotate(360deg);
      filter: opacity(10);
    }
  }
  
`;
const Paragraph = styled.p`
  font-weight: 300;
  font-size: 0.8rem;
  margin-top: 2rem;
`;

const Projects = styled.section`
  text-align: center;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-around;
  margin-top: 13.1875rem;
`;

const Element = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 14px;
`;

const TitleSmall = styled.h5`
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 1.875rem;
`;

const MailLink = styled.a`
  color: #FFFFFF;
  text-decoration: none;
  font-family: "Inter", sans-serif;
  font-weight: 100;
`;

const MenuItem = styled.a`
  color: #FFFFFF;
  text-decoration: underline;
`;

export {
  Header,
  HamburgerMenu,
  Menu,
  Main,
  HomeSection,
  Texts,
  Title,
  SubText,
  AboutMe,
  SubTitle,
  AboutSection,
  TextSection,
  Text,
  TitleSection,
  EducationalArea,
  Type,
  Small,
  TypeStudy,
  Time,
  Habilities,
  TitleHabilities,
  HabilitiesSection,
  Section,
  Circle,
  Paragraph,
  Projects,
  Footer,
  Element,
  TitleSmall,
  MailLink,
  MenuItem,
};
