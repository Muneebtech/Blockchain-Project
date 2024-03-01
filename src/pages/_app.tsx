import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "../../config";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/redux/store";
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider attribute="class">
              <Component {...pageProps} />
            </ThemeProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </PersistGate>
    </Provider>
  );
}
