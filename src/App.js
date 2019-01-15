import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import imagesReducer from './reducers/images';

import ImagesList from './components/ImagesList/ImagesList';
import ImageDetails from './components/ImageDetails/ImageDetails';

const App = () => {
  const [images, dispatch] = useReducer(imagesReducer, []);

  console.log(images);

  return (
    <div>
      <Router>
        <>
          <Route path="/" exact render={() => (
            <ImagesList images={images} dispatch={dispatch} />
          )} />
          <Route path="/image/:id" exact render={() => (
            <ImageDetails images={images} dispatch={dispatch} />
          )} />
        </>
      </Router>
    </div>
  );
}

export default App;
