const corsOptions = {
  origin: [
    'http://localhost:3000',
    'https://localhost:3000',
    'http://localhost:3001',
    'https://localhost:3001',
    'http://frontend.antropov.nomorepartiesxyz.ru',
    'https://frontend.antropov.nomorepartiesxyz.ru',
    'http://api.antropov.nomorepartiesxyz.ru',
    'https://api.antropov.nomorepartiesxyz.ru',

  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'origin', 'Authorization'],
  credentials: true,
};

module.exports = corsOptions;
