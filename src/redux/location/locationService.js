import { gql } from "@apollo/client";

export const allCountry = gql`
  query Query {
    countries {
      id
      name
    }
  }
`;
export const allStates = gql`
  query States($statesId: ID!) {
    states(id: $statesId) {
      id
      name
    }
  }
`;

export const allCities = gql`query Cities($citiesId: ID!) {
  cities(id: $citiesId) {
    id
    name
  }
}`;