import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';


import StyledComponents from '../Header/Touch';
import Drop from '../Header/DropDown';
import Home from '../Header/Home';
const Header = () => {

return(
    <AppBar position="relative">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Home />
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <StyledComponents />
        </div>
        <Drop/>
    </Toolbar>
  </AppBar>
)
}
export default Header;