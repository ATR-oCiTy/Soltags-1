import { Grid } from "@material-ui/core";
import ImageTwitter from "../images/GoldTwitterLogo.png";
import ImageDiscord from "../images/GoldDiscordLogo.png";
import Logo from "../images/Logo.png";

const Navbar = () => {
  return (
    <Grid container item xs={12}>
      <Grid container item>
        <Grid item xs={10}>
          <img
            src={Logo}
            height='176px'
            width='176px'
            style={{ position: "relative", bottom: "25px" }}
          />
        </Grid>
        <Grid item xs={1}>
          <div className='hvr-wobble-to-top-right'>
            <a href='#'>
              <img
                src={ImageTwitter}
                alt='Twitter'
                height='36px'
                width='36px'
              />
            </a>
          </div>
        </Grid>
        <Grid item xs={1}>
          <div className='hvr-wobble-to-top-right'>
            <a href='#'>
              <img
                src={ImageDiscord}
                alt='Discord'
                height='40px'
                width='40px'
              />
            </a>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
