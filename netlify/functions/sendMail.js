const axios = require("axios");

const handler = async (event) => {
  const { name, email, message } = JSON.parse(event.body);
  try {
    await axios.post("https://api.gomediadev.co.uk/api/email", {
      to: "alexoesmith@gmail.com",
      from: email,
      subject: `Hello from Netlify function from ${name}`,
      html: message,
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
