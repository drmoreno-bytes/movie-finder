import '@/styles/globals.css';
import 'primeicons/primeicons.css';
import type { AppProps } from 'next/app';
import Tailwind from 'primereact/passthrough/tailwind';

import { PrimeReactProvider } from 'primereact/api';
export default function App({ Component, pageProps }: AppProps) {
    return (
        <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
            <Component {...pageProps} />
        </PrimeReactProvider>
    );
}
