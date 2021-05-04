import { Box, TextField, makeStyles, Typography } from "@material-ui/core";
import React, { FC } from "react";

const useStyle = makeStyles((theme) => {
  return {
    container: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
  };
});

const Add: FC = () => {
  const classes = useStyle();
  return (
    <Box className={classes.container}>
      <Typography variant="h5" style={{ marginBottom: 15 }}>
        Add new Contact
      </Typography>
      <TextField
        label="Name"
        variant="outlined"
        value=""
        placeholder="Full Name"
        type="text"
      />
      <TextField
        label="Phone"
        variant="outlined"
        value=""
        placeholder="Phone Number"
        type="text"
      />
      <TextField
        label="Job"
        variant="outlined"
        value=""
        placeholder="Job Title"
        type="text"
      />
      <TextField
        label="Company"
        variant="outlined"
        value=""
        placeholder="COmpany Name"
        type="text"
      />
      <TextField
        label="Email"
        variant="outlined"
        value=""
        placeholder="Your Email"
      />
    </Box>
  );
};

export default Add;
