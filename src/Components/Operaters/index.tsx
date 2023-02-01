import React, { useState } from "react";

import clsx from "clsx";
// mui
import { Box, Grid, Stack, TextField, Button, useStepContext } from "@mui/material";
import { makeStyles } from "@mui/styles";

type Props = {
  inputValue: number,
  setInputValue: Function,
  setOperater: Function
}

const OperaterComponent: React.FC<Props> = ({ inputValue, setInputValue, setOperater }) => {
  const [active, setActive] = useState<boolean>(false);

  // const useStyles = makeStyles({
  //   asyncButton: {
  //     color: "white",
  //     backgroundColor: active ? "green" : "red",
  //     cursor: "pointer",
  //     transition: "background-color 2s ease-in"
  //   }
  // });

  // const classes = useStyles();

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (event: React.FormEvent<HTMLInputElement>) => {
    const value = parseInt((event.target as HTMLInputElement).value)
    setInputValue(value)
  }

  const handleOperation = (val: number) => {
    setOperater(val)
  }

  const handleAsync = (val: number) => {
    setTimeout(() => setOperater(val), 3000)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        p: 1,
        m: 5,
        bgcolor: 'background.paper',
        borderRadius: 1,
      }}>
      <Box>
        <h2>Operater Component</h2>
      </Box>
      <Box>
        <TextField label="Number" type="number" variant="standard" onChange={handleInput} value={inputValue} margin="normal" />
      </Box>
      <Box>
        <Stack spacing={2} direction="row" mb={2}>
          <Button variant="outlined" onClick={() => handleOperation(-1)}>-</Button>
          <Button variant="outlined" onClick={() => handleOperation(1)}>+</Button>
        </Stack>
      </Box>
      <Box>
        <Stack spacing={2} direction="row" mb={2}>
          <Button variant="contained" onClick={() => handleAsync(-1)}>Async -</Button>
          <Button variant="contained" onClick={() => handleAsync(1)}>Async +</Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default OperaterComponent;