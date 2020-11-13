import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 1.6rem 2rem;
  overflow: hidden;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
export const Row = styled.div`
  display: flex;
  padding: 3.5rem;
  flex-direction: row;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`
export const ImageLeft = styled.div`
  .image-fluid {
    width: 100%;
  }
`
export const Column = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.6rem 2rem;
  .image-fluid {
    width: 100%;
  }
`
export const ButtonLogin = styled.button`
  width: 15.6rem;
  height: 3.6rem;
  margin: 1.6rem 1.3rem;
  box-shadow: 0px 0px 1px black;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  font-size: 1.6rem;
  text-align: center;
  color: white;
  background-color: #369e1e;
  :hover {
    background-color: #00b31c;
    border: solid 1px green;
  }
`
export const ButtonSingIn = styled.button`
  width: 15.6rem;
  height: 3.6rem;
  margin: 1.6rem 1.3rem;
  box-shadow: 0px 0px 1px green;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  font-size: 1.6rem;
  text-align: center;
  color: white;
  background-color: #0094ac;
  :hover {
    background-color: #05a0b9;
    border: solid 1px aliceblue;
  }
`
