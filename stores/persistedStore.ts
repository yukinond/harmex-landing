import { defineStore } from 'pinia';

export const usePersistedStore = defineStore('persisted', {
  state: () => ({
    current: null as any | null,
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
