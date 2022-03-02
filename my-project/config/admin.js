module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '512b3331bb0694e927916178ea67335e'),
  },
});
