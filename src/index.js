import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import moment from 'moment';

// CF STUDENTS, FOLLOW THE COMMITS!
// TODO: Instructors, Turn commits into lessons

const App = () => {
  const time = moment().format('h:mm MMMM Do YYYY');
  return (
    <div>
      <div className='ui container comments'>
        <CommentDetail
          author='Will'
          time={time}
          content='This is a comment'
          avatar={faker.image.avatar()}
        />
        <CommentDetail
          author='Mark'
          time={time}
          content='This is a comment'
          avatar={faker.image.avatar()}
        />
        <CommentDetail
          author='Frank'
          time={time}
          content='This is a comment'
          avatar={faker.image.avatar()}
        />
        <CommentDetail
          author='Loni'
          time={time}
          content='This is a comment'
          avatar={faker.image.avatar()}
        />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
