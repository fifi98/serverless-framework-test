import { gql } from "apollo-server-lambda";

const typeDefs = gql`
  type Book {
    id: String
    name: String
    author: String
    pages: Int
  }

  type Query {
    getAllBooks: [Book!]!
  }
`;

export default typeDefs;
