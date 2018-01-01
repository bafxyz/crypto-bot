import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import SupervisorAccountIcon from 'material-ui-icons/SupervisorAccount';
import AccountBalanceIcon from 'material-ui-icons/AccountBalance';
import EuroIcon from 'material-ui-icons/EuroSymbol';
import InvertColorsIcon from 'material-ui-icons/InvertColors';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
});

function SideNav(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <SupervisorAccountIcon />
          </ListItemIcon>
          <ListItemText primary="Accounts" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AccountBalanceIcon />
          </ListItemIcon>
          <ListItemText primary="Account balance" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <EuroIcon />
          </ListItemIcon>
          <ListItemText primary="Currency settings" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <InvertColorsIcon />
          </ListItemIcon>
          <ListItemText primary="Change mode" />
        </ListItem>
      </List>
    </div>
  );
}

SideNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideNav);
