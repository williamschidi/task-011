// import styled from 'styled-components';
// import data from './data.js';

// const Container = styled.div`
//   grid-column: 2/-1;
//   grid-row: 6/-1;
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-start;
//   font-size: 2rem;
//   font-weight: 800;
//   /* padding-top: 2rem; */
// `;

// const Table = styled.table`
//   border-collapse: collapse;
//   margin: auto;
//   width: 100%;
// `;

// const TableHead = styled.th`
//   text-align: left;
//   background: #f2f2f2;
//   padding: 1rem 2rem;
//   border: 0.1rem solid black;
// `;
// const TableBody = styled.td`
//   text-align: left;
//   border: 0.1rem solid black;
//   padding: 0.5rem 2rem;
//   font-size: 1.4rem;
//   font-weight: 400;
// `;

// function GradesTable() {
//   const { frontEndData, backEndData, productDesignData, devOps } = data;

//   console.log(frontEndData);

//   return (
//     <Container>
//       <Table>
//         <thead>
//           <tr>
//             <TableHead>s/n</TableHead>
//             <TableHead>Name</TableHead>
//             <TableHead>Gender</TableHead>
//             <TableHead>Task 1</TableHead>
//             <TableHead>Task 2</TableHead>
//             <TableHead>Task 3</TableHead>
//             <TableHead>Task 4</TableHead>
//             <TableHead>Total Score</TableHead>
//             <TableHead>Percentage Score(%)</TableHead>
//           </tr>
//         </thead>
//         <tbody>
//           {frontEndData.map((d, i) => {
//             let total = 0;
//             let expectedScore = 40;
//             Object.values(d.grade).forEach((value) => (total += value));
//             const percentageScore = (total / expectedScore) * 100;

//             return (
//               <tr key={i}>
//                 <TableBody>{i + 1}</TableBody>
//                 <TableBody>{d.name}</TableBody>
//                 <TableBody>{d.gender}</TableBody>
//                 <TableBody>{d.grade.task1}</TableBody>
//                 <TableBody>{d.grade.task2}</TableBody>
//                 <TableBody>{d.grade.task3}</TableBody>
//                 <TableBody>{d.grade.task4}</TableBody>
//                 <TableBody>{total}</TableBody>
//                 <TableBody>{`${Math.floor(percentageScore)}%`}</TableBody>
//               </tr>
//             );
//           })}
//         </tbody>
//       </Table>
//     </Container>
//   );
// }

// export default GradesTable;
