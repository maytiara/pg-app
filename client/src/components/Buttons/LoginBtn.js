import React from 'react'
import css from './LoginBtn.module.css'
import { Col, Button, Container } from "react-bootstrap"

const LoginBtn = () => {
  return (
    <Container>
      <Col className={css.loginBtn}>
        <Button 
          type='submit' 
          variant='success' 
          size='lg'
          className='mt-1 mb-1 w-80 rounded-pill btn-warning'
          >
          SIGN UP
        </Button>
      </Col>
    </Container>
  )
}

export default LoginBtn

//<div className={css.loginSpace}>
//      <button className={css.loginBtn}>
//        SIGN UP
//      </button>
//    </div>