import React from 'react';
import Header from '../components/Header';
import FloorPlan from '../components/FloorPlan';
import { Container } from '@mui/material';

const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <FloorPlan />
      </Container>
    </>
  );
};

export default MainPage;
