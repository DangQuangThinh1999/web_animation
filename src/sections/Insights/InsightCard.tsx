"use client";

import { motion } from "framer-motion";

import { fadeIn } from "@/utils/motion";
import styles from "./Insights.module.scss";
import classNames from "classnames/bind";
import { Box, CardMedia, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Typography from "@mui/material/Typography";
const cx = classNames.bind(styles);
type Props = {
  imgUrl: string;
  title: string;
  subtitle: string;
  index: number;
};
const InsightCard = ({ imgUrl, title, subtitle, index }: Props) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className={cx("wrapperInsightCard")}
  >
    <CardMedia
      component={"img"}
      src={imgUrl}
      alt="planet-01"
      className={cx("mediaInsightCard")}
    />
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box className={cx("titleInsightCard")}>
        <Typography component={"h4"} className={cx("titleInsightCardH4")}>
          {title}
        </Typography>
        <Typography component={"p"} className={cx("InsightP")}>
          {subtitle}
        </Typography>
      </Box>

      <Box className={cx("lastInsight")}>
        <IconButton
          sx={{
            width: "40%",
            height: "40%",
            objectFit: "contain",
            color: "white",
          }}
        >
          <ArrowForwardIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  </motion.div>
);

export default InsightCard;
