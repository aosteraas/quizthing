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
  return (
    <Box as="section" width="100%" alignItems="center">
      <DashboardPanel>
        <Row flexWrap="wrap">
          <MyQuizzes />
          <CreateQuiz />
        </Row>
      </DashboardPanel>
    </Box>
  );
};

const MyQuizzes = () => {
  const dispatch = useDispatch();
  const t = useTheme();
  useEffect(() => {
    dispatch(loadQuizzes());
  }, [dispatch]);
  const { quizzes, loading } = useSelector((s: RootState) => s.quiz);
  return (
    <Col
      border="lg"
      borderWidth="1px"
      p={`1rem`}
      m={`1rem`}
      borderRadius="0.25rem"
      shadow="sm"
      _hover={{ borderColor: `${t.colors.blue[400]}`, shadow: 'md' }}
    >
      <Heading fontSize="2rem">My Quizzes</Heading>
      {loading && (
        <div>
          <Skeleton height="20px" my="10px" width="100%" />
          <Skeleton height="20px" my="10px" width="100%" />
          <Skeleton height="20px" my="10px" width="100%" />
        </div>
      )}
      {!loading &&
        quizzes.length > 0 &&
        quizzes.map((q, idx) => <div key={idx}>{q.title}</div>)}
      {!loading && !quizzes.length && <div>Create a quiz dickhead</div>}
    </Col>
  );
};

const CreateQuiz = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState<string>();
  const { success } = useSelector((s: RootState) => s.quiz);
  const t = useTheme();
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
    <Col
      border="lg"
      borderWidth="1px"
      p={`1rem`}
      m={`1rem`}
      borderRadius="0.25rem"
      maxWidth={{ base: '100%', md: '25%' }}
      minWidth={{ base: '100%', sm: 'auto' }}
      shadow="sm"
      _hover={{ borderColor: `${t.colors.blue[400]}`, shadow: 'md' }}
    >
      <Heading>Create a Quiz</Heading>
      <form onSubmit={onSubmit}>
        <FormControl>
          <FormLabel htmlFor="title">Quiz Title</FormLabel>
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
          <FormLabel htmlFor="description">Brief Description</FormLabel>

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
  );
};

interface PanelProps {
  children: React.ReactChild;
}

const DashboardPanel = ({ children }: PanelProps) => {
  return (
    <PseudoBox transition="outline 0.2s linear" borderRadius="md">
      {children}
    </PseudoBox>
  );
};
