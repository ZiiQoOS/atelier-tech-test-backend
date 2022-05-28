const config = {};


config.cors = {
  origin: [
    'http://localhost:4200',
    'https://atelier-tech-test-frontend.herokuapp.com/'
  ],
  methods: 'POST,GET,PUT,OPTIONS,DELETE'
}

module.exports = config;
