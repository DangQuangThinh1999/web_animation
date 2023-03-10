"use client";

import { motion } from "framer-motion";
import { newFeatures } from "@/constants";
import { TitleText, TypingText } from "@/components/CustomTexts";
import { planetVariants, staggerContainer, fadeIn } from "@/utils/motion";
import { Box, CardMedia } from "@mui/material";
import NewFeatures from "@/components/NewFeatures";
import styles from "./WhatsNew.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const WhatsNew = () => (
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
      className={`${cx("innerWidth")} ${cx("wrapper")}`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className={cx("paragraph")}
      >
        <TypingText title="| Whats new?" />
        <TitleText title={<>What &apos;s new about Metaversus?</>} />
        <Box
          sx={{
            mt: "48px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </Box>
      </motion.div>

      <motion.div
        variants={planetVariants("right")}
        className={cx("flexCenter")}
      >
        <CardMedia
          component={"img"}
          src="WhatsNew/planet.png"
          alt="get-started"
          sx={{
            height: "90%",
            width: "90%",
            objectFit: "contain",
          }}
        />
      </motion.div>
    </motion.div>
  </Box>
);

export default WhatsNew;
