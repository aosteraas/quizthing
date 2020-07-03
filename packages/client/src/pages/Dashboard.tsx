import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  PseudoBox,
  useTheme,
  Input,
  Heading,
  Button,
  Skeleton,
  FormControl,
  FormLabel,
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
      <Row flexDir="column">
        <Heading fontSize="2rem">My Quizzes</Heading>
        {loading && (
          <div>
            <Skeleton height="20px" my="10px" width="100%" />
            <Skeleton height="20px" my="10px" width="100%" />
            <Skeleton height="20px" my="10px" width="100%" />
          </div>
        )}
        {!loading &&
          quizzes.length &&
          quizzes.map((q, idx) => <div key={idx}>{q.title}</div>)}
        {!loading && !quizzes.length && <div>Create a quiz dickhead</div>}
      </Row>
    </Flex>
  );
};

const CreateQuiz = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState<string>();
  const { success } = useSelector((s: RootState) => s.quiz);

  useEffect(() => {
    if (success) {
      setTitle('');
      setDescription(undefined);
    }
  }, [success]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.length) return;
    dispatch(createQuiz({ title, description }));
  };

  return (
    <Flex
      border={`1px solid red`}
      borderRadius="0.25rem"
      shadow="sm"
      flexDir="column"
    >
      <Row>
        <Col>
          <Heading>Create Quiz</Heading>
          <form onSubmit={onSubmit}>
            <FormControl>
              <FormLabel htmlFor="title">Quiz Name</FormLabel>
              <Input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setTitle(e.target.value)
                }
              />
            </FormControl>
            <FormControl>
              <Input
                type="text"
                id="description"
                name="description"
                value={description}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setDescription(e.target.value)
                }
              />
            </FormControl>
            <Button type="submit" variant="solid" variantColor="blue">
              Go!
            </Button>
          </form>
        </Col>
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
