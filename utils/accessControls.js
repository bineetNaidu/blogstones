// Access control functions
const userIsAdmin = ({ authentication: { item: user } }) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  !!(user && user.isAdmin);

const userOwnsItem = ({ authentication: { item: user } }) => {
  if (!user) {
    return false;
  }

  // Instead of a boolean, you can return a GraphQL query:
  // https://www.keystonejs.com/api/access-control#graphqlwhere
  return { id: user.id };
};

const userIsAdminOrOwner = (auth) => {
  const isAdmin = userIsAdmin(auth);
  const isOwner = userOwnsItem(auth);
  // eslint-disable-next-line no-unneeded-ternary
  return isAdmin ? isAdmin : isOwner;
};

const access = { userIsAdmin, userOwnsItem, userIsAdminOrOwner };

module.exports = access;
