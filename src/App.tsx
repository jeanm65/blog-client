import { Theme, useTheme, css } from "@emotion/react";
import { Button, ThemeProvider, createTheme } from "@mui/material"
import { ThemeProvider as EmotionThemeProvider} from '@emotion/react'
import { green, purple } from '@mui/material/colors';
import { GlobalStyles } from "./GlobalStyles";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
      light: purple[300]
    },
    secondary: {
      main: green[500],
      dark: green[900]
    },
  },
});


const classes = {
  button: (theme: Theme) => ({
    backgroundColor: theme.palette.secondary.dark
  })
}

const Home = () => {
  const appTheme = useTheme();
  return (
      <>
       <Button variant="contained" sx={{ bgcolor:appTheme.palette.secondary.main }}>Button sx</Button>
       <Button variant="contained" css={{ backgroundColor:classes.button }}>Button emotion</Button>
      </>
     
  )
}

function App() {

  return (
    <ThemeProvider theme={ theme }>
      <EmotionThemeProvider theme={ theme }>
        <GlobalStyles theme={ theme } />
        <Home />
      </EmotionThemeProvider>
    </ThemeProvider>
  )
}

export default App
