import styled from 'styled-components'

export const LoginContainer = styled.div`
  background: rgb(98, 221, 140);
  background: linear-gradient(
    248deg,
    rgba(98, 221, 140, 1) 9%,
    rgba(5, 138, 34, 1) 95%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 1.2rem;
  min-height: 100vh;
  .image-logo {
    width: 100%;
  }
  .text-plataforma {
    width: 50%;
    line-height: 2.3rem;
    text-align: center;
    font-family: 'HeadlandOne';
  }
  .size-letf {
    width: 30vw;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 1000px) {
    padding: 0px;
    .size-letf {
      width: 100%;
    }
  }
`
export const CardLogin = styled.div`
  width: 80vw;
  background-color: #f2f3f5;
  padding: 1.9rem;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: none;
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Container = styled.div`
  display: flex;
  padding: 1rem;
  position: relative;
`
export const Input = styled.input`
  width: 20rem;
  height: 2.6rem;
  border-radius: 30px;
  border: none;
  margin: 1rem;
  padding: 1rem;
  font-size: 1.3rem;
  color: #3e3e3e;
  background-color: #eaeaea;
  background-image: url(${(props) => `${props.icon}`});
  background-repeat: no-repeat;
  background-position: right;
  background-origin: content-box;
  :focus {
    border: solid 1px #1ff900;
  }
`
export const Button = styled.button`
  width: 20rem;
  height: 2.6rem;
  margin: 0.6rem 1rem 0px 1rem;
  background-color: #7bc857;
  color: white;
  font-size: 1.2rem;
  border-radius: 30px;
  border: none;
  cursor: pointer;
`
export const CardSugest = styled.div`
  height: 90vh;
  width: 30vw;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: 57%;
  align-self: center;
  position: absolute;
  background-color: #f2f3f5;
  padding: 1.9rem;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
  @media (max-width: 1000px) {
    position: relative;
    margin: 0;
    padding: 1.2rem;
    max-width: 100vw;
    height: 100%;
  }
`
