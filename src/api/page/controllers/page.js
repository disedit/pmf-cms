'use strict';

/**
 * page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::page.page' , ({ strapi }) => ({
  async findOne({ slug }) {
    const entity = await strapi.db.query('api::page.page').findOne({
      where: { slug },
    });

    const sanitizedEntity = await this.sanitizeOutput(entity);

    return this.transformResponse(sanitizedEntity);
  }
}));
