import React from 'react'
import { useHistory } from 'react-router-dom'
import Logo from '../../Assets'
import { Container, Content } from '../../Styled'

export const About = () => {
  const history = useHistory()

  return (
    <div className="bg-gray-200">
      <div className="flex h-screen">
        <div className="m-auto">
          <div className="text-center">
            <img src={Logo} alt="logo" className="h-56 inline" />
          </div>
          <Container>
            <p>Welcome to About Page</p>
            <div className="text-2xl">
              Know more about me
              <Content
                onClick={() => {
                  history.push(`./`)
                }}
              >
                Home
              </Content>
            </div>
          </Container>
        </div>
      </div>
    </div>
  )
}
