'use strict';

/**
 *  blog controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blog.blog', ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;
    const prevId = await strapi.db.query('api::blog.blog').findOne({
      select: ['id'],
      where: {
        id: {
          $lt: id,
        },
      },
      orderBy: { id: 'DESC' }
    });
    const nextId = await strapi.db.query('api::blog.blog').findOne({
      select: ['id'],
      where: {
        id: {
          $gt: id,
        },
      },
    });
    const response = await super.findOne(ctx);
    response.meta.prevId = prevId ? prevId.id : prevId;
    response.meta.nextId = nextId ? nextId.id : nextId;
    return response;
  }
}));
