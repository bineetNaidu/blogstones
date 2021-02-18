import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      token
      item {
        id
        name
      }
    }
  }
`;
