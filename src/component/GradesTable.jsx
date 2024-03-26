import { useContext } from 'react';
import styled from 'styled-components';
import { MyContext } from './AppContext';

const Container = styled.div`
  grid-column: 2/-1;
  grid-row: 6/-1;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 2rem;
  font-weight: 800;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableHead = styled.th`
  text-align: left;
  background: #f2f2f2;
  padding: 1rem 2rem;
  border: 0.1rem solid black;
`;
const TableBody = styled.td`
  text-align: left;
  border: 0.1rem solid black;
  padding: 0.5rem 2rem;
  font-size: 1.4rem;
  font-weight: 400;
`;

function GradesTable() {
  const { sortedInternGrades, searchedIntern } = useContext(MyContext);

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <TableHead>s/n</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Task 1</TableHead>
            <TableHead>Task 2</TableHead>
            <TableHead>Task 3</TableHead>
            <TableHead>Task 4</TableHead>
            <TableHead>Total Score</TableHead>
            <TableHead>Percentage Score(%)</TableHead>
          </tr>
        </thead>
        <tbody>
          {searchedIntern.length > 0
            ? searchedIntern.map((data, ind) => {
                return (
                  <tr key={ind}>
                    <TableBody>{ind + 1}</TableBody>
                    <TableBody>{data.name}</TableBody>
                    <TableBody>{data.grades.task1}</TableBody>
                    <TableBody>{data.grades.task2}</TableBody>
                    <TableBody>{data.grades.task3}</TableBody>
                    <TableBody>{data.grades.task4}</TableBody>
                    <TableBody>{data.totalGrades}</TableBody>
                    <TableBody>{`${data.percentageScore}%`}</TableBody>
                  </tr>
                );
              })
            : sortedInternGrades.map((d, i) => {
                return (
                  <tr key={i}>
                    <TableBody>{i + 1}</TableBody>
                    <TableBody>{d.name}</TableBody>

                    <TableBody>{d.grades.task1}</TableBody>
                    <TableBody>{d.grades.task2}</TableBody>
                    <TableBody>{d.grades.task3}</TableBody>
                    <TableBody>{d.grades.task4}</TableBody>
                    <TableBody>{d.totalGrades}</TableBody>
                    <TableBody>{`${d.percentageScore}%`}</TableBody>
                  </tr>
                );
              })}
        </tbody>
      </Table>
    </Container>
  );
}

export default GradesTable;
