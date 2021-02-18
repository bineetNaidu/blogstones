import { gql } from '@apollo/client';

export const CREATE_BLOG = gql`
  mutation($name: String!, $body: String!, $createAt: String) {
    createBlog(
      data: {
        name: $name
        body: $body
        createAt: $createAt
        likes: 0
        dislikes: 0
      }
    ) {
      id
      name
    }
  }
`;
