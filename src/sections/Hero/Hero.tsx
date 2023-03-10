import { Box, CardMedia, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";
import React from "react";
import { slideIn, staggerContainer, textVariant } from "@/utils/motion";
import styles from "./Hero.module.css";
import Link from "next/link";
import Image from "next/image";
const Hero = () => {
  return (
    <Box
      sx={{
        sm: "paddingY:16,paddingLeft:16",
        xs: "paddingY:8",
        paddingY: 12,
        paddingLeft: 6,
      }}
    >
      <motion.div
        variants={staggerContainer(0.3, 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className={styles.innerWidth}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            zIndex: 10,
          }}
        >
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            Metaverse
          </motion.h1>
          <motion.div variants={textVariant(1.2)} className={styles.heroAfter}>
            <Typography variant="h1" className={styles.heroHeading}>
              Ma
            </Typography>
            <Box className={styles.heroDText} />
            <Typography variant="h1" className={styles.heroHeading}>
              Ness
            </Typography>
          </motion.div>
        </Box>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className={styles.slideIn}
        >
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "300px",
              background:
                "linear-gradient(to top,rgb(17, 24, 39), rgb(88, 28, 135), rgb(124, 58, 237))",
              borderTopLeftRadius: "140px",
              zIndex: 0,
              top: "-50px",
            }}
          />
          <CardMedia
            component="img"
            height="350px"
            width="100%"
            sx={{
              objectFit: "cover",
              zIndex: 10,
              borderTopLeftRadius: "140px",
              position: "relative",
              sm: "height:'500px'",
            }}
            image="/paella.png"
            alt="hero_cover"
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              sm: 'mt:"70px"',
              mt: "50px",
              paddingRight: "40px",
              position: "relative",
              zIndex: 10,
            }}
          >
            <Box
              component={"a"}
              href="#explore"
              sx={{ height: "100px", width: "100px", borderRadius: "50%" }}
            >
              <CardMedia
                component="img"
                height={"100%"}
                width="100%"
                sx={{
                  mt: -13,
                  objectFit: "object-contain",
                  zIndex: 10,
                  borderRadius: "50%",
                  position: "relative",
                  sm: "width:'155px',height:'155px'",
                }}
                image="/stamp.png"
                alt="stamp"
              />
            </Box>
          </Box>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default Hero;
