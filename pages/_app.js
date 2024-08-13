import Wrapper from "@/layout/wrapper/Wrapper";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import { persistor, store } from "@/reduxToolkit/Store";
import { PersistGate } from "redux-persist/integration/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
    const [isSSR, setIsSSR] = useState(true);

    useEffect(() => {
        setIsSSR(false);
    }, []);

    if (isSSR) return null;

    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <CookiesProvider>
                        <Wrapper>
                            <Component {...pageProps} />
                            <ToastContainer />
                            <ReactQueryDevtools initialIsOpen={false} />
                        </Wrapper>
                    </CookiesProvider>
                </PersistGate>
            </Provider>
        </QueryClientProvider>
    );
}
