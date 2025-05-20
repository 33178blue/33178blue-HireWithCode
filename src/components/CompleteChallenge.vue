<template>
  <div class="form_box">
    <div class="form-container">
      <h2>完成挑战</h2>
      <form @submit.prevent="submitForm">
        <label>
          GitHub 仓库 URL:
          <input type="url" v-model="repoUrl" required />
        </label>
        <label>
          Vercel 在线体验地址:
          <input type="url" v-model="vercelUrl" required />
        </label>
        <button type="submit">提交作品</button>
      </form>
      <p v-if="submitted" class="success-msg">提交成功！感谢你的参与！</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useChallengeStore } from "@/store/index";

const repoUrl = ref("");
const vercelUrl = ref("");
const submitted = ref(false);

const store = useChallengeStore();

function submitForm() {
  if (!repoUrl.value || !vercelUrl.value) {
    alert("请填写所有字段");
    return;
  }
  store.repoUrl = repoUrl.value.trim();
  store.vercelUrl = vercelUrl.value.trim();
  submitted.value = true;
}
</script>

<style scoped>
.form_box {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  overflow: hidden;
  box-sizing: border-box;
  overflow-x: hidden;
}
.form-container {
  max-width: 400px;
  margin: 40px auto;
  padding: 0 20px;
}
form {
  display: flex;
  flex-direction: column;
}
label {
  margin-bottom: 15px;
  font-size: 14px;
}
input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
}
button {
  padding: 10px 20px;
  cursor: pointer;
  margin-bottom: 20px;
}
.success-msg {
  margin-top: 20px;
  color: green;
  font-weight: bold;
}
/* 小屏优化 */
@media (max-width: 480px) {
  .form-container {
    padding: 20px 15px;
  }

  h2 {
    font-size: 1.25rem;
  }

  input,
  button {
    font-size: 15px;
  }
}
</style>
