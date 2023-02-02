import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/index.scss";
import { QueryClientProvider, QueryClient } from "react-query";
import NavBar from "@/components/NavBar";
import DebugFooter from "@/components/DebugFooter";
import { isDevelopment } from "@/constants";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavBar />
        <Component {...pageProps} />
        {isDevelopment && <DebugFooter />}
      </QueryClientProvider>
    </>
  );
}
