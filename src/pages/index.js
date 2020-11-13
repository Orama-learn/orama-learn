import React from 'react'
import Link from 'next/link'
import {
  ButtonLogin,
  ButtonSingIn,
  Column,
  Container,
  ImageLeft,
  Row
} from '../styles/landingPage'
import carteira from '../../public/images/carteira.svg'
import orama from '../../public/images/orama-logo.svg'
export default function Home() {
  return (
    <Container>
      <ImageLeft>
        <img className="image-fluid" src={carteira} />
      </ImageLeft>
      <Column>
        <img className="image-fluid" src={orama} />
        <Row>
          <Link href="/login">
            <ButtonLogin>Login</ButtonLogin>
          </Link>
          <ButtonSingIn>Sing in</ButtonSingIn>
        </Row>
      </Column>
    </Container>
  )
}
