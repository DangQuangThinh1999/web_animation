"use client";

import { motion } from "framer-motion";

import { TitleText, TypingText } from "@/components/CustomTexts";
import { fadeIn, staggerContainer, zoomIn } from "@/utils/motion";
import styles from "./World.module.scss";
import classNames from "classnames/bind";
import { Box, CardMedia } from "@mui/material";
import { ImagesAvatars } from "@/constants";

const cx = classNames.bind(styles);

const World = () => (
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
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className={cx("map")}
      >
        <CardMedia
          component={"img"}
          src="World/map.png"
          alt="map"
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        {/* All Images Avatar */}
        {ImagesAvatars.map(
          (
            image: { url: string | undefined; style: object },
            index: number
          ) => (
            <Box
              className={cx(`avatar-${index}`)}
              key={index}
              sx={{
                position: "absolute",
                width: "70px",
                height: "70px",
                padding: "6px",
                backgroundColor: "#5D6680",
                borderRadius: "9999px",
              }}
            >
              <motion.div variants={zoomIn(0.5, 2.5)}>
                <CardMedia
                  component={"img"}
                  src={image.url}
                  alt="people"
                  sx={{ width: "100%", height: "100%" }}
                />
              </motion.div>
            </Box>
          )
        )}
      </motion.div>
    </motion.div>
  </Box>
);

export default World;
