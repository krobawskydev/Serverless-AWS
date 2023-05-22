const AWS = require("aws-sdk");

const deleteTask = async (event) => {
  try {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;

    await dynamodb
      .delete({
        TableName: "ToDoTable",
        Key: {
          id,
        },
      })
      .promise();

    return {
      status: 200,
      body: {
        message: 'Deleted Task'
      }
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify(error),
    };
  }
};

module.exports = {
  deleteTask,
};