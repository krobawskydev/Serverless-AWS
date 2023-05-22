const AWS = require("aws-sdk");

const checkTask = async (event) => {
  try {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;

    const { done } = JSON.parse(event.body);

    await dynamodb
      .update({
        TableName: "ToDoTable",
        Key: { id },
        UpdateExpression: "set done = :done",
        ExpressionAttributeValues: {
          ":done": done,
        },
        ReturnValues: "ALL_NEW",
      })
      .promise();

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "task updated",
      }),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify(error),
    };
  }
};

module.exports = {
  checkTask,
};