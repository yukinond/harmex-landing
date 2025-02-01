import { defineStore } from 'pinia';

export const usePersistedStore = defineStore('persisted', {
  state: () => ({
    current: null as any | null,
    viewedArticles: [] as any[],
  }),
  actions: {
    setCurrent(current: any) {
      this.current = current;
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
});
