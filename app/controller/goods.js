'use strict';

const Controller = require('egg').Controller;

class GoodsController extends Controller {
  async index() {
    const ctx = this.ctx;
    let token = ctx.header.token;
    if(!token || token!=='nicai'){
      ctx.body = "無效";
      return ;
    }
    const query = {
      limit: ctx.helper.parseInt(ctx.query.limit),
      offset: ctx.helper.parseInt(ctx.query.offset),
    };
    ctx.body = await ctx.service.goods.list(query);
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.goods.find(ctx.helper.parseInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    const goods = await ctx.service.goods.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = goods;
  }

  async update() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const body = ctx.request.body;
    ctx.body = await ctx.service.goods.update({ id, updates: body });
  }

  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    await ctx.service.goods.del(id);
    ctx.status = 200;
  }
}

module.exports = GoodsController;
