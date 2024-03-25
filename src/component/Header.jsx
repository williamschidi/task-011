import { useState } from 'react';
import styled from 'styled-components';
const Nav = styled.div`
  grid-column: 2/-1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  border-bottom: 0.01rem solid #eeeaea;
`;
const Span = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.2rem;
`;

const Select = styled.select`
  padding: 0.7rem 2rem;
  outline: none;
  border-radius: 3rem;
  border: 0.1rem solid #413d3d;
`;

const Form = styled.form`
  position: relative;
`;

const Input = styled.input`
  position: relative;
  width: 25rem;
  padding: 0.7rem 2rem;
  outline: none;
  border-radius: 3rem;
  border: 0.1rem solid #413d3d;
`;
const Icon = styled.div`
  ion-icon[name='search-outline'] {
    color: #504c4c;
    position: absolute;
    top: 0.5rem;
    right: 0.6rem;
    width: 2rem;
    height: 2rem;
  }
`;

const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  padding: 1rem 2rem;
`;

const ImgLogo = styled.img`
  width: 4rem;
  height: 3rem;
`;

const H1 = styled.h1`
  background: linear-gradient(to right, #383535e3, #79797a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2.4rem;
  text-transform: uppercase;
  letter-spacing: -0.1rem;
`;

function Header() {
  const [learningPath, setLearningPath] = useState('front-end');
  const [internName, setInternName] = useState('');

  return (
    <Nav>
      <Heading>
        <ImgLogo src="../img/logo4.PNG" alt="img-5" />
        <H1>WillTech </H1>
      </Heading>
      <Span>
        <Select
          value={learningPath}
          onChange={(e) => setLearningPath(e.target.value)}
        >
          <option value="front-end">FrontEnd</option>
          <option value="product-design">Product Design</option>
          <option value="back-end">BackEnd</option>
          <option value="devOps">DevOps</option>
        </Select>
        <Form>
          <Input
            type="text"
            placeholder="Intern name"
            value={internName}
            onChange={(e) => setInternName(e.target.value)}
          />
          <Icon>
            <ion-icon name="search-outline"></ion-icon>
          </Icon>
        </Form>
      </Span>
    </Nav>
  );
}

export default Header;
