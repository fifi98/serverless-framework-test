import dynamoose from "dynamoose";

const schema = new dynamoose.Schema({
  id: String,
  name: String,
  author: {
    type: Object,
    schema: {
      name: String,
    },
  },
  pages: Number,
});

export default dynamoose.model("books", schema, { create: false, waitForActive: { enabled: false } });
