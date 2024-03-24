import styled, { css } from 'styled-components';

const Container = styled.div`
  background-image: url('img/bg-10.PNG');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  grid-column: 2/-1;
  grid-row: 2/6;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
const Tag = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 50rem;
  gap: 1.2rem;
  background: #fff;
  color: #272525;
  box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.5);
  ${(props) =>
    props.type === 'first' &&
    css`
      width: 20rem;
      height: 28rem;
    `}
  ${(props) =>
    props.type === 'second' &&
    css`
      width: 18rem;
      height: 24rem;
    `}
    ${(props) =>
    props.type === 'third' &&
    css`
      width: 17rem;
      height: 22rem;
    `};
`;

const Img = styled.img`
  border-radius: 50rem 50rem 0 0;
  border: none;
  ${(props) =>
    props.type === 'first' &&
    css`
      width: 20rem;
      height: 16rem;
    `}
  ${(props) =>
    props.type === 'second' &&
    css`
      width: 18rem;
      height: 14rem;
    `}
    ${(props) =>
    props.type === 'third' &&
    css`
      width: 17rem;
      height: 13rem;
    `}
`;

const Span = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  font-weight: bolder;
  letter-spacing: -0.2rem;
  text-shadow: 0 0.2rem 0.3rem rgba(0, 0, 0, 0.6);
  background: #eff1f1d3;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  ${(props) =>
    props.type === 'first' &&
    css`
      font-size: 3.4rem;
      width: 6rem;
      height: 6rem;
    `}
  ${(props) =>
    props.type === 'second' &&
    css`
      font-size: 2.6rem;
      width: 6rem;
      height: 6rem;
    `}
    ${(props) =>
    props.type === 'third' &&
    css`
      font-size: 2.4rem;
      width: 5rem;
      height: 5rem;
    `};
`;
const SpanContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SpanTag = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #777272;
`;

function TopScores() {
  return (
    <Container>
      <Tag type="second">
        <Span type="second">2nd</Span>
        <Img src="../img/princess.png" alt="img1" type="second" />
        <SpanContainer>
          <SpanTag>Mike Eze</SpanTag>
          <SpanTag>84%</SpanTag>
        </SpanContainer>
      </Tag>
      <Tag type="first">
        <Span type="first">1st</Span>
        <Img src="../img/princess01.png" alt="img2" type="first" />
        <SpanContainer>
          <SpanTag>William Chidi</SpanTag>
          <SpanTag>90%</SpanTag>
        </SpanContainer>
      </Tag>
      <Tag type="third">
        <Span type="third">3rd</Span>
        <Img src="../img/princess2.png" alt="img3" type="third" />
        <SpanContainer>
          <SpanTag>Fred Obi</SpanTag>
          <SpanTag>80%</SpanTag>
        </SpanContainer>
      </Tag>
    </Container>
  );
}

export default TopScores;
