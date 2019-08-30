'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 goods 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, TEXT, FLOAT} = Sequelize;
    await queryInterface.createTable('goods', {
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
  },
  // 在执行数据库降级时调用的函数，删除 goods 表
  down: async queryInterface => {
    await queryInterface.dropTable('goods');
  },
};