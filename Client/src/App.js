import React, { Fragment } from 'react'
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import Default from './components/Default';
import Header from './components/Header';
import './App.css';
import { routes } from './Routes';
 function App() {

  return (
    <div>
    <Router>
      <Routes>
        {routes.map(
          (route)=>{
            const Page = route.page;
            const Layout = route.IsShowHeader ? Default : Fragment; 
            return(<Route path ={ route.path } element={
              <Layout>
                <Page/>
              </Layout>
            }/> )
          }
        )}
      </Routes>
    </Router>
    </div>
  )
}

export default App;