import { Box, Typography } from "@mui/material";
import classNames from "classnames/bind";
import style from "./StartSteps.module.scss";
type Props = {
  number: number | string;
  text: string;
};
const cx = classNames.bind(style);

const StartSteps = ({ number, text }: Props) => (
  <Box className={cx("flexCenter")} sx={{ flexDirection: "row" }}>
    <Box
      sx={{
        flex: 1,
        width: "70px",
        height: "70px",
        borderRadius: "24px",
        backgroundColor: "#323F5D",
      }}
      className={cx("flexCenter")}
    >
      <Typography
        component={"p"}
        sx={{ fontWeight: "bold", fontSize: "20px", color: "white" }}
      >
        {number}
      </Typography>
    </Box>

    <Typography
      component={"p"}
      sx={{
        flex: 4,
        ml: "30px",
        fontWeight: "normal",
        fontSize: "18px",
        color: "#B0B0B0",
        lineHeight: "32.4px",
      }}
    >
      {text}
    </Typography>
  </Box>
);

export default StartSteps;
