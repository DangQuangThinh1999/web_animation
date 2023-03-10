"use client";

import { motion } from "framer-motion";
import styles from "./Navbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { navVariants } from "@/utils/motion";
import { Box, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import classNames from "classnames/bind";
// import style from "./Navbar.module.scss";
// const cx = classNames.bind(style);
const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={styles.navbar}
    >
      <Box sx={{ position: "absolute", width: "50%", inset: 0 }} />
      <Box
        className={styles.innerWidth}
        sx={{
          margin: "auto auto ",
          display: "flex",
          justifyContent: "space-between",
          gap: "24px",
        }}
      >
        <SearchIcon sx={{ height: "24px", width: "24px", color: "white" }} />
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            fontSize: "24px",
            color: "white",
            lineHeight: "30px",
          }}
        >
          METAVERSUS
        </Typography>
        <MenuIcon sx={{ height: "24px", width: "24px", color: "white" }} />
      </Box>
    </motion.nav>
  );
};

export default Navbar;
