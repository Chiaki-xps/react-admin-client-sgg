import React from 'react';
import { BrowserRouter, Route, Routes  } from 'react-router-dom'

import Login from './pages/login/login.jsx';
import Admin from './pages/admin/admin.jsx';

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path='/login' component={Login} ></Route>
        <Route path='/admin' component={Admin} ></Route>
      </Routes>R

    </BrowserRouter>
  );
}

export default App;