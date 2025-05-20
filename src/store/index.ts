// src/store/index.ts
import { defineStore } from "pinia";

export const useChallengeStore = defineStore("challenge", {
  state: () => ({
    githubId: "",
    email: "",
    repoUrl: "",
    vercelUrl: "",
  }),
  actions: {
    setGithubId(id: string) {
      this.githubId = id;
    },
    setEmail(email: string) {
      this.email = email;
    },
    setRepoUrl(url: string) {
      this.repoUrl = url;
    },
    setVercelUrl(url: string) {
      this.vercelUrl = url;
    },
  },
});
