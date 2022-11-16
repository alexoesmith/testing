<script setup>
import axios from "axios";

const loading = ref(false);

const form = ref({
  name: "Alex",
  email: "alexoesmith@gmail.com",
  message: "Hello this is a message from Nuxt 3",
});

const sendMail = async () => {
  loading.value = true;

  try {
    const response = await axios.post("/.netlify/functions/sendMail", form.value);

    if (response.ok) {
      console.log("The response is, " + response.data);
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.log(error);
  }

  loading.value = false;
};
</script>

<template>
  <div>
    <button @click="sendMail" :disabled="loading">
      <span v-if="!loading">Send Email</span>
      <span v-else>Sending...</span>
    </button>
  </div>
</template>
