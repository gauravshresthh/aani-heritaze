import React, { useState, useEffect } from 'react';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from '../SideDrawer/SideDrawer';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [headerShow, setHeaderShow] = useState(false);

  const ToggleDrawer = (value) => {
    setDrawerOpen(value);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHeaderShow(true);
    } else {
      setHeaderShow(false);
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: headerShow ? '#2B98AD' : 'transparent',
          boxShadow: 'none',
          padding: '10px 0px',
        }}
      >
        <ToolBar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue">
              Aani Heritage Plaza
            </div>
            <div className="header_logo_title">Free Food and Drinks event</div>
          </div>

          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={() => {
              ToggleDrawer(true);
            }}
          >
            <MenuIcon></MenuIcon>
          </IconButton>

          <SideDrawer
            open={drawerOpen}
            onClose={(value) => ToggleDrawer(value)}
          />
        </ToolBar>
      </AppBar>
    </>
  );
};

export default Header;
