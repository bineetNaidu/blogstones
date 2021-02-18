const { gql } = require('@apollo/client');

export const GET_ALL_BLOGS = gql`
  query {
    allBlogs {
      id
      name
      body
      createAt
      author {
        id
        name
      }
      status
      likes
      dislikes
      comments {
        comment
        commentedAt
        user {
          id
          name
        }
        likes
        dislikes
      }
      _commentsMeta {
        count
      }
    }
  }
`;
