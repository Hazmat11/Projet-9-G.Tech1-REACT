'use strict';

/**
 * image-ws service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::image-ws.image-ws');
