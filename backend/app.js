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
const authRoutes = require('./routes/auth');
const { verifyToken, isAdmin } = require('./db/middleware/auth-middleware');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server runnings');
});

app.use('/category', verifyToken, isAdmin, categoryRoutes);
app.use('/brand', verifyToken, isAdmin, brandRoutes);
app.use('/product', verifyToken, isAdmin, productRoutes);
app.use('/customer', verifyToken, customerRoutes);
app.use('/auth', authRoutes);

mongoose
  .connect(keys.mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch((error) => this.console.log(error));

app.listen(port, () => {
  console.log('Server runing', port);
});
