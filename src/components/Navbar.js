import { Grid } from "@material-ui/core";

const Navbar = () => {
  return (
    <Grid container item xs={12}>
      <Grid container item>
        <Grid item xs={1}>
          Logo
        </Grid>
        <Grid item xs={1}>
          Soltags
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
