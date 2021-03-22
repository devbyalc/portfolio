import React from 'react';
import axios from 'axios';
// import Backdesign from './Design/Backdesign';
import NavBar from './Pages/NavBar';
import About from './Pages/About';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import ProjectDetails from './Cards/ProjectDetails';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {Layout} from 'antd';
const {Header} = Layout;

class App extends React.Component {

  state = {
    projects: [],
    error: null,
    thekey: 1,
  }


  //Fetch projects immediately after the component is mounted.
  componentDidMount = async () => {
    try {
      const response = await axios.get('http://localhost:1337/projects')
      this.setState({ projects: response.data });
    } catch (error) {
      this.setState({ error });
    }

  };

  render() {
    const {error} = this.state;

    if (error) {
      return <div>An error occured: {error.message}</div>;
    }

    return (
      <Router>
        <div className="App">
        <Layout>
          <Header>
          <NavBar />
          </Header>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" exact >
              <Projects key={this.state.thekey} projects={this.state.projects} />
            </Route>
            <Route path="/projects/:id" component={ProjectDetails} />
          </Switch>
          </Layout>
        </div>
      </Router>
    );

  }

}
export default App;
