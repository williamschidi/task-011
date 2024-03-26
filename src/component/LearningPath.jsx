import { useContext } from 'react';
import styled from 'styled-components';
import { MyContext } from './AppContext';

const Container = styled.div`
  grid-row: 1/-1;
  padding: 4rem 2rem 0 2rem;
  border-right: 0.01rem solid #eeeaea;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  background: #f8f9fa;
`;

const ContainerHead = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
`;

const ImgLogo = styled.img`
  width: 12rem;
  height: 10rem;
`;

const H1 = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  background: linear-gradient(to right, #383535e3, #79797a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Ul = styled.ul`
  color: #413d3d;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  font-size: 1.4rem;
  font-weight: bold;
`;
const Li = styled.li`
  padding: 2rem 2.2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  text-transform: capitalize;
  border-bottom: 0.1rem solid transparent;
  cursor: pointer;

  &:hover {
    border-bottom: 0.01rem solid #979494;
  }
`;

const Img = styled.img`
  width: 3rem;
  height: 3rem;
`;
function LearningPath() {
  const { setLearningPath } = useContext(MyContext);

  function handleClick(value) {
    setLearningPath(value);
  }
  return (
    <Container>
      <ContainerHead>
        <ImgLogo src="../img/logo4.PNG" alt="img-5" />
        <H1>learning path</H1>
      </ContainerHead>

      <Ul>
        <Li onClick={() => handleClick('product-design')}>
          <Img src="../img/product-design.PNG" alt="img-1" />
          Product Design
        </Li>
        <Li onClick={() => handleClick('front-end')}>
          <Img src="../img/front-end.PNG" alt="img-2" />
          Front-end
        </Li>
        <Li onClick={() => handleClick('back-end')}>
          <Img src="../img/back-end.PNG" alt="img-3" />
          Back-end
        </Li>
        <Li onClick={() => handleClick('devOps')}>
          <Img src="../img/Devops1.PNG" alt="img-4" />
          DevOps
        </Li>
      </Ul>
    </Container>
  );
}

export default LearningPath;
