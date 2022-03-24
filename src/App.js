import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notes from './pages/Notes';
import Create from './pages/Create';
import NotFound from './NotFound';
import Test from './test/Test';

import { createTheme, ThemeProvider } from '@material-ui/core'
import { purple } from '@material-ui/core//colors'
import Layout from './components/Layout';

const theme = createTheme({
  palette: {
    // primary: {
    //   main: '#FF0000'
    // },
    // primary: purple
    // primary: 'textsecondary'
  }
})


function App() {

  return (
    // <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <div>
            <Switch>
              <Route exact path='/' >
                <Notes />
              </Route>
              <Route exact path='/create' >
                <Create />
              </Route>
              <Route exact path='/test' >
                <Test />
              </Route>
              <Route exact path='*' >
                <NotFound />
              </Route>
            </Switch>
          </div>
        </Layout>
      </Router>
    // </ThemeProvider>

  );
}

export default App;
