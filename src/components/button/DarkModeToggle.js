import React, { Component } from 'react';

import { FaSun, FaMoon } from 'react-icons/fa';

/**
 * 
 */

class DarkModeToggle extends Component {
  constructor( props ) {
    super( props );

    if( JSON.parse( localStorage.getItem('DARK_MODE') ) === true ) {
      document.body.classList.add( 'dark-mode' );
    };

    this.state = {
      darkMode: JSON.parse(localStorage.getItem('DARK_MODE'))
    };

    this.handleModeChange = this.handleModeChange.bind(this);
  };

  handleModeChange() {
    if(!this.state.darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    };

    this.setState({
      darkMode: (!this.state.darkMode)
    });
    localStorage.setItem('DARK_MODE', !this.state.darkMode);
  };

  render() {
    return (

        <section className='btn__darkmode'>
            <div className="btn__darkmode__button">
                <span>
                  {/* modo noturno */}
                </span>
                <input id="toggle_switch" name="toggle_switch" type="checkbox" onClick={this.handleModeChange} />
                <label id="toggle_switch-label" htmlFor="toggle_switch">
                  <FaMoon className="btn__darkmode__moon" />
                  <FaSun className="btn__darkmode__sun" />
                </label>
            </div>
        </section>
    );
  };
};

export default DarkModeToggle;
