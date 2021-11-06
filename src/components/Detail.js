import { Grid } from "@material-ui/core";

const Detail = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh", backgroundColor: "black"}}
    >
      <Grid
        item
        xs={6}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      > 
        <div style={{paddingLeft:"15%", paddingRight:"15%"}}>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
        <p>
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        </div>
      </Grid>
      <Grid
        item
        xs={6}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="https://i.imgur.com/qA6t4QN.gif"
          alt="..."
          style={{ height: "70vh" }}
        />
      </Grid>
    </Grid>
  );
};

export default Detail;
