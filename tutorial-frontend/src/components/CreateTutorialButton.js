import React from 'react';
import { Link } from 'react-router-dom';

const CreateTutorialButton = () => {
  return (
    <React.Fragment>
      <Link to='addTutorial' className='btn btn-lg btn-info'>
        Create a Tutorial
      </Link>
    </React.Fragment>
  );
};

export default CreateTutorialButton;
