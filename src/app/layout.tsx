'use client'
// app/layout.tsx
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import {store} from '../store/store'
import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: {
//     template: '%s | CryptoNite',
//     default: 'CryptoNite | Yours Crypto partner',
//   },
//   description: 'Get the most out of your crypto investments with our tracking tools',

// };
export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <body>
        <ChakraProvider>
        <Provider store={store}>
          {children}
          </Provider></ChakraProvider>
      </body>
    </html>
  )
}