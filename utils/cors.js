const corsOptions = {
  origin: [
    'http://localhost:3000',
    'https://localhost:3000',
    'http://localhost:3001',
    'https://localhost:3001',
    'http://frontend.antropov-diploma.nomoredomains.icu',
    'https://frontend.antropov-diploma.nomoredomains.icu',
    'http://api.antropov-diploma.nomoredomains.icu',
    'https://api.antropov-diploma.nomoredomains.icu',

  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'origin', 'Authorization'],
  credentials: true,
};

module.exports = corsOptions;
