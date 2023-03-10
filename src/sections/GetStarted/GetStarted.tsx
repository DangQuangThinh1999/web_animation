"use client";

import { motion } from "framer-motion";
import classNames from "classnames/bind";
import { startingFeatures } from "@/constants";

import { staggerContainer, fadeIn, planetVariants } from "@/utils/motion";
import { Box, CardMedia } from "@mui/material";
import { TitleText, TypingText } from "../../components/CustomTexts";
import styles from "./GetStarted.module.scss";
import StartSteps from "../../components/StartSteps";
const cx = classNames.bind(styles);

const GetStarted = () => (
  <Box
    component="section"
    className={cx("paddings")}
    sx={{ position: "relative", zIndex: 10 }}
  >
    <motion.div
      variants={staggerContainer(0.2, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${cx("wrapper")} ${cx("innerWidth")}`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={cx("flexCenter")}
      >
        <CardMedia
          component={"img"}
          width="90%"
          height="90%"
          sx={{ objectFit: "contain" }}
          src="/getStarted/planet-11.png"
          alt="get-started"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className={cx("text")}
      >
        <TypingText title="| How Metaversus Works" />
        <TitleText title={<>Get started with just a few clicks</>} />
        <Box
          sx={{
            mt: "31px",
            display: "flex",
            flexDirection: "column",
            maxWidth: "370px",
            gap: "24px",
          }}
        >
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? "0" : ""}${index + 1}`}
              text={feature}
            />
          ))}
        </Box>
      </motion.div>
    </motion.div>
  </Box>
);

export default GetStarted;
