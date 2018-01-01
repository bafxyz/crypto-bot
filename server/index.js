const express = require('express');
const app = express();
const port = 3000;

const server = app.listen(port, function() {
  console.log(`Listening to requests on port ${port}`);
});
const socket = require('socket.io');
// Socket setup
const io = socket(server);
io.on('connection', function(socket) {
  console.log('made socket connection');
});
// Static files
app.use(express.static('public'));

// Routes
app.get('/bitstamp', function (req, res) {
  res.send('Bitstamp!')
})

app.get('/global', function (req, res) {
  res.send('Global!')
})

// const Bitstamp = require('./api/Bitstamp');
// const ws = new Bitstamp({
//   // force encrypted socket session
//   encrypted: true,
//   cluster: 'eu',

//   // BTC/USD market:
//   live_trades: true,
//   order_book: true,
//   diff_order_book: true
// });

// if you enabeld `live_trades` or `live_trades_btceur`

// console.log('listening to new trades..');
// ws.on('trade', function(trade) {
//   console.log('new trade:', trade);
// });


// // if you enabeld `order_book`, `diff_order_book`,
// // `order_book_btceur` and/or `diff_order_book_btceur`.

// console.log('listening to new order book events..');
// ws.on('data', function(data) {
//   console.log('new order book event:', data);
// });
