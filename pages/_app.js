import "../styles/globals.css";


// GLOBLY IMORT
import {NaveBar} from "../components/componentIndex";
const MyApp = ({ Component, pageProps }) => (
  <div>
    <NaveBar />
    <Component {...pageProps} />
  </div>
);

export default MyApp;
