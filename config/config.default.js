'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_sequelize-example';

  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'egg-sequelize-example-dev',
    host: '127.0.0.1',
    port: 3306,
    password:"6666"
  };

  config.security = {
    csrf: false
  };

  return config;
};

// exports.graphql = {
//   router: '/graphql',
//   // 是否加载到 app 上，默认开启
//   app: true,
//   // 是否加载到 agent 上，默认关闭
//   agent: false,
//   // 是否加载开发者工具 graphiql, 默认开启。路由同 router 字段。使用浏览器打开该可见。
//   graphiql: true,
//   //是否设置默认的Query和Mutation, 默认关闭
//   defaultEmptySchema:true,
//   // graphQL 路由前的拦截器
//   onPreGraphQL: function* (ctx) {},
//   // 开发工具 graphiQL 路由前的拦截器，建议用于做权限操作(如只提供开发者使用)
//   onPreGraphiQL: function* (ctx) {},
// };

// // 添加中间件拦截请求
// exports.middleware = [ 'graphql' ];