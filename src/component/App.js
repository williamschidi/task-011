import styled from 'styled-components';
import GradesTable from './GradesTable';
import Header from './Header';
import TopScores from './TopScores';
import LearningPath from './LearningPath';
import GlobalStyle from '../style/GlobalStyle';
import { useEffect, useRef, useState } from 'react';
import internData from './data.js';
// import { useState } from 'react';

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(10, 1fr);
`;

function App() {
  const [learningPath, setLearningPath] = useState('front-end');
  const [internName, setInternName] = useState('');
  const [internInfo, setInternInfo] = useState([]);
  const [topInterns, setTopInterns] = useState([]);

  useEffect(() => {
    let filteredInternInfo = [];
    if (learningPath === 'front-end')
      filteredInternInfo = internData.filter(
        (data) => data.info === 'FrontEnd'
      );

    if (learningPath === 'product-design')
      filteredInternInfo = internData.filter(
        (data) => data.info === 'ProductDesign'
      );

    if (learningPath === 'back-end')
      filteredInternInfo = internData.filter((data) => data.info === 'BackEnd');

    if (learningPath === 'devOps')
      filteredInternInfo = internData.filter((data) => data.info === 'DevOps');

    setInternInfo(filteredInternInfo);
  }, [learningPath]);

  useEffect(() => {
    const internGrades = internInfo.map((data) => {
      const name = data.name;
      const grades = Object.values(data.grades).reduce(
        (acc, arr) => acc + arr,
        0
      );

      return { name, grades };
    });
    internGrades.sort((a, b) => b.grades - a.grades);
    const bestIntern = internGrades.slice(0, 3);
    setTopInterns(bestIntern);
  }, [internInfo]);
  return (
    <>
      <GlobalStyle />
      <Container>
        <LearningPath />
        <Header
          learningPath={learningPath}
          setLearningPath={setLearningPath}
          internName={internName}
          setInternName={setInternName}
        />
        <TopScores bestIntern={topInterns} />
        {/* <GradesTable /> */}
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
