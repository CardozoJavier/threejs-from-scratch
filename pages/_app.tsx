import '../styles/sphere.css'
import '../styles/globals.css'

interface PageProps {}
interface MyAppProps {
  Component: React.ComponentType;
  pageProps: PageProps;
}


function MyApp({ Component, pageProps }: MyAppProps) {
  return <Component {...pageProps} />;
}
export default MyApp
