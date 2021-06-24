import dynamoose from "dynamoose";

const schema = new dynamoose.Schema({
  id: String,
  name: String,
  author: String,
  pages: Number,
});

export default dynamoose.model("books", schema, { create: false, waitForActive: { enabled: false } });
