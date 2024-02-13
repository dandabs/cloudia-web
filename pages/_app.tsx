import "@/styles/globals.css";
import "@/node_modules/govuk-frontend/dist/govuk/govuk-frontend.min.css";
import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0/client";

// import 'bootstrap/dist/css/bootstrap.css'

export default function App({ Component, pageProps }: AppProps) {
  return <UserProvider><Component {...pageProps} /></UserProvider>;
}
