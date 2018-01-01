import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Drawer from 'material-ui/Drawer';
import SideNav from '../components/SideNav/SideNav';
import GlobalData from '../components/GlobalData/GlobalData';

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class HomePage extends Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  
  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="contrast" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              Crypto Bot
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            <SideNav/>
          </div>
        </Drawer>
        <GlobalData/>
      </div>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);

// import React, {Fragment} from 'react';
// import SideNav from '../components/SideNav/SideNav';
// import Trades from '../components/Trades/Trades';

// /**
//  * HomePage Component
//  *
//  * @example <HomePage />
//  * @return {string} - HTML markup for the component
//  */
// class HomePage extends React.Component {

//   /**
//    * Renders the component.
//    *
//    * @memberof Card
//    * @return {string} - HTML markup for the component
//    */
//   render() {
//     return (
//       <Fragment>
//         <SideNav/>
//         <Trades/>
//       </Fragment>
//     );
//   }
// }

// export default HomePage;
