const { Text, DateTimeUtc, Integer } = require('@keystonejs/fields');
const {
  AuthedRelationship,
} = require('@keystonejs/fields-authed-relationship');

const commentsField = {
  comment: {
    type: Text,
    isRequired: true,
    isMultiline: true,
  },
  commentedAt: {
    type: DateTimeUtc,
    isRequired: true,
    defaultValue: Date.now(),
  },
  user: { type: AuthedRelationship, ref: 'User', isRequired: true },
  likes: { type: Integer, defaultValue: 0 },
  dislikes: { type: Integer, defaultValue: 0 },
};

module.exports = commentsField;
