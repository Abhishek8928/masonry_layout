import TopNav from "@/components/TopNav";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
     <TopNav />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
