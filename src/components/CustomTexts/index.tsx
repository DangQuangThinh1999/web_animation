"use client";
import styles from "./CustomTexts.module.css";
import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../../utils/motion";

type PropsTypingText = {
  title: string;
  textStyles?: string;
};

export const TypingText = ({ title, textStyles }: PropsTypingText) => {
  let textStyle;
  if (textStyles === "text-center") {
    textStyle = styles.textCenter;
  }

  return (
    <motion.p
      variants={textContainer}
      className={`${styles.typingText} ${textStyle}`}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};
type PropsTitleText = {
  title: JSX.Element;
  textStyles?: string;
};
export const TitleText = ({ title, textStyles }: PropsTitleText) => {
  let textStyle;
  if (textStyles === "text-center") {
    textStyle = styles.textCenter;
  }
  return (
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={`${styles.titleText} ${textStyle}`}
    >
      {title}
    </motion.h2>
  );
};
