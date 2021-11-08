import {
  Grid,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const FaqComp = (props) => {
  return (
    <Grid item xs={12}>
      <Box
        border={3}
        borderRadius='borderRadius'
        mx={5}
        my={1}
        style={{
          borderImageSlice: "1",
          borderImageSource:
            "linear-gradient(41deg, #DC1FFF, #03E1FF, #00FFA3)",
        }}
      >
        <Accordion square={true}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box display='flex' flexDirection='row' color='white'>
              <Box marginLeft={2}>
                <b>{props.question}</b>
              </Box>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Box marginLeft={2} color='#9ca3af'>
              {props.answer}
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Grid>
  );
};

export default FaqComp;
