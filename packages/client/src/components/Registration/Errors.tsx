import React from 'react';
import { Alert, AlertTitle, AlertDescription } from '@chakra-ui/core';

interface Props {
  errors: string[];
}

export const Errors = ({ errors }: Props) => {
  if (!errors.length) return <></>;

  return (
    <Alert
      variant="left-accent"
      status="error"
      flexDirection="column"
      alignContent="flex-start"
    >
      <AlertTitle>There were problems with your request</AlertTitle>
      <AlertDescription>
        <ul style={{ paddingLeft: '1rem' }}>
          {errors.map((err, idx) => (
            <li key={idx}>{err}</li>
          ))}
        </ul>
      </AlertDescription>
    </Alert>
  );
};
