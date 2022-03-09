module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7648055429ff063a603da41d49b7cb9b'),
  },
});
