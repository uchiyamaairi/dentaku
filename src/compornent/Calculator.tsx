import { useState } from "react";
import { calculate, State } from "../logic/calculate";
import ButtonPanel from "./ButtonPanel";
import Display from "./Display";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';


export default function Calculator() {
    const [state, setState] = useState<State>({
        current: "0",
        operand: 0,
        operator: null,
        isNextClear: false
    })
    const buttonHandler = (code: string) => {
        const nextState = calculate(code, state);
        setState(nextState);
    };
    return(
    <div>
        <Display value={state.current} />
        <ThemeProvider theme={theme}>
        <ButtonPanel buttonHandler={buttonHandler}/>
        </ThemeProvider>
    </div>
    );
}

const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: blueGrey[600],
      },
    },
  });
  
