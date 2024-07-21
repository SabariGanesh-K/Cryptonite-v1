import PageCard from '@/PageCard/PageCard';
import { Box,Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <PageCard>
      
    <Box minH={'100vh'} alignItems={'center'} >
      <Box >
        <Box  />
        <Text  fontSize='3xl' textAlign={'center'} fontWeight={'600'} fontFamily={'Inter'} color={'white'}>
          Oops, the page you are looking for does not exist !
        </Text>
        <Text  fontSize='2xl' color={'white'} fontWeight={'600'} fontFamily={'Inter'} >
          The requested URL was not found on this app. Please check the URL and try again.
        </Text>
        <Box  className="mt-6">
          <Link
            href="/v1"
            
            prefetch={false}
          >
        <Text  fontSize='2xl' color={'gray'} fontWeight={'600'} fontFamily={'Inter'} >

            Go to Dashboard</Text>
          </Link>
        </Box>
      </Box>
    </Box>
    </PageCard>
  
  );
};

export default NotFoundPage;

