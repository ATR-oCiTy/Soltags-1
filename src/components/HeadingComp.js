import { Grid, Typography } from "@material-ui/core";

const Heading = (props) => {
  return (
    <Grid container item align='center'>
      <Grid item xs={12}>
        <Typography variant='h2' className="solColor">{props.title}</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        style={{ paddingLeft: "10%", paddingRight: "10%" }}
      >
        <h3>{props.description}</h3>
      </Grid>
    </Grid>
  );
};

export default Heading;
