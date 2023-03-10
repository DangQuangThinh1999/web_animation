import variables from "@/styles/variables.module.scss";

type Props = {
  children: JSX.Element;
};
const GlobalStyles = ({ children }: Props) => {
  return children;
};

export default GlobalStyles;
