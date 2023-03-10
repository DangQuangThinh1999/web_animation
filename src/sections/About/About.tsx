"use client";

import { motion } from "framer-motion";
import { TypingText } from "@/components/CustomTexts";

import styles from "./About.module.css";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { Box, CardMedia } from "@mui/material";

const About = () => (
  <Box
    component="section"
    sx={{
      sm: "padding:16",
      xs: "padding:8",
      paddingX: 6,
      paddingY: 12,
      position: "relative",
      zIndex: 10,
    }}
  >
    <Box
      sx={{
        zIndex: 0,
      }}
    />
    <motion.div
      variants={staggerContainer(1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className={styles.paragraph}
      >
        <Box component="span" sx={{ fontWeight: 800, color: "white" }}>
          Metaverse
        </Box>{" "}
        is a new thing in the future, where you can enjoy the virtual world by
        feeling like it &apos;s really real, you can feel what you feel in this
        metaverse world, because this is really the{" "}
        <Box component="span" sx={{ fontWeight: 800, color: "white" }}>
          madness of the metaverse
        </Box>{" "}
        of today, using only{" "}
        <Box component="span" sx={{ fontWeight: 800, color: "white" }}>
          VR
        </Box>{" "}
        devices you can easily explore the metaverse world you want, turn your
        dreams into reality. Let&apos;s{" "}
        <Box component="span" sx={{ fontWeight: 800, color: "white" }}>
          explore
        </Box>{" "}
        the madness of the metaverse by scrolling down
      </motion.p>

      <motion.div variants={fadeIn("up", "tween", 0.3, 1)}>
        <CardMedia
          component="img"
          height="28px"
          width="18px"
          sx={{
            objectFit: "contain",
            marginTop: "28px",
          }}
          image="/vector.png"
          alt="vector"
        />
      </motion.div>
    </motion.div>
  </Box>
);

export default About;
