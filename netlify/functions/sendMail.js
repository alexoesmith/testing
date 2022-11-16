const axios = require("axios");

const handler = async (event) => {
  try {
    await axios.post("http://localhost:1337/api/email", {
      to: "alexoesmith@gmail.com",
      from: "alexoesmith@gmail.com",
      subject: "Hello from Netlify function",
      html: "Hello world",
    });
    return {
      statusCode: 200,
      body: "Email sent",
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
