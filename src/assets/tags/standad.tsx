import { StandadTagStyle } from "../../styles/tags.style";

const StandadTag = ({
  text,
  bgColor,
  ftColor,
}: {
  text: string;
  bgColor?: string;
  ftColor?: string;
}) => {
  return (
    <StandadTagStyle bgColor={bgColor} ftColor={ftColor}>
      {text}
    </StandadTagStyle>
  );
};

export default StandadTag;
