import styled from 'styled-components';
import GradesTable from './GradesTable';
import Header from './Header';
import TopScores from './TopScores';
import LearningPath from './LearningPath';
import GlobalStyle from '../style/GlobalStyle';
// import initialData from './data.js';
// import { useState } from 'react';

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(10, 1fr);
`;

function App() {
  // const [total, setTotal] = useState(0);

  // function getTotalScores() {
  //   const score = data.map((d) => d.task);
  //   console.log(score);
  // }
  // getTotalScores();
  return (
    <>
      <GlobalStyle />
      <Container>
        <LearningPath />
        <Header />
        <TopScores />
        <GradesTable />
      </Container>
    </>

    // <div>

    //   <Header />
    //   <SearchIntern />
    //   <TopScores />
    //   <GradesTable />
    // </div>
  );
}

export default App;
