import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector, usueSelctor } from 'react-redux';
import { retrieveTutorials } from '../slices/tutorial';
import { Link } from 'react-router-dom';
import CreateTutorialButton from './CreateTutorialButton';

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

              {/* <!-- Project Item Component --> */}
              <div class='container'>
                <div class='card card-body bg-light mb-3'>
                  <div class='row'>
                    <div class='col-2'>
                      <span class='mx-auto'>REACT</span>
                    </div>
                    <div class='col-lg-6 col-md-4 col-8'>
                      <h3>Spring / React Project</h3>
                      <p>
                        Project to create Tutorials with Spring Boot and React
                      </p>
                    </div>
                    <div class='col-md-4 d-none d-lg-block'>
                      <ul class='list-group'>
                        <a href='#'>
                          <li class='list-group-item board'>
                            <i class='fa fa-flag-checkered pr-1'>
                              Project Board{' '}
                            </i>
                          </li>
                        </a>
                        <a href='#'>
                          <li class='list-group-item update'>
                            <i class='fa fa-edit pr-1'>Update Project Info</i>
                          </li>
                        </a>
                        <a href=''>
                          <li class='list-group-item delete'>
                            <i class='fa fa-minus-circle pr-1'>
                              Delete Project
                            </i>
                          </li>
                        </a>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End of Project Item Component --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialDashboard;
