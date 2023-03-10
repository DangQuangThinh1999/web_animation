"use client";

import { motion } from "framer-motion";

import { insights } from "@/constants";
import { staggerContainer } from "@/utils/motion";
import { TitleText, TypingText } from "@/components/CustomTexts";
import classNames from "classnames/bind";
import { Box, CardMedia } from "@mui/material";
import styles from "./Insights.module.scss";
import InsightCard from "./InsightCard";
const cx = classNames.bind(styles);
const Insights = () => (
  <Box
    component="section"
    sx={{ position: "relative", zIndex: 10 }}
    className={cx("paddings")}
  >
    <motion.div
      variants={staggerContainer(0.2, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${cx("innerWidth")} ${cx("wrapper")} `}
    >
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText
        title={<>Insight about metaverse</>}
        textStyles="text-center"
      />
      <Box
        sx={{
          mt: "50px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </Box>
    </motion.div>
  </Box>
);

export default Insights;
