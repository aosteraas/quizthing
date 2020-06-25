import React from 'react';
import { Box, Flex, PseudoBox, useTheme } from '@chakra-ui/core';

export const Dashboard = () => {
  return (
    <Box as="section" width={'100%'}>
      <Flex justify="center">
        <DashboardPanel>
          <p>asd</p>
        </DashboardPanel>
      </Flex>
    </Box>
  );
};

interface PanelProps {
  children: React.ReactChild;
}
const DashboardPanel = ({ children }: PanelProps) => {
  const t = useTheme();

  return (
    <PseudoBox
      outline={`solid 2px ${t.colors.blue[200]}`}
      transition="outline 0.2s linear"
      borderRadius="md"
      _hover={{
        outline: `2px solid ${t.colors.blue[400]}`,
      }}
    >
      {children}
    </PseudoBox>
  );
};
