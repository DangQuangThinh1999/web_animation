import { Box, CardMedia, Typography } from "@mui/material";
import styles from "./NewFeatures.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

type Props = {
  imgUrl: string;
  title: string;
  subtitle: string;
};

const NewFeatures = ({ imgUrl, title, subtitle }: Props) => (
  <Box className={cx("wrapper")}>
    <Box
      sx={{
        width: "70px",
        height: "70px",
        borderRadius: "24px",
        backgroundColor: "#323F5D",
      }}
      className={cx("flexCenter")}
    >
      <CardMedia
        component={"img"}
        src={imgUrl}
        alt="icon"
        sx={{ width: "50%", height: "50%", objectFit: "contain" }}
      />
    </Box>
    <Typography
      component={"h1"}
      sx={{
        mt: "26px",
        fontWeight: "bold",
        color: "white",
        fontSize: "24px",
        lineHeight: "30.24px",
      }}
    >
      Title {title}
    </Typography>
    <Typography
      component={"p"}
      sx={{
        flex: "1 1 0%",
        mt: "16px",
        fontWeight: "normal",
        color: "#B0B0B0",
        lineHeight: "32.4PX",
        fontSize: "18px",
      }}
    >
      {subtitle}
    </Typography>
  </Box>
);

export default NewFeatures;
