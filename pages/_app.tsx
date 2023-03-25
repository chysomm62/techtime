import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { FC } from "react";

interface NoopProps {
  children?: any;
}

const NoLayout: FC<NoopProps> = ({ children }) => <>{children}</>;

export default function App({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || NoLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
