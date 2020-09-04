import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import moment from 'moment';

const App = () => {
  const time = moment().format('h:mm MMMM Do YYYY');
  return (
    <div>
      <div className='ui container comments'>
        <CommentDetail author='Will' time={time} text='This is a comment' />
      </div>
      <div className='ui container comments'>
        <div className='comment'>
          <a href='/' className='avatar'>
            <img alt='avatar' src={faker.image.avatar()} />
          </a>
          <div className='content'>
            <a href='/' className='author'>
              Will
            </a>
            <div className='metadata'>
              <span className='date'>Today at 3pm</span>
            </div>
            <div className='test'>Great Post</div>
          </div>
        </div>
      </div>
      <div className='ui container comments'>
        <div className='comment'>
          <a href='/' className='avatar'>
            <img alt='avatar' src={faker.image.avatar()} />
          </a>
          <div className='content'>
            <a href='/' className='author'>
              Will
            </a>
            <div className='metadata'>
              <span className='date'>Today at 3pm</span>
            </div>
            <div className='test'>Great Post</div>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
