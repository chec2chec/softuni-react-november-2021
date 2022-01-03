import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Dashboard from './components/Dashboard/Dashboard'
import List from './components/List/List'
import Single from './components/Single/Single'
import Page404 from './components/Page404/Page404'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path='/list'>
          <Route index element={<List />} />
        </Route>
        <Route path='/single'>
          <Route index element={<Single />} />
        </Route>
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
