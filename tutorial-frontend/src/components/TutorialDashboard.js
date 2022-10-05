import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector, usueSelctor } from 'react-redux';
import { retrieveTutorials } from '../slices/tutorial';
import { Link } from 'react-router-dom';
import CreateTutorialButton from './CreateTutorialButton';
import Tutorials from './Tutorials';
import TutorialList from './TutorialList';

const TutorialDashboard = () => {
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

  return (
    <div>
      <div class='projects'>
        <div class='container'>
          <div class='row'>
            <div class='col-md-12'>
              <h1 class='display-4 text-center'>Tutorials</h1>
              <br />
              <CreateTutorialButton />
              <br />
              <hr />

              <TutorialList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialDashboard;
