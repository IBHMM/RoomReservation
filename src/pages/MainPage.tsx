import React from 'react';
import Header from '../components/Header';
import FloorPlan from '../components/FloorPlan';
import { Container, Typography, Link } from '@mui/material';

const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Typography variant="body1" align="center" marginTop={4}>
          <Link href="https://github.com/IBHMM/RoomReservation" target="_blank" rel="noopener">
            View the GitHub repository
          </Link>
        </Typography>
        <FloorPlan />
      </Container>
    </>
  );
};

export default MainPage;
