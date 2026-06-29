import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Calendar, Zap } from 'lucide-react';
import image from '../../assets/notebook.png'

const About = () => {
    const [currentExperience, setCurrentExperience] = useState<string>(
        "Full-stack Developer with two years of experience building modern web applications and scalable interfaces. Skilled in React, TypeScript, and NestJS, with solid foundations in real-time systems and geospatial visualization. Experienced with CI/CD, Auth0 integration, and clean code practices. Passionate about crafting performant, elegant, and maintainable user experiences, now aiming to specialize in Frontend Development"
    );

    const experiences = [
        {
            title: "Full-stack Developer - Macaron.ai",
            description: "Full-Stack developer with a product mindset. I have participated in Macaron`s Control Center migration to React, centralized auth with Auth0 (RBAC) and built real-time UIs with Socket.io. I care about UX, team quality (CI/CD, TDD, Husky, ESLint/Prettier) and advanced mapping (Deck.GL/Nebula.GL) to deliver reliable, scalable tools.",
            date: "06/2024 - 11/2024",
            highlight: "Collaboration",
            tags: ["ReactJS", "TypeScript", "Angular", "Socket.io", "Docker", "Auth0", "NestJS", "MongoDB" ]
        },
        {
            title: "E-commerce Ads Manager",
            description: "Managed sales on Facebook Marketplace, Shopify, Amazon, and Etsy. Coordinated a team for customer service and logistics. Created listings, issued invoices, and developed commercial strategies.",
            date: "06/2021 - 01/2024",
            highlight: "Leadership",
            tags: ["Leadership", "Sales", "Marketplaces", "Invoices",  "Logistics", "Comercial Strategies"]
        }
    ];

    const currentExp = experiences.find(exp => exp.description === currentExperience) || {
        title: "Career Overview",
        date: "2 Years of experience",
        icon: <Zap className="w-5 h-5" />,
        highlight: "Overview",
        tags: ["Spring Boot","Next.js", "Angular","React.js", "JavaScript", "TypeScript", ]
    };

    return (
        <AboutSection id="about">
            <Header>
                <Title>Career</Title>
                <Subtitle>Full Stack Developer</Subtitle>
            </Header>

            <Content>
                <MainInfo>
                    <ExperienceHeader>
                        <div>
                            <ExperienceTitle>{currentExp.title}</ExperienceTitle>
                            <ExperienceDate>
                                <Calendar size={20} />
                                {currentExp.date}
                            </ExperienceDate>
                        </div>
                    </ExperienceHeader>

                    <Description>{currentExperience}</Description>

                    {currentExp.tags && (
                        <TagsContainer>
                            {currentExp.tags.map((tag, index) => (
                                <Tag key={index}>{tag}</Tag>
                            ))}
                        </TagsContainer>
                    )}

                </MainInfo>

                <ExperienceContainer>
                    <SectionTitle>Experiences</SectionTitle>
                    {experiences.map((experience, index) => (
                        <ExperienceBox
                            key={index}
                            onClick={() => setCurrentExperience(experience.description)}
                            isActive={currentExperience === experience.description}
                        >
                            <BoxHeader>
                                <BoxTitle>{experience.title}</BoxTitle>
                            </BoxHeader>
                            <BoxDate>{experience.date.split(' - ')[0]}</BoxDate>
                        </ExperienceBox>
                    ))}

                    <ExperienceBox
                        onClick={() => setCurrentExperience("Full Stack Developer with two years of experience in web applications and microservices. Solid expertise in Spring Boot, Angular and Next.js, with hands-on DevOps practices. Currently pursuing a postgraduate degree in Cloud Computing, fluent in English, with a proven track record of delivering MVPs and optimizing digital processes.")}
                        isActive={!experiences.find(exp => exp.description === currentExperience)}
                        isOverview
                    >
                        <BoxHeader>
                            <BoxTitle>Overview</BoxTitle>
                        </BoxHeader>
                        <BoxDescription>
                            Summary of my career as a developer, highlighting my key skills and most relevant experiences.
                        </BoxDescription>
                        <BoxDate>2 Years</BoxDate>
                    </ExperienceBox>
                </ExperienceContainer>
            </Content>
        </AboutSection>
    );
};

export default About;

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
    from { transform: translateX(-20px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
`;

const AboutSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 60px 150px;
  padding-top: 150px;
  min-height: 100vh;
  color: white;
  overflow: hidden;
  background: linear-gradient(to right, #012846ff, #000, transparent);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center right;
background-image:
  linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent 80%),
  url(${image});
    opacity: 0.3;
    pointer-events: none;
    z-index: 1;
  }


&::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background:
    linear-gradient(to bottom, #000 1px, transparent 50px),
    linear-gradient(to top, #000 1px, transparent 50px),
    linear-gradient(to left, rgba(0, 0, 0, 0.5), transparent 0%);

  z-index: 3;
  pointer-events: none;
}

  > * {
    position: relative;
    z-index: 3;
  }

  @media (max-width: 1024px) {
    padding: 40px 20px;

    &::before,
    &::after {
      width: 100%;
        background: linear-gradient(to right, #022742ff, #000, transparent);
        z-index: 0;
    }
  }
`;

const Header = styled.div`
    margin-bottom: 60px;
    animation: ${fadeIn} 0.8s ease-out;
`;

const Title = styled.h2`
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 10px;
    background: var(--primary-light);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;

const Subtitle = styled.p`
    font-size: 18px;
    color: #9ca3af;
    margin: 0;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 80px;
    max-width: 1400px;
    width: 100%;

    @media (max-width: 1024px) {
        flex-direction: column;
        gap: 40px;
    }
`;

const MainInfo = styled.div`
    flex: 1.2;
    animation: ${slideIn} 0.8s ease-out 0.2s both;
`;

const ExperienceHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
`;

const ExperienceTitle = styled.h3`
    font-size: 32px;
    margin: 0;
    // color: var(--primary-light);
    color: white;
    font-weight: 600;
`;

const ExperienceDate = styled.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: #9ca3af;
    font-size: 16px;
    margin-top: 10px;
`;

const Description = styled.p`
    font-size: 20px;
    line-height: 1.7;
    margin-bottom: 30px;
    color: #e5e7eb;
`;

const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 40px;
`;

const Tag = styled.span`
    padding: 8px 16px;
    background: #076E9E;
    border: 1px solid #076E9E;
    border-radius: 10px;
    font-size: 14px;
    color: #ffffffff;
    font-weight: 500;
`;


const ExperienceContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    animation: ${slideIn} 0.8s ease-out 0.4s both;
`;

const SectionTitle = styled.h3`
    font-size: 24px;
    margin-bottom: 20px;
    color: #f3f4f6;
    color: var(--primary-light);
    font-weight: 600;
`;

const ExperienceBox = styled.div<{ isActive?: boolean; isOverview?: boolean }>`
    background: ${props => props.isActive
        ? 'linear-gradient(135deg, transparent, #022742ff)'
        : 'transparent'
    };
    border-left: 1px solid ${props => props.isActive
        ? 'var(--primary)'
        : '#044574ff;'
    };
    padding: 24px;
    // border-radius: 16px;
    cursor: pointer;
    transition: all 0.5s ease;
    position: relative;
    overflow: hidden;

    ${props => props.isOverview && `
        border: 1px solid #044574ff;
    `}

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 2px;
        background: ${props => props.isActive
            ? 'linear-gradient(90deg, var(--primary), #0662a3ff)'
            : 'transparent'
        };
        transition: all 0.5s ease;
    }

    &:hover {
        // transform: translateX(-4px);
        border-color: var(--primary);

        &::before {
            background: linear-gradient(90deg, var(--primary), #0662a3ff);
        }
    }
`;

const BoxHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
`;

const BoxTitle = styled.h4`
    font-size: 18px;
    color: var(--primary-light);
    color: white;
    margin: 0;
    font-weight: 600;
`;

const BoxDescription = styled.p`
    font-size: 14px;
    color: #9ca3af;
    line-height: 1.5;
    margin-bottom: 15px;
`;

const BoxDate = styled.span`
    font-size: 12px;
    color: #c9c9c9;
    font-weight: 500;
`;
