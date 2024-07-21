'use client'
// app/layout.tsx
import { ChakraProvider, ToastProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import {store} from '../store/store'
console.log = function() {}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <body>
        <ChakraProvider>
          <ToastProvider/>
        <Provider store={store}>
          {children}
          </Provider></ChakraProvider>
      </body>
    </html>
  )
}