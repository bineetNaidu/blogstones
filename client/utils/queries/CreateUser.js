import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation($email: String!, $name: String!, $password: String!) {
    createUser(
      data: { name: $name, email: $email, isAdmin: false, password: $password }
    ) {
      id
      name
      email
      isAdmin
    }
  }
`;
