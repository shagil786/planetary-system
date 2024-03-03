import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export const Container = styled(motion.div)`
  position: relative;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 20px;
  gap: 20px;
  overflow: auto;
`;

export const Planet = styled(NavLink)`
  border: 1px solid rgba(102, 166, 229, 0.12);
  height: fit-content;
  backdrop-filter: blur(40px) saturate(150%) contrast(150%);
  padding: 20px;
  border-radius: 10px;
  transition: border 300ms ease;
  &::before {
    position: absolute;
    content: "";
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100px;
    transition: transform 300ms ease;
  }
  &:hover {
    transform: scale(1.02);
    transition: transform 0.2s ease;
  }
  @keyframes orbit {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }
  @media (min-width: 768px) {
    &:hover {
      border: 1px solid ${(props) => props.$planetColor};
      &::before {
        transform: scale(1.5) translate(-50%, -50%);
      }
    }
    &:focus {
      outline: none;
    }
    &:focus-visible {
      border: 1px solid ${(props) => props.$planetColor};
      &::before {
        transform: scale(1.5) translate(-50%, -50%);
      }
    }
    ${(props) =>
      props.$isActive
        ? css`
            border: 1px solid ${(props) => props.$planetColor};
            &::before {
              transform: scale(1.5) translate(-50%, -50%);
            }
          `
        : ""};
  }
`;
