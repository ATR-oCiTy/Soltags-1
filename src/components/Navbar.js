import { Grid } from "@material-ui/core";
import ImageTwitter from "../images/GoldTwitterLogo.png";
import ImageDiscord from "../images/GoldDiscordLogo.png";
import Logo from "../images/Logo.png";

const Navbar = () => {
  return (
    <Grid container item xs={12}>
      <Grid container item>
        <Grid item xs={12} md={2} style={{display:"flex", justifyContent:"center"}}>
          <img
            src={Logo}
            width='200px'
            style={{ position: "relative", bottom: "25px", imageResolution: "500dpi", imageRendering:"-webkit-optimize-contrast" }}
          />
        </Grid>
        <Grid item xs={0} md={8} style={{display:"flex", justifyContent:"center"}}>
        </Grid>
        <Grid item xs={6} md={1} style={{display:"flex", justifyContent:"center"}}>
          <div className='hvr-wobble-to-top-right'>
            <a href='#'>
              <img
                src={ImageTwitter}
                alt='Twitter'
                height='36px'
                width='36px'
                style={{imageResolution: "500dpi", imageRendering:"-webkit-optimize-contrast"}}
              />
            </a>
          </div>
        </Grid>
        <Grid item xs={6} md={1} style={{display:"flex", justifyContent:"center"}}>
          <div className='hvr-wobble-to-top-right'>
            <a href='https://discord.gg/389YKrvf'>
              <img
                src={ImageDiscord}
                alt='Discord'
                height='40px'
                width='40px'
                style={{imageResolution: "500dpi", imageRendering:"-webkit-optimize-contrast"}}
              />
            </a>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
