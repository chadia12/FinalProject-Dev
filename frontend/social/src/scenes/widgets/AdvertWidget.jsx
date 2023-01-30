import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () =>{
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return(
<WidgetWrapper>
    <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
           Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
    </FlexBetween>
    <img
      width="100%"
      height="auto"
      alt="advert"
      src="https://localhost:3002/assets/info4.jpeg"
      style={{ borderRadius: "0.75rem", margin: "0.75rem 0"}}
       />
       <FlexBetween>
          <Typography color={main} pr="0.5rem">ChadiaCosmetics </Typography>
          <Typography color={medium}>chadiaCosmetics.com</Typography>
       </FlexBetween>
       <Typography color={medium} m="0.5rem 0">
       Votre voie vers une beauté éblouissante et immaculée, 
       en veillant à ce que votre peau soit exfoliée et brillante comme de la lumière.
       </Typography>
</WidgetWrapper>
  )
}

export default AdvertWidget;