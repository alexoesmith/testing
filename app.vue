<script setup>
import axios from "axios";

const sendMail = async () => {
  try {
    const response = await axios.get("/.netlify/functions/sendMail");

    if (response.ok) {
      console.log("The response is, " + response.data);
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div>
    <button @click="sendMail">Send mail</button>
  </div>
</template>
