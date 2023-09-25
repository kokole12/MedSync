const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'MedSync API Documentation',
    version: '1.0.0',
    description: 'Documentation for your MedSync Api',
  },
  servers: [
    {
      url: 'http://localhost:3001', // Replace with your server's URL
      description: 'Development server',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  security: [
    {
      bearerAuth: [], // Use this for routes that require authentication
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./routers/*.js'], // Replace with the path to your route files
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
