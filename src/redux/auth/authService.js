import { gql } from "@apollo/client";

export const userLogin = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;

export const allUserList = gql`
  query Users($page: String!, $size: String!) {
    users(page: $page, size: $size) {
      totalRecords
      data {
        id
        name
        email
      }
    }
  }
`;
export const getUserDetails = gql`
  query User($userId: String!) {
    user(id: $userId) {
      id
      name
      email
    }
  }
`;
