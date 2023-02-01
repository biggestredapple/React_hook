import React, { useEffect, useMemo, useState } from "react";

//mui
import { Box, Grid, TextField, Button } from '@mui/material'

type Props = {
  inputValue: number,
  operater: number,
  setOperater: Function
}

const ResultComponent: React.FC<Props> = ({ inputValue, operater, setOperater }) => {
  const [value, setValue] = useState<number>(5);
  const multiValue = useMemo(() => value * 2, [value])
  const squareValue = useMemo(() => Math.pow(value, 2), [value]);

  useEffect(() => {
    let newValue = 0
    if (operater === -1) {
      newValue = value - inputValue
    } else if (operater === 1) {
      newValue = value + inputValue
    } else {
      newValue = value
    }
    setValue(newValue);
    setOperater(0);
  }, [operater])

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
        <TextField margin="normal" disabled label="Result" value={value} />
      </Box>
      <Box>
        <TextField margin="normal" disabled label="Multiple" value={multiValue} />
      </Box>
      <Box>
        <TextField margin="normal" disabled label="Square" value={squareValue} />
      </Box>
    </Box>
  )
}

export default ResultComponent