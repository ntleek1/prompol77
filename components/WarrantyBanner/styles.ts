import {  useTheme,createStyles,Theme } from "@mui/material/styles";


const WarrantyBannerStyles = (theme: Theme) =>
 createStyles({
    sxWarrantyBanner: {
      py: theme.spacing(6),
      backgroundImage: `url(/images/warrantyBanner.jpg)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      boxSizing: "border-box",
      height: 480, 
      
      "& .warrantyBanner-Container": {
         display: "flex",
         flexDirection: "column",
         alignItems: "center",
         height: "100%",
         },
    
      "& .warrantyBanner-Header": {
         textAlign: "center",
         },
    
      "& .warrantyBanner-Bottom": {
         display: "flex",
         gap: 2,
         alignSelf: "bottom",
         mt: "auto",
         color: "white",
         [theme.breakpoints.down("md")]: {
         flexDirection: "column",}
        }
      }
      

    });


       

      
    

  

       

  


  
 



   


   function useWarrantyBannerStyles() {
    const theme = useTheme();
    const styles = WarrantyBannerStyles(theme);
  
    return styles;
  }
  

export default useWarrantyBannerStyles;
