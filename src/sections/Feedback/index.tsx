"use client";

import { motion } from "framer-motion";

import { fadeIn, staggerContainer, zoomIn } from "@/utils/motion";
import classNames from "classnames/bind";
import { Box, CardMedia, Typography } from "@mui/material";
import styles from "./Feedback.module.scss";

const cx = classNames.bind(styles);
const Feedback = () => (
  <Box component={"section"} className={cx("paddings")}>
    <motion.div
      variants={staggerContainer(0.2, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${cx("innerWidth")} ${cx("wrapper")}`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className={cx("title")}
      >
        <Box className={cx("feedback-gradient")} />
        <Box>
          <Typography component="h4" className={cx("feedbackH4")}>
            Samantha
          </Typography>
          <Typography component="p" className={cx("feedbackP")}>
            Founder Metaverus
          </Typography>
        </Box>

        <Typography component="p" className={cx("feedback-p")}>
          “With the development of today&apos;s technology, metaverse is very
          useful for today&apos;s work, or can be called web 3.0. by using
          metaverse you can use it as anything”
        </Typography>
      </motion.div>

      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className={cx("motionImg")}
      >
        <CardMedia
          component={"img"}
          src="/rocket.png"
          alt="rocket"
          className={cx("rocket")}
        />

        <motion.div variants={zoomIn(0.4, 1)} className={cx("lastRocket")}>
          <Box sx={{ height: "150px", width: "150px", borderRadius: "50%" }}>
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
              }}
              image="/stamp.png"
              alt="stamp"
            />
          </Box>
        </motion.div>
      </motion.div>
    </motion.div>
  </Box>
);

export default Feedback;
