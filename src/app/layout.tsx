'use client'
// app/layout.tsx
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import {store} from '../store/store'

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