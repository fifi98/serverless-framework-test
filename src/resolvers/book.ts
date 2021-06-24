const resolvers = {
  Query: {
    getAllBooks: (parent, args, context, info) => {
      return [
        {
          id: "123",
          name: "Book name",
          author: "John Smith",
          pages: 123,
        },
      ];
    },
  },
};

export default resolvers;
