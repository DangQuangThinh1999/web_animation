"use client";

import { motion } from "framer-motion";
import { socials } from "@/constants";
import { footerVariants } from "@/utils/motion";
import { Box, Button, CardMedia, IconButton, Typography } from "@mui/material";
import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${cx("xPaddings")} ${cx("wrapper")}`}
  >
    <Box className={cx("footer-gradient")} />
    <Box
      sx={{ marginX: "auto", display: "flex", flexDirection: "column", gap: 8 }}
      className={cx("innerWidth")}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
        }}
      >
        <Typography component="h4" className={cx("title-h4")}>
          Enter the Metaverse
        </Typography>
        <Button type="button" className={cx("title")}>
          <Typography
            component="span"
            sx={{ fontWeight: "normal", fontSize: "16px", color: "white" }}
          >
            Enter Metaverse
          </Typography>
        </Button>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{ mb: "50px", height: "2px", bgcolor: "white", opacity: 10 }}
        />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 4,
          }}
        >
          <Typography
            component="h4"
            sx={{ fontWeight: 600, fontSize: "24px", color: "white" }}
          >
            METAVERUS
          </Typography>
          <Typography
            component="p"
            sx={{
              fontWeight: "normal",
              fontSize: "14px",
              color: "white",
              opacity: 50,
            }}
          >
            Copyright © 2021 - 2022 Metaversus. All rights reserved.
          </Typography>

          <Box sx={{ display: "flex", gap: 4 }}>
            {socials.map((social, id) => (
              <IconButton
                key={id}
                sx={{
                  width: "24px",
                  height: "24px",
                  objectFit: "contain",
                  cursor: "pointer",
                  color: "white",
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  </motion.footer>
);

export default Footer;
