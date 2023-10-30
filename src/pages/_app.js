import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/variable.css'; // Importe seus estilos globais, se houver
import '../../styles/global.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
