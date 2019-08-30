'use strict';

module.exports = app => {
  const { router, controller } = app;
  app.resources('goods', '/goods', app.controller.goods);
};
