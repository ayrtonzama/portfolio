import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
    <motion.div
    key={router.route}
      onExitComplete={() => window.scrollTo(0, 0)}
      transition={{ type: "linear", delay: 0.5 }}
      initial="pageInitial"
      exit="pageExit"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
          x: -200,
          y: 0,
        },
        pageAnimate: { opacity: 1, x: 0, y: 0 },
        pageExit: { opacity: 0, x: 0, y: -100 },
      }}
    >
  
        <Component {...pageProps} />
    </motion.div>
      </Layout>
  );
}

export default MyApp;
