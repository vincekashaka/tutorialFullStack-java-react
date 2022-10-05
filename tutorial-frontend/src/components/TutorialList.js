import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveTutorials, deleteAllTutorials } from '../slices/tutorial';
import { Link } from 'react-router-dom';

const TutorialList = () => {
  const [currentTutorial, setCurrentTutorial] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const tutorials = useSelector((state) => state.tutorials);
  const dispatch = useDispatch();

  const initFetch = useCallback(() => {
    dispatch(retrieveTutorials());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  const refreshData = () => {
    setCurrentTutorial(null);
    setCurrentIndex(-1);
  };

  const setActiveTutorial = (tutorial, index) => {
    setCurrentTutorial(tutorial);
    setCurrentIndex(index);
  };

  const removeAllTutorials = () => {
    dispatch(deleteAllTutorials())
      .then((response) => {
        refreshData();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className='row'>
      <div className='col-md-8'></div>
      <div className='col-md-12'>
        <h4>Tutorials List</h4>

        <ul className='list-group'>
          {tutorials &&
            tutorials.map((tutorial, index) => (
              <li
                className={
                  'list-group-item ' + (index === currentIndex ? 'active' : '')
                }
                onClick={() => setActiveTutorial(tutorial, index)}
                key={index}
              >
                {tutorial.title}
              </li>
            ))}
        </ul>

        <button
          className='m-3 btn btn-sm btn-danger'
          onClick={removeAllTutorials}
        >
          Remove All
        </button>
      </div>
      <div className='container'>
        <div className='col-md-12'>
          {currentTutorial ? (
            <div>
              <h4>Tutorial</h4>
              <div>
                <label>
                  <strong>Title:</strong>
                </label>{' '}
                {currentTutorial.title}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{' '}
                {currentTutorial.description}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{' '}
                {currentTutorial.published ? 'Published' : 'Pending'}
              </div>

              <Link
                to={'/tutorials/' + currentTutorial.id}
                className='badge badge-warning'
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Tutorial...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TutorialList;
