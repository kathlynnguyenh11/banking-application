import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import AccountList from './AccountList';
import AccountPage from './AccountPage';

const LARGE_DESKTOP_BREAKPOINT = 1366;
const SMALL_DESKTOP_BREAKPOINT = 1024;
const TABLET_BREAKPOINT = 768;

class App extends React.Component {
  state = {
    browserWidth: 0,
    breakpoint: 'large-desktop',
    view: 'GridView'
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  handleResize = () => {
    const browserWidth = window.innerWidth;
    let breakpoint = 'large-desktop';

    if (browserWidth < LARGE_DESKTOP_BREAKPOINT && browserWidth >= SMALL_DESKTOP_BREAKPOINT) {
      breakpoint = 'small-desktop';
    } else if (browserWidth < SMALL_DESKTOP_BREAKPOINT && browserWidth >= TABLET_BREAKPOINT) {
      breakpoint = 'tablet';
    } else if (browserWidth < TABLET_BREAKPOINT) {
      breakpoint = 'mobile';
    }

    this.setState({ breakpoint, browserWidth });
  }

  onViewChange(view){
      this.setState({view});
  }

  render() {
    return(
      <div>
        <h1>Banking Application</h1>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={AccountList}/>
            <Route path="/page/:name" component={AccountPage} />
          </div>
        </BrowserRouter>
      </div>
    )
    
  }
}

export default App;