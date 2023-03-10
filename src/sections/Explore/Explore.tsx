"use client";

import { motion } from "framer-motion";
import styles from "./Explore.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { Box, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { TitleText, TypingText } from "../../components/CustomTexts";
import { useState } from "react";
import { exploreWorlds } from "@/constants";
import ExploreCard from "./ExploreCard";
import { styled } from "@mui/material/styles";

const Root = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
  },
}));
const Explore = () => {
  const [active, setActive] = useState<string>("active");

  return (
    <Box
      component="section"
      sx={{
        sm: "padding:16",
        xs: "padding:8",
        paddingX: 6,
        paddingY: 12,
      }}
      id="explore"
    >
      <motion.div
        variants={staggerContainer(0.3, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={styles.innerWidth}
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={
            <Box>
              Choose the world you want
              <Box
                component="br"
                sx={{ md: "display:'block'", display: "hidden" }}
              />
              to explore
            </Box>
          }
          textStyles="text-center"
        />
        <Root
          sx={{
            mt: "50px",
            display: "flex",
            flexDirection: "column",
            minHeight: active !== "active" ? "120vh" : "50vh",
            gap: 5,
          }}
        >
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </Root>
      </motion.div>
    </Box>
  );
};

export default Explore;
