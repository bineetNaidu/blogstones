import { gql } from '@apollo/client';

export const GET_BLOG = gql`
  query ($id: ID!) {
    Blog(where: { id: $id }) {
      id
      name
      body
      createAt
      author {
        id
        name
      }
      likes
      dislikes
      status
      _commentsMeta {
        count
      }
      comments {
        id
        comment
        commentedAt
        likes
        dislikes
        user {
          id
          name
        }
      }
    }
  }
`;
