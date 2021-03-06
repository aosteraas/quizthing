import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Heading, Flex, Text, Button } from '@chakra-ui/core';
import { AppNavigation, AppRoute } from '../Routes';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const Navigation = () => {
  const [shown, setShown] = useState(false);
  const loggedIn = useSelector((s: RootState) => s.auth.success);
  return (
    <header>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        bg="blue.500"
        color="white"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg">
            QuizThing
          </Heading>
        </Flex>

        <Box
          display={{ sm: 'block', md: 'none' }}
          onClick={() => setShown(!shown)}
        >
          <svg
            fill="white"
            width="12px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Box>

        <Box
          display={{ sm: shown ? 'block' : 'none', md: 'flex' }}
          width={{ sm: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
        >
          {AppNavigation.map((appnav, idx) => (
            <Link key={idx} to={appnav.path}>
              <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
                {appnav.copy}
              </Text>
            </Link>
          ))}
        </Box>
        {!loggedIn && (
          <Box
            display={{ sm: shown ? 'block' : 'none', md: 'block' }}
            mt={{ base: 4, md: 0 }}
          >
            <Button bg="transparent" border="1px">
              <Link to={AppRoute.Register}>Create account</Link>
            </Button>
          </Box>
        )}
      </Flex>
    </header>
  );
};
