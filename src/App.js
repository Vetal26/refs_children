import React, { Component } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import MenuList from './Menu/MenuList';
import MenuItem from './Menu/MenuItem';

class App extends Component {
  state = {
    isMenuOpen: false,
  }

  toggleMenu = () => {
    this.setState(({isMenuOpen}) => ({ isMenuOpen: !isMenuOpen }));
  }

  onAsideClick = (event) => {
    if (!event.target.contains(this.aside) && !event.target.contains(this.button) && this.state.isMenuOpen) {
      this.toggleMenu();
    }
  }

  handleAsideRef = (node) => {
    this.aside = node;
    if (node) {
      document.addEventListener('click', this.onAsideClick);
    } else {
      document.removeEventListener('click', this.onAsideClick);
    }
  }

  handleButtonRef = (node) => {
    this.button = node;
  }

  render () {
    return (
      <div className="app">
        <header>
          <button ref={this.handleButtonRef} className='fa fa-bars menu-btn' onClick={this.toggleMenu}></button>
        </header>
        <Sidebar onRef={this.handleAsideRef} isOpen={this.state.isMenuOpen}>
          <MenuList>
            <MenuItem title="Dashboard"></MenuItem>
            <MenuItem title="Admin panel"></MenuItem>
          </MenuList>
        </Sidebar>
        <main>Main</main>
      </div>
    );
  }
}

export default App;
