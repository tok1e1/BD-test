import { StyledBackground } from "../src/operatorslist/styleIndex";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledBackground>
      <Component {...pageProps} />
    </StyledBackground>
  );
}

export default MyApp;
