'use client'
// app/layout.tsx
import { ChakraProvider, extendTheme, ToastProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import {store} from '../store/store'
console.log = function() {}

const theme = extendTheme({
  components: {
    Tabs: {
      baseStyle: {
        tab: {
          _disabled: {
            background: "#676D9A1A",
            opacity: "100%",
            cursor: "pointer",
          },
          "> *:first-of-type": {
            background: "#676D9A1A",
            opacity: "100%",
          },
        },
      },
    },
    // Checkbox: {
    //   parts: ["control","icon"],
    //   baseStyle: {
    //     control: {
    //       _checked: {
    //         _disabled: {
    //           bg: "#4D59E8",
    //           borderColor:"#2B2F35",

    //         }
    //       }
    //     },
    //     icon:{
    //       bg:"white.600"
    //     }
    //   }
    // }
       Checkbox: {
      baseStyle: {
// {color:'black',}
        icon: {
          // color: 'white',
          bg: '#4D59E8',
          color:'white',
          borderWidth:'0px',
          

          // borderColor: '#4D59E8',
          _disabled: {
          borderWidth:'0px',
          padding:'0px',
            color:'#4D59E8',
          bg: '#4D59E8',
            colorScheme:"#4D59E8",
            // iconColor:'white.800'
            // borderColor: '#4D59E8',
            // bg: 'red.800',
            
          },


        },
        control: {
          // border: '1px',
          // borderColor: 'gray.300',
          borderRadius: 'base',
          _disabled: {
            borderWidth: '0px',
            padding:'0px',
            color:'black',
          bg: '#4D59E8',


              // borderColor: '#4D59E8',
            // bg: '#4D59E8',
          },
        },
        
      },
    },
    // Radio: {
    //   control: {
    //     _checked: {
    //       color: "red.800",
    //       bg:"red.800"
    //     },
    //   },
      
    // },
    // Radio: {
    //       bg:'red.800',
    //       control: {
    //         _checked: {
    //           color: 'green.800',
    //           bg:`black`,
    //         },
    //       },
    
    
    // },
  },


  colors: {
    customBlue: {
      500: "#0969DA",
    },
    customPurple:{
      500:"#4D59E8",
    }
  },
  fonts: {
    body: "Inter, sans-serif",
  },
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <body>
        <ChakraProvider theme={theme}>
          <ToastProvider/>
        <Provider store={store}>
          {children}
          </Provider></ChakraProvider>
      </body>
    </html>
  )
}