const mongoose = require('mongoose');
const Product = require('./models/Product');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { family: 4 })
  .then(async () => {
    console.log('✅ Connected!');

    const rawData = fs.readFileSync('C:/Users/nsc/Desktop/nutirution-marketpfe-main/data/market.json');
    const parsed = JSON.parse(rawData);
    const products = parsed.products;

    console.log(`📦 Found ${products.length} products`);

    await Product.deleteMany({});
    await Product.insertMany(products.map(p => ({
      id: p.id,
      name: p.name,
      category_id: p.category_id,
      price: p.price,
      description: p.description,
      image: p.image,
      stock: p.stock || 0
    })));

    console.log(`✅ Seeded ${products.length} products!`);
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ Error:', err.message);
    process.exit(1);
  });