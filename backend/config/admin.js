module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1b6bf10036eb4294a05c1e959d56e17e'),
  },
});
