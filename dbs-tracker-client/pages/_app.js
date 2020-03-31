// import './styles.scss'
import { ThemeProvider, ColorModeProvider, CSSReset } from "@chakra-ui/core";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ColorModeProvider>
        <CSSReset />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>

  )
}
