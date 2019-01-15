import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import imagesReducer from './reducers/images';

import ImagesList from './components/ImagesList/ImagesList';
import ImageDetails from './components/ImageDetails/ImageDetails';
import Footer from './components/Footer/Footer';

const App = () => {
  const [images, dispatch] = useReducer(imagesReducer, []);

  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact render={() => (
            <ImagesList images={images} dispatch={dispatch} />
          )} />
          <Route path="/image/:id" exact render={() => (
            <ImageDetails images={images} dispatch={dispatch} />
          )} />
          <Redirect to="/" />
        </Switch>
      </Router>

      <Footer/>
    </div>
  );
}

export default App;
