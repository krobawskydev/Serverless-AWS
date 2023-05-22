const AWS = require("aws-sdk");

const getTasks = async () => {
  try {
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const result = await dynamodb.scan({ TableName: "ToDoTable" }).promise();

    const tasks = result.Items;

    return {
      status: 200,
      body: {
        tasks,
      },
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify(error),
    };
  }
};

module.exports = {
  getTasks,
};