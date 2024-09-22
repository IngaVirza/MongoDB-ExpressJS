const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const app = express();
const port = 3000;
const cors = require('cors');
const categoryRoutes = require('./routes/category');
const brandRoutes = require('./routes/brand');
const productRoutes = require('./routes/product');
const customerRoutes = require('./routes/customer');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server runnings');
});

app.use('/category', categoryRoutes);
app.use('/brand', brandRoutes);
app.use('/product', productRoutes);
app.use('/customer', customerRoutes);

mongoose
  .connect(keys.mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch((error) => this.console.log(error));

app.listen(port, () => {
  console.log('Server runing', port);
});
