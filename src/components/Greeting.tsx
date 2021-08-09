import React from 'react';
import '../sass/main.scss';
import ReactIcon from '../assets/logo.svg';

interface GreetingProps {
  name?: string;
}

function Greeting(props: GreetingProps): JSX.Element {
  const { name = 'user' } = props;
  return (
    <div className="greeting-wrapper">
      <ReactIcon />
      <span>Hello, {name}!</span>
    </div>
  );
}

export default Greeting;
