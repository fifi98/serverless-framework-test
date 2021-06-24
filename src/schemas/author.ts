import { gql } from "apollo-server-lambda";

const typeDefs = gql`
  type Author {
    id: String
    name: String
  }
`;

export default typeDefs;
