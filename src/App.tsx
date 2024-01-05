import { Theme, useTheme } from "@emotion/react";
import { Button, ThemeProvider, createTheme, styled } from "@mui/material"
import { ThemeProvider as EmotionThemeProvider} from '@emotion/react'
import { green, purple } from '@mui/material/colors';

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
      <Button variant="contained" sx={{ bgcolor:appTheme.palette.secondary.main }}>Button sx</Button>
  )
}

function App() {

  return (
    <ThemeProvider theme={ theme }>
      <EmotionThemeProvider theme={ theme }>
        <Button variant="contained" css={classes.button}>Button emotion</Button>
        <Home />
      </EmotionThemeProvider>
    </ThemeProvider>
  )
}

export default App
