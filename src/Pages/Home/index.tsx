import React, { useState } from "react";

// mui
import { Grid, Paper, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

// Components
import { OperaterComponent, ResultComponent } from "../../Components";

const HomePage = () => {
  const [inputValue, setInputValue] = useState<number>(0);
  const [operater, setOperater] = useState<number>(0);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <h1>Hi</h1>
        </Grid>
        <Grid item xs={6}>
          <OperaterComponent inputValue={inputValue} setInputValue={setInputValue} setOperater={setOperater} />
        </Grid>
        <Grid item xs={6}>
          <ResultComponent inputValue={inputValue} operater={operater} setOperater={setOperater} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default HomePage;