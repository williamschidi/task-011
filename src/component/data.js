class InternData {
  constructor(name, image, info, grades) {
    this.name = name;
    this.image = image;
    this.info = info;
    this.grades = grades;
  }
}

const internsData = [
  new InternData('Chidi', 'chidi.png', 'FrontEnd', {
    task1: 10,
    task2: 10,
    task3: 10,
    task4: 10,
  }),
  new InternData('William', 'william.jpg', 'FrontEnd', {
    task1: 9,
    task2: 7,
    task3: 8,
    task4: 9,
  }),
  new InternData('Stanley', 'stanley.jpg', 'FrontEnd', {
    task1: 6,
    task2: 8,
    task3: 2,
    task4: 9,
  }),
  new InternData('Wilson', 'wilson.jpg', 'FrontEnd', {
    task1: 6,
    task2: 8,
    task3: 3,
    task4: 10,
  }),
  new InternData('Treasure', 'treasure.png', 'FrontEnd', {
    task1: 9,
    task2: 10,
    task3: 10,
    task4: 10,
  }),
  new InternData('Mike', 'mike.png', 'FrontEnd', {
    task1: 6,
    task2: 8,
    task3: 10,
    task4: 10,
  }),
  new InternData('Peace', 'peace.jpg', 'FrontEnd', {
    task1: 6,
    task2: 8,
    task3: 8,
    task4: 8,
  }),
  new InternData('Nelson', 'nelson.jpg', 'FrontEnd', {
    task1: 6,
    task2: 0,
    task3: 8,
    task4: 10,
  }),
  new InternData('Love', 'love.jpg', 'FrontEnd', {
    task1: 2,
    task2: 4,
    task3: 10,
    task4: 10,
  }),
  new InternData('Ben', 'ben.jpg', 'FrontEnd', {
    task1: 6,
    task2: 6,
    task3: 4,
    task4: 4,
  }),
  new InternData('Ken', 'ken.jpg', 'BackEnd', {
    task1: 8,
    task2: 10,
    task3: 8,
    task4: 6,
  }),
  new InternData('Tobi', 'tobi.jpg', 'BackEnd', {
    task1: 2,
    task2: 7,
    task3: 6,
    task4: 9,
  }),
  new InternData('Tapi', 'tapi.jpg', 'BackEnd', {
    task1: 6,
    task2: 10,
    task3: 10,
    task4: 9,
  }),
  new InternData('Oliver', 'oliver.jpg', 'BackEnd', {
    task1: 8,
    task2: 8,
    task3: 6,
    task4: 10,
  }),
  new InternData('Phils', 'phils.png', 'BackEnd', {
    task1: 10,
    task2: 10,
    task3: 10,
    task4: 10,
  }),
  new InternData('Kenneth', 'kenneth.png', 'BackEnd', {
    task1: 10,
    task2: 8,
    task3: 10,
    task4: 10,
  }),
  new InternData('Loveth', 'loveth.jpg', 'BackEnd', {
    task1: 10,
    task2: 8,
    task3: 3,
    task4: 8,
  }),
  new InternData('Joseph', 'joseph.jpg', 'BackEnd', {
    task1: 10,
    task2: 8,
    task3: 3,
    task4: 8,
  }),
  new InternData('Emeka', 'emeka.png', 'BackEnd', {
    task1: 10,
    task2: 7,
    task3: 10,
    task4: 10,
  }),
  new InternData('Prince', 'prince.jpg', 'BackEnd', {
    task1: 10,
    task2: 6,
    task3: 4,
    task4: 4,
  }),
  new InternData('Izu', 'izu.jpg', 'ProductDesign', {
    task1: 4,
    task2: 10,
    task3: 8,
    task4: 6,
  }),
  new InternData('Okudili', 'okwudili.jpg', 'ProductDesign', {
    task1: 2,
    task2: 7,
    task3: 8,
    task4: 9,
  }),
  new InternData('Dozie', 'dozie.jpg', 'ProjectDesign', {
    task1: 10,
    task2: 10,
    task3: 10,
    task4: 9,
  }),
  new InternData('Michael', 'michael', 'ProductDesign', {
    task1: 10,
    task2: 8,
    task3: 6,
    task4: 10,
  }),
  new InternData('Esther', 'esther.png', 'ProductDesign', {
    task1: 10,
    task2: 10,
    task3: 10,
    task4: 10,
  }),
  new InternData('Nwora', 'nwora.jpg', 'ProductDesign', {
    task1: 10,
    task2: 9,
    task3: 10,
    task4: 10,
  }),
  new InternData('Ifesinachi', 'ifesinachi.jpg', 'ProductDesign', {
    task1: 10,
    task2: 10,
    task3: 3,
    task4: 8,
  }),
  new InternData('Josiah', 'josiah.PNG', 'ProductDesign', {
    task1: 10,
    task2: 10,
    task3: 8,
    task4: 10,
  }),
  new InternData('Ebuka', 'ebuka.jpg', 'ProductDesign', {
    task1: 10,
    task2: 0,
    task3: 10,
    task4: 10,
  }),
  new InternData('Princess', 'princess.jpg', 'ProductDesign', {
    task1: 10,
    task2: 8,
    task3: 4,
    task4: 4,
  }),
  new InternData('Ezenwa', 'ezenwa.jpg', 'DevOps', {
    task1: 10,
    task2: 10,
    task3: 8,
    task4: 6,
  }),
  new InternData('Richard', 'richard.jpg', 'DevOps', {
    task1: 2,
    task2: 7,
    task3: 8,
    task4: 9,
  }),
  new InternData('Harry', 'harry.png', 'DevOps', {
    task1: 10,
    task2: 10,
    task3: 10,
    task4: 9,
  }),

  new InternData('Nnacheta', 'nnacheta.png', 'DevOps', {
    task1: 10,
    task2: 10,
    task3: 10,
    task4: 10,
  }),
  new InternData('Elizabeth', 'elizabeth.jpg', 'DevOps', {
    task1: 10,
    task2: 10,
    task3: 6,
    task4: 10,
  }),
  new InternData('Emmanuel', 'emmanuel.jpg', 'DevOps', {
    task1: 10,
    task2: 6,
    task3: 10,
    task4: 10,
  }),
  new InternData('Chukwudi', 'chukwudi.jpg', 'DevOps', {
    task1: 10,
    task2: 10,
    task3: 8,
    task4: 8,
  }),
  new InternData('Mathew', 'mathew.jpg', 'DevOps', {
    task1: 10,
    task2: 10,
    task3: 4,
    task4: 10,
  }),
  new InternData('Eric', 'eric.png', 'DevOps', {
    task1: 10,
    task2: 8,
    task3: 10,
    task4: 10,
  }),
  new InternData('Cyril', 'cyril.jpg', 'DevOps', {
    task1: 10,
    task2: 9,
    task3: 4,
    task4: 4,
  }),
];

export default internsData;

// const frontEndData = [
//   {
//     name: 'Chidi',
//     gender: 'Male',
//     grade: {
//       task1: 10,
//       task2: 10,
//       task3: 10,
//       task4: 8,
//     },
//   },
//   {
//     name: 'William',
//     gender: 'Male',
//     grade: {
//       task1: 9,
//       task2: 7,
//       task3: 8,
//       task4: 9,
//     },
//   },
//   {
//     name: 'Stanley',
//     gender: 'Male',
//     grade: {
//       task1: 6,
//       task2: 8,
//       task3: 2,
//       task4: 9,
//     },
//   },
//   {
//     name: ' Wilson',
//     gender: 'Male',
//     grade: {
//       task1: 6,
//       task2: 8,
//       task3: 3,
//       task4: 10,
//     },
//   },
//   {
//     name: 'Treasure',
//     gender: 'female',
//     grade: {
//       task1: 9,
//       task2: 10,
//       task3: 10,
//       task4: 10,
//     },
//   },
//   {
//     name: 'Mike',
//     gender: 'Male',
//     grade: {
//       task1: 6,
//       task2: 8,
//       task3: 10,
//       task4: 10,
//     },
//   },
//   {
//     name: 'Peace',
//     gender: 'female',
//     grade: {
//       task1: 6,
//       task2: 8,
//       task3: 8,
//       task4: 8,
//     },
//   },
//   {
//     name: 'Nelson',
//     gender: 'Male',
//     grade: {
//       task1: 6,
//       task2: 0,
//       task3: 8,
//       task4: 10,
//     },
//   },
//   {
//     name: 'Love',
//     gender: 'female',
//     grade: {
//       task1: 2,
//       task2: 4,
//       task3: 10,
//       task4: 10,
//     },
//   },
//   {
//     name: 'Ben',
//     gender: 'Male',
//     grade: {
//       task1: 6,
//       task2: 6,
//       task3: 4,
//       task4: 4,
//     },
//   },
// ];

// const backEndData = [
//   {
//     name: 'Ken',
//     grade: {
//       task1: 8,
//       task2: 10,
//       task3: 8,
//       task4: 6,
//     },
//   },
//   {
//     name: 'Tobi',
//     grade: {
//       task1: 2,
//       task2: 7,
//       task3: 6,
//       task4: 9,
//     },
//   },
//   {
//     name: 'Tapi',
//     grade: {
//       task1: 6,
//       task2: 10,
//       task3: 10,
//       task4: 9,
//     },
//   },
//   {
//     name: 'Oliver',
//     grade: {
//       task1: 8,
//       task2: 8,
//       task3: 6,
//       task4: 10,
//     },
//   },
//   {
//     name: 'Phils',
//     grade: {
//       task1: 10,
//       task2: 10,
//       task3: 10,
//       task4: 10,
//     },
//   },
//   {
//     name: 'Kenneth',
//     grade: {
//       task1: 10,
//       task2: 8,
//       task3: 10,
//       task4: 10,
//     },
//   },
//   {
//     name: 'Loveth',
//     grade: {
//       task1: 10,
//       task2: 8,
//       task3: 3,
//       task4: 8,
//     },
//   },
//   {
//     name: 'Joseph',
//     grade: {
//       task1: 10,
//       task2: 0,
//       task3: 8,
//       task4: 10,
//     },
//   },
//   {
//     name: 'Emeka',
//     grade: {
//       task1: 10,
//       task2: 7,
//       task3: 10,
//       task4: 10,
//     },
//   },
//   {
//     name: 'Prince',
//     grade: {
//       task1: 10,
//       task2: 6,
//       task3: 4,
//       task4: 4,
//     },
//   },
// ];
// const productDesignData = [
//   {
//     name: 'Izu',
//     grade: {
//       task1: 4,
//       task2: 10,
//       task3: 8,
//       task4: 6,
//     },
//   },
//   {
//     name: 'Okudili',
//     grade: {
//       task1: 2,
//       task2: 7,
//       task3: 8,
//       task4: 9,
//     },
//   },
//   {
//     name: 'Michael',
//     grade: {
//       task1: 10,
//       task2: 10,
//       task3: 10,
//       task4: 9,
//     },
//   },
//   {
//     name: ' Dozie',
//     grade: {
//       task1: 10,
//       task2: 8,
//       task3: 6,
//       task4: 10,
//     },
//   },
//   {
//     name: 'Esther',
//     grade: {
//       task1: 10,
//       task2: 10,
//       task3: 10,
//       task4: 10,
//     },
//   },
//   {
//     name: 'Nwaora',
//     grade: {
//       task1: 10,
//       task2: 9,
//       task3: 10,
//       task4: 10,
//     },
//   },
//   {
//     name: 'Ifesinachi',
//     grade: {
//       task1: 10,
//       task2: 10,
//       task3: 3,
//       task4: 8,
//     },
//   },
//   {
//     name: 'Josiah',
//     grade: {
//       task1: 10,
//       task2: 10,
//       task3: 8,
//       task4: 10,
//     },
//   },
//   {
//     name: 'Ebuka',
//     grade: {
//       task1: 10,
//       task2: 0,
//       task3: 10,
//       task4: 10,
//     },
//   },
//   {
//     name: 'Princess',
//     grade: {
//       task1: 10,
//       task2: 8,
//       task3: 4,
//       task4: 4,
//     },
//   },
// ];

// const devOps = [
//   {
//     name: 'Ezenwa',
//     grade: {
//       task1: 10,
//       task2: 10,
//       task3: 8,
//       task4: 6,
//     },
//   },
//   {
//     name: 'Richard',
//     grade: {
//       task1: 2,
//       task2: 7,
//       task3: 8,
//       task4: 9,
//     },
//   },
//   {
//     name: 'Harry',
//     grade: {
//       task1: 10,
//       task2: 10,
//       task3: 10,
//       task4: 9,
//     },
//   },
//   {
//     name: ' Nnacheta',
//     grade: {
//       task1: 10,
//       task2: 10,
//       task3: 6,
//       task4: 10,
//     },
//   },
//   {
//     name: 'Elizabeth',
//     grade: {
//       task1: 10,
//       task2: 10,
//       task3: 10,
//       task4: 10,
//     },
//   },
//   {
//     name: 'Emmanuel',
//     grade: {
//       task1: 10,
//       task2: 6,
//       task3: 10,
//       task4: 10,
//     },
//   },
//   {
//     name: 'Chibuzo',
//     grade: {
//       task1: 10,
//       task2: 10,
//       task3: 8,
//       task4: 8,
//     },
//   },
//   {
//     name: 'Mathew',
//     grade: {
//       task1: 10,
//       task2: 10,
//       task3: 4,
//       task4: 10,
//     },
//   },
//   {
//     name: 'Ndukwe',
//     grade: {
//       task1: 10,
//       task2: 8,
//       task3: 10,
//       task4: 10,
//     },
//   },
//   {
//     name: 'cyril',
//     grade: {
//       task1: 10,
//       task2: 9,
//       task3: 4,
//       task4: 4,
//     },
//   },
// ];

// const data = { frontEndData, backEndData, productDesignData, devOps };

// export default data;
