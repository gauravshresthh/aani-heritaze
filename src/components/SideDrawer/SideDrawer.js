import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
      color="white"
    >
      <List component="nav">
        <ListItem button onClick={() => console.log('clicked')}>
          Event Starts in
        </ListItem>
        <ListItem button onClick={() => console.log('clicked')}>
          Event Info
        </ListItem>
        <ListItem button onClick={() => console.log('clicked')}>
          Featured
        </ListItem>
        <ListItem button onClick={() => console.log('clicked')}>
          Pricing
        </ListItem>
        <ListItem button onClick={() => console.log('clicked')}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
