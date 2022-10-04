import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTutorial } from '../slices/tutorial';

const AddTutorials = () => {
  const initialTutorialState = {
    id: null,
    title: '',
    description: '',
    published: false,
  };

  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const onChange = (event) => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    const { title, description } = tutorial;

    dispatch(createTutorial({ title, description }))
      .unwrap()
      .then((data) => {
        console.log(data);
        setTutorial({
          id: data.id,
          title: data.title,
          description: data.description,
          published: data.published,
        });
        setSubmitted(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newTutorial = () => {
    setTutorial(initialTutorialState);
    setSubmitted(false);
  };

  return (
    <div className='project'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <div className='submit-form'>
              {submitted ? (
                <div>
                  <h4>You submitted successfully!</h4>
                  <button className='btn btn-success' onClick={newTutorial}>
                    Add
                  </button>
                </div>
              ) : (
                <div>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control form-control-lg '
                      id='title'
                      required
                      placeholder='Title'
                      value={tutorial.title}
                      onChange={onChange}
                      name='title'
                    />
                  </div>

                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control form-control-lg '
                      id='description'
                      required
                      placeholder='Description'
                      value={tutorial.description}
                      onChange={onChange}
                      name='description'
                    />
                  </div>

                  <button onClick={saveTutorial} className='btn btn-success'>
                    Submit
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTutorials;
