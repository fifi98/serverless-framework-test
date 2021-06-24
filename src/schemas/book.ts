import { gql } from "apollo-server-lambda";

const typeDefs = gql`
  type Book {
    id: String
    name: String
    author: Author
    pages: Int
  }

  type Query {
    getAllBooks: [Book!]!
  }

  type Mutation {
    addBook(name: String, pages: Int, author: String): Book!
  }
`;

export default typeDefs;
