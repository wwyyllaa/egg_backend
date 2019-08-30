'use strict';

const Service = require('egg').Service;

class Goods extends Service {
  async list({ offset = 0, limit = 10 }) {
    return this.ctx.model.Goods.findAndCountAll({
      offset,
      limit,
      order: [[ 'created_at', 'desc' ], [ 'id', 'desc' ]],
    });
  }

  async find(id) {
    const goods = await this.ctx.model.Goods.findByPk(id);
    if (!goods) {
      this.ctx.throw(404, 'goods not found');
    }
    return goods;
  }

  async create(goods) {
    return this.ctx.model.Goods.create(goods);
  }

  async update({ id, updates }) {
    const goods = await this.ctx.model.Goods.findByPk(id);
    if (!goods) {
      this.ctx.throw(404, 'goods not found');
    }
    return goods.update(updates);
  }

  async del(id) {
    const goods = await this.ctx.model.Goods.findByPk(id);
    if (!goods) {
      this.ctx.throw(404, 'goods not found');
    }
    return goods.destroy();
  }
}

module.exports = Goods;
