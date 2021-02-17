// eslint-disable-next-line object-curly-newline
const { Select, Text, DateTimeUtc, Integer } = require('@keystonejs/fields');
const { Markdown } = require('@keystonejs/fields-markdown');
const {
  AuthedRelationship,
} = require('@keystonejs/fields-authed-relationship');

const postFields = {
  name: { type: Text, isRequired: true },
  body: { type: Markdown },
  createAt: { type: DateTimeUtc, isRequired: true },
  author: { type: AuthedRelationship, ref: 'User', isRequired: true },
  status: {
    type: Select,
    options: [
      { value: 'PUBLISHED', label: 'Published' },
      { value: 'UNPUBLISHED', label: 'Unpublished' },
    ],
  },
  likes: { type: Integer, defaultValue: 0 },
  dislikes: { type: Integer, defaultValue: 0 },
};

module.exports = postFields;
