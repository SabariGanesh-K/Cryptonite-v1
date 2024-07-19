'use client'
import { Box, Text } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import React from 'react'
export default function CoinSocialButton({data}:{data:any}) {
    console.log(data)
  return (
    <Box>
    <Link color={'white'} href='https://chakra-ui.com' isExternal>
    {data.name} <ExternalLinkIcon mx='2px' />
  </Link>
  </Box>
  )
}


