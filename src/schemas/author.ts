import { gql } from "apollo-server-lambda";

const typeDefs = gql`
  type Author {
    name: String
  }
`;

export default typeDefs;
