import { ApolloServer } from "apollo-server-lambda";

import resolvers from "./resolvers";
import typeDefs from "./schemas";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: "/dev/graphql",
  },
});

export const graphqlHandler = server.createHandler();
