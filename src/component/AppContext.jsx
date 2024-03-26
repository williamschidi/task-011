import { createContext, useEffect, useState } from 'react';
import internData from './data';

const MyContext = createContext(null);

const expectedScore = 40;
function ContextProvider({ children }) {
  const [learningPath, setLearningPath] = useState('front-end');
  const [internName, setInternName] = useState('');
  const [internInfo, setInternInfo] = useState([]);
  const [topInterns, setTopInterns] = useState([]);
  const [sortedInternGrades, setSortedInternGrades] = useState([]);
  const [searchedIntern, setSearchedIntern] = useState([]);
  //   const [errorMsg, setErrorMsg] = useState('');

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
      const totalGrades = Object.values(data.grades).reduce(
        (acc, arr) => acc + arr,
        0
      );
      const percentageScore = Math.floor((totalGrades / expectedScore) * 100);
      return { ...data, totalGrades, percentageScore };
    });

    const internSort = internGrades
      .slice()
      .sort((a, b) => b.totalGrades - a.totalGrades);

    const bestIntern = internSort.slice(0, 3);

    setSortedInternGrades(internSort);
    setTopInterns(bestIntern);
  }, [internInfo]);

  useEffect(() => {
    const internData = sortedInternGrades.filter(
      (data) => data.name.toLowerCase() === internName.toLocaleLowerCase()
    );
    // if (internData.length < 1) {
    //   return setErrorMsg(
    //     'Intern name could not be found, please confirm name properly !!'
    //   );
    // }
    setSearchedIntern(internData);
  }, [sortedInternGrades, internName]);
  return (
    <MyContext.Provider
      value={{
        learningPath,
        setLearningPath,
        internName,
        setInternName,
        topInterns,
        setTopInterns,
        sortedInternGrades,
        searchedIntern,
        // errorMsg,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export { ContextProvider, MyContext };
