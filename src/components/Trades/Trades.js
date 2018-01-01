import React, { Fragment } from 'react';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import { COINCAP_SOCKET_URL } from '../../constants/Api';
import openSocket from 'socket.io-client';
import Table, {
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from 'material-ui/Table';
const socket = openSocket(COINCAP_SOCKET_URL);

const mapStateToProps = () => ({});
/**
 * Trades Component
 *
 * @example <Trades />
 * @return {string} - HTML markup for the component
 */
class Trades extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tradeMsg: null
    };
  }

  componentDidMount() {
    this.getCoincapInfo();
  }

  getCoincapInfo() {
    socket.on('trades', function (tradeMsg) {
      this.setState({
        tradeMsg
      });
    }.bind(this));
  }

  // handleClick() {

  // }

  /**
   * Renders the component.
   *
   * @memberof Trades
   * @return {string} - HTML markup for the component
   */
  render() {
    const buttonSettings = { onClick: (e) => this.handleClick(e) };
    const {tradeMsg} = this.state;
    
    return (
      tradeMsg ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                asdasdf
              </TableCell>
              {/* {tradeMsg.map(column => {
                return (
                  <TableCell
                    key={column.id}
                    padding={column.disablePadding ? 'none' : 'default'}
                    sortDirection={orderBy === column.id ? order : false}
                  >
                    <Tooltip
                      title="Sort"
                      placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                      enterDelay={300}
                    >
                      <TableSortLabel
                        active={orderBy === column.id}
                        direction={order}
                        onClick={this.createSortHandler(column.id)}
                      >
                        {column.label}
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                );
              }, this)} */}
            </TableRow>
          </TableHead>
        </Table>
      ) : ('No trade info received for the moment')
    );
  }
}

export default connect(mapStateToProps)(Trades);
