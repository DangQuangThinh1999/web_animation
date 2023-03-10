"use client";
import { motion } from "framer-motion";
import styles from "./Explore.module.css";
import { fadeIn } from "@/utils/motion";
import { Box, CardMedia, Typography } from "@mui/material";

type Props = {
  id: string;
  imgUrl: string;
  title: string;
  index: number;
  active: string;
  handleClick: (id: string) => void;
};

const ExploreCard = ({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
}: Props) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={` ${active === id ? styles.activeTrue : styles.activeFalse} ${
      styles.activeStyle
    }`}
    onClick={() => handleClick(id)}
  >
    <CardMedia
      component="img"
      width="100%"
      height="100%"
      src={imgUrl}
      alt={title}
      sx={{
        position: "absolute",
        objectFit: "cover",
        borderRadius: "24px",
      }}
    />

    {active !== id ? (
      <Typography
        component="h3"
        sx={{
          fontWeight: 600,
          sm: "fontSize:'26px'",
          fontSize: "18px",
          color: "white",
          position: "absolute",
          zIndex: 0,
          lg: "bottom:20,transform: 'rotate(-90deg)',msTransformOrigin:[0,0]",
        }}
      >
        {title}
      </Typography>
    ) : (
      <Box
        sx={{
          position: "absolute",
          left: 0,
          bottom: 0,
          padding: 8,
          display: "flex",

          justifyContent: "start",
          flexDirection: "column",
          background: "rgb(0,0,0,0.5)",
          borderBottomRightRadius: "24px",
          borderBottomLeftRadius: "24px",
        }}
      >
        <Typography
          component="p"
          sx={{
            fontWeight: "normal",
            fontSize: "16px",
            color: "white",
            direction: "uppercase",
            lineHeight: "20.16px",
          }}
        >
          Enter Metaverse
        </Typography>
        <Typography
          component="h2"
          sx={{
            mt: "24px",
            fontWeight: 600,
            sm: "fontSize:'32px'",
            fontSize: "24px",
            color: "white",
          }}
        >
          {title}
        </Typography>
      </Box>
    )}
  </motion.div>
);

export default ExploreCard;
