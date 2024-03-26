import styled from 'styled-components';
import GradesTable from './GradesTable';
import Header from './Header';
import TopScores from './TopScores';
import LearningPath from './LearningPath';
import GlobalStyle from '../style/GlobalStyle';
import { ContextProvider } from './AppContext';

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(10, 1fr);
`;

function App() {
  return (
    <ContextProvider>
      <GlobalStyle />
      <Container>
        <LearningPath />
        <Header />
        <TopScores />
        <GradesTable />
      </Container>
    </ContextProvider>
  );
}

export default App;
