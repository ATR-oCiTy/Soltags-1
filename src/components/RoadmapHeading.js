import { Grid, Box, Typography } from "@material-ui/core";

const RoadmapHeading = () => {
  return (
    <Grid container item align='center'>
      <Grid item xs={12}>
        <Typography variant='h2'>Roadmap</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        style={{ paddingLeft: "320px", paddingRight: "320px" }}
      >
        <h3>
          This roadmap outlines our goals and where we want to take MekaVerse.
          We have a lot of ideas and concepts that we are working on. It may
          evolve over time and hopefully become even better!
        </h3>
      </Grid>
    </Grid>
  );
};

export default RoadmapHeading;
