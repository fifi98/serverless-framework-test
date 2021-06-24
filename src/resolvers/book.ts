import { nanoid } from "nanoid";

import Book from "../models/book";

const resolvers = {
  Query: {
    getAllBooks: async () => await (await Book.scan().exec()).populate(),
  },
  Mutation: {
    addBook: async (parent, args, context, info) => {
      const book = new Book({ id: nanoid(), name: args.name, pages: args.pages, author: { name: args.author } });
      return await book.save();
    },
  },
};

export default resolvers;
