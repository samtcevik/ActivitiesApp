import { Link } from 'react-router-dom'
import {Button, Container, Header, Image, Segment} from 'semantic-ui-react'

export default function HomePage() {
  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
        <Container text>
          <Header as='h1'>
            <Image size='massive' src="/assets/logo.png" alt="logo" style={{marginBottom:12}}/>
            Activities
          </Header>
          <Header as="h2" inverted content="Welcome to Activities"/>
          <Button as={Link} to="/activities" size='huge' inverted content="Take me to the Activities"/>
        </Container>
    </Segment>
  )
}
