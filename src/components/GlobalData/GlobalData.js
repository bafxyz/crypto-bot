import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import FetchUtils from '../../utils/fetchUtil';
import { COINCAP_GLOBAL_DATA_URL } from '../../constants/Api';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

class GlobalData extends Component {
  state = {
    globalData: {}
  };

  componentDidMount() {
    return fetch(COINCAP_GLOBAL_DATA_URL)
      .then(FetchUtils.checkStatus)
      .then(response => response.json())
      .then(data => { return this.setState({globalData: data})})
      .catch(e => e)
  }

  render() {
    const { classes } = this.props;
    const { globalData} = this.state;
    const { altCap, bitnodesCount, btcCap, btcPrice, dom, totalCap, volumeAlt, volumeBtc, volumeTotal } = globalData;

    return (
      <Fragment>
        <Paper className={classes.root} elevation={4}>
          <Typography type="headline" component="h3">
            BTC Price: {btcPrice}
          </Typography>
          <Typography component="p">
            BTC cap: {btcCap}
          </Typography>
        </Paper>
      </Fragment>
    );
  }
}

GlobalData.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GlobalData);
