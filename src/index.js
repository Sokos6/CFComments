import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import moment from 'moment';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// CF STUDENTS, FOLLOW THE COMMITS!
// TODO: Instructors, Turn commits into lessons

const App = () => {
  const time = moment().format('h:mm MMMM Do YYYY');
  return (
    <div>
      <div className='ui container comments'>
        <ApprovalCard>
          <CommentDetail
            author='Will'
            time={time}
            content='This is a comment'
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author='Mark'
            time={time}
            content='This is a comment'
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author='Frank'
            time={time}
            content='This is a comment'
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author='Loni'
            time={time}
            content='This is a comment'
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
