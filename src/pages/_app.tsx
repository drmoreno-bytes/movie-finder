import '@/styles/globals.css';
import 'primeicons/primeicons.css';
import type { AppProps } from 'next/app';
import Tailwind from 'primereact/passthrough/tailwind';
import { store } from '@/store';
import { Provider } from 'react-redux';

import { PrimeReactProvider } from 'primereact/api';
import { TopBar } from '@/components/TopBar';
export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
                <TopBar />
                <Component {...pageProps} />
            </PrimeReactProvider>
        </Provider>
    );
}
