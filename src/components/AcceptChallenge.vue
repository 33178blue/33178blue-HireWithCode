<template>
  <div class="form-wrapper">
    <div class="form-container">
      <h2>接受挑战</h2>
      <form @submit.prevent="submitForm" novalidate>
        <label for="githubId">GitHub ID</label>
        <input
          id="githubId"
          type="text"
          v-model="githubId"
          placeholder="请输入你的 GitHub ID"
          autocomplete="username"
          required
          :disabled="loading"
        />

        <label for="email">邮箱</label>
        <input
          id="email"
          type="email"
          v-model="email"
          placeholder="请输入你的邮箱"
          autocomplete="email"
          required
          :disabled="loading"
        />

        <button :disabled="loading" type="submit">
          {{ loading ? "提交中..." : "接受挑战" }}
        </button>
      </form>
      <p v-if="submitted" class="success-msg">提交成功！请继续下一步。</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useChallengeStore } from "../store/index";

const githubId = ref("");
const email = ref("");
const submitted = ref(false);
const loading = ref(false);
const router = useRouter();

const store = useChallengeStore();

function submitForm() {
  if (!githubId.value.trim() || !email.value.trim()) {
    alert("请填写所有字段");
    return;
  }
  loading.value = true;
  store.githubId = githubId.value.trim();
  store.email = email.value.trim();

  // 模拟提交延迟
  setTimeout(() => {
    submitted.value = true;
    loading.value = false;
    setTimeout(() => {
      router.push("/complete");
    }, 1500);
  }, 1000);
}
</script>

<style lang="scss">
.form-wrapper {
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
  background: white;
  padding: 30px 40px;
  border-radius: 12px;
  box-shadow: 0 12px 30px rgb(58 85 182 / 0.25);
  max-width: 420px;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  transition: transform 0.3s ease;
}

h2 {
  margin-bottom: 24px;
  font-weight: 700;
  color: #334e8c;
  font-size: 28px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

label {
  font-weight: 600;
  font-size: 15px;
  color: #555;
  text-align: left;
}

input {
  padding: 12px 14px;
  font-size: 16px;
  border-radius: 8px;
  border: 1.8px solid #cdd7f4;
  transition: border-color 0.3s ease;
  outline-offset: 2px;
}

input:focus {
  border-color: #409eff;
  box-shadow: 0 0 6px #409effaa;
}

input::placeholder {
  color: #a6b1d1;
}

button {
  margin-top: 12px;
  background-color: #409eff;
  color: white;
  font-weight: 600;
  font-size: 18px;
  padding: 14px 0;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.3s ease;
}

button:hover:not(:disabled) {
  background-color: #1a73e8;
}

button:disabled {
  background-color: #a0c4ff;
  cursor: not-allowed;
}

.success-msg {
  margin-top: 22px;
  color: #28a745;
  font-weight: 700;
  font-size: 16px;
  user-select: none;
}

/* 响应式 */
@media (max-width: 480px) {
  .form-container {
    padding: 20px;
  }
  h2 {
    font-size: 24px;
  }
  button {
    font-size: 16px;
    padding: 12px 0;
  }
}
</style>
