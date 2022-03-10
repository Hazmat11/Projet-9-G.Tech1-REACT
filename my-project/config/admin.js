module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7fa4dad77a722aec4e38abccec7108e9'),
  },
});
