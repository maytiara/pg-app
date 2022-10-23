import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const StyleButton = styled(Button)(() => ({
}));

export const RoundedButton = styled(StyleButton)(() => ({
  borderRadius: '2rem'
}));

export default StyleButton;