import React from 'react';
import { Task } from './Task';

const tasks = [
  {_id: 1, text: 'Homework'},
  {_id: 2, text: 'Walk Dogs'},
  {_id: 3, text: 'Clean Room'},
];

export const App = () => (
    <div>
      <h1>Welcome to Meteor!</h1>

      <ul>
        { tasks.map(task => <Task key={ task._id } task={ task }/>) }
      </ul>
    </div>
);
