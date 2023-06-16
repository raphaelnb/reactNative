import React from 'react';
import { Container, Header, Content, H1, Button, Text } from 'native-base'
import ProductList from './ProductList';
import Rating from './Rating';

function formatName(user) {
  return user.firstName + ' ' + user.lastName
}

export default function App() {
  const user = {
    firstName: 'Greg',
    lastName: 'Lim'
  }
  const isValid = true

  return (
    <Container>
      <Header />
      <Content>
        <Button disabled={!isValid} >
          <Text>Click here</Text>
        </Button>
        <Button danger>
          <Text>danger</Text>
        </Button>
        <H1> Hello,</H1>
        <Text> {formatName(user)} </Text>
        <Rating rating='1' />
        <Rating rating='0' />
        <Rating rating='3' />
      </Content>
    </Container>
  );
}
