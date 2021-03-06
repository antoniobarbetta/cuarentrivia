import React from 'react';
import { TriviaComponentProps } from './symbols';
import Joining from './joining';
import InProgress from './in-progress';
import Completed from './completed';

const PlayTrivia = (props: TriviaComponentProps) => {
  switch (props.trivia.status) {
    case 'joining':
      return <Joining {...props} />;
    case 'inProgress':
      return <InProgress {...props} />;
    case 'intermission':
      return <div>INTERMISSION</div>; // <Intermission {...props} />;
    case 'completed':
      return <Completed {...props} />;
    default:
      return <div>The trivia has an invalid status</div>;
  }
};

export default PlayTrivia;
