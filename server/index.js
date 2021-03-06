const { Keystone } = require('@keystonejs/keystone');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const initialiseData = require('./initial-data');

const userFields = require('./model/User');
const access = require('./utils/accessControls');
const blogFields = require('./model/Blog');
const commentsField = require('./model/Comment');

const PROJECT_NAME = 'blogstones';
const adapterConfig = { mongoUri: process.env.MONGO_URI };

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  onConnect: process.env.CREATE_TABLES !== 'true' && initialiseData,
  cookieSecret: process.env.COOKIE_SECRET,
});

keystone.createList('User', {
  fields: userFields,
  // List-level access controls
  access: {
    read: true,
    update: access.userIsAdminOrOwner,
    create: true,
    delete: access.userIsAdminOrOwner,
    auth: true,
  },
});

keystone.createList('Blog', {
  fields: blogFields,
  access: {
    auth: true,
    read: true,
    create: access.authed,
    update: access.userIsAdminOrOwner,
    delete: access.userIsAdminOrOwner,
  },
});
keystone.createList('Comment', {
  fields: commentsField,
  access: {
    auth: true,
    read: true,
    create: access.authed,
    update: access.userIsAdminOrOwner,
    delete: access.userIsAdminOrOwner,
  },
});

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
  config: { protectIdentities: process.env.NODE_ENV === 'production' },
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      name: PROJECT_NAME,
      enableDefaultRoute: true,
      isAccessAllowed: access.userIsAdmin,
      authStrategy,
    }),
  ],
};
