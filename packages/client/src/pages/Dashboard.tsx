import React, { useEffect } from 'react';
import {
  Box,
  Flex,
  PseudoBox,
  useTheme,
  Heading,
  Button,
  Skeleton,
} from '@chakra-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from '../components/layout';
import { RootState } from '../store';
import { createQuiz, loadQuizzes } from '../store/quiz';

export const Dashboard = () => {
  const dispatch = useDispatch();

  return (
    <Box as="section" width="100%" alignItems="center">
      <DashboardPanel>
        <Row>
          <Col>
            <MyQuizzes />
          </Col>
          <Col>
            <CreateQuiz />
          </Col>
        </Row>
      </DashboardPanel>
    </Box>
  );
};

const MyQuizzes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadQuizzes());
  }, [dispatch]);
  const { quizzes, loading } = useSelector((s: RootState) => s.quiz);
  return (
    <Flex
      border={`1px solid grey`}
      borderRadius="0.25rem"
      shadow="sm"
      flexDir="column"
    >
      <Row>
        <Heading fontSize="2rem">My Quizzes</Heading>
      </Row>
      <div>
        <Skeleton height="20px" my="10px" />
        <Skeleton height="20px" my="10px" />
        <Skeleton height="20px" my="10px" />
      </div>
    </Flex>
  );
};

const CreateQuiz = () => {
  const dispatch = useDispatch();

  return (
    <Flex
      border={`1px solid red`}
      borderRadius="0.25rem"
      shadow="sm"
      flexDir="column"
    >
      <Row>
        <Heading>Create Quiz</Heading>
        <Row>
          <p>things</p>
        </Row>
      </Row>
    </Flex>
  );
};

interface PanelProps {
  children: React.ReactChild;
}

const DashboardPanel = ({ children }: PanelProps) => {
  const t = useTheme();

  return (
    <PseudoBox
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
