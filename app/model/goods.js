'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, TEXT, FLOAT } = app.Sequelize;

  const Goods = app.model.define('goods', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: STRING(30),
    price: INTEGER,
    image: TEXT,
    image1: TEXT,
    image2: TEXT,
    image3: TEXT,
    description: TEXT,
    remaining_stock: INTEGER,
    discount: FLOAT,
    produce_time: DATE,
    created_at: DATE,
    updated_at: DATE,
  });

  return Goods;
};
