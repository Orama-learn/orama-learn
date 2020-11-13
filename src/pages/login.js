import React from 'react'
import {
  CardLogin,
  Container,
  LoginContainer,
  Row,
  Column,
  Input,
  Button,
  CardSugest
} from '../styles/loginStyles'
import OramaLogo from '../../public/images/orama-logo.png'
import CardPayment from '../../public/images/card-payment.svg'
import MailIcon from '../../public/images/mail-icon.svg'
import EyeIcon from '../../public/images/eye-icon.svg'
const Login = () => {
  return (
    <LoginContainer>
      <CardLogin>
        <Row>
          <Column className="size-letf">
            <Container>
              <img className="image-logo" src={OramaLogo} />
            </Container>
            <Container className="text-plataforma">
              <p>
                A plataforma que te guiará de forma fácil pelo mundo dos
                investimentos
              </p>
            </Container>
          </Column>
          <Column>
            <Container>
              <Column>
                <Input icon={MailIcon} />
                <Input icon={EyeIcon} />
                <Button>Login</Button>
              </Column>
            </Container>
          </Column>
          <CardSugest>
            <h3>Investimento do dia</h3>
            <img src={CardPayment} />
          </CardSugest>
        </Row>
      </CardLogin>
    </LoginContainer>
  )
}

export default Login
