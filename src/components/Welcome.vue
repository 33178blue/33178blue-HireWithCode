<template>
  <div class="welcome-container">
    <img src="../assets/logo.png" alt="Logo" class="logo" />
    <h2>欢迎来到 infist 线上面试环节，期待你的加入！</h2>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    router.push("/guide");
  }, 2000);
});
</script>

<style scoped>
.welcome-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.logo {
  width: 120px;
  margin-bottom: 20px;
}
</style>
