<template>
  <div class="guide-container">
    <div v-html="htmlContent" class="markdown-content"></div>
    <button @click="goNext" class="button_box">接受挑战</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { marked } from "marked";
import { useRouter } from "vue-router";
import { guideMarkdown } from "../data/markdown";
const htmlContent = ref(marked.parse(guideMarkdown));
const router = useRouter();

function goNext() {
  router.push("/accept");
}
</script>

<style scoped>
.guide-container {
  max-width: 1000px;
  margin: 40px auto;
  padding: 0 20px;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgb(0 0 0 / 0.1);
}
.markdown-content {
  margin-bottom: 30px;
}
.markdown-content h1 {
  font-size: 2rem;
  margin-bottom: 0.5em;
  border-bottom: 2px solid #409eff;
  padding-bottom: 0.3em;
}
.markdown-content h2 {
  font-size: 1.5rem;
  margin-top: 1em;
  margin-bottom: 0.5em;
  color: #409eff;
}
.markdown-content p {
  margin: 0.8em 0;
}
.markdown-content ul,
.markdown-content ol {
  margin-left: 1.4em;
  margin-bottom: 1em;
}
.markdown-content code {
  background: #f5f5f5;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
}
.markdown-content blockquote {
  border-left: 4px solid #409eff;
  padding-left: 12px;
  color: #666;
  margin: 1em 0;
  font-style: italic;
  background: #f0f9ff;
  border-radius: 4px;
}
button {
  padding: 10px 20px;
  cursor: pointer;
  background-color: #409eff;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: 600;
  transition: background-color 0.3s ease;
  margin-bottom: 20px;
}
button:hover {
  background-color: #66b1ff;
}
</style>
