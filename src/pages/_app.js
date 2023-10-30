import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/variable.css'; // Importe seus estilos globais, se houver

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
