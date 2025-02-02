<script setup>
  import { ref, watchEffect } from 'vue';
  
  const currentSlide = ref(0);
  const persistedStore = usePersistedStore();
  const store = useMainStore();
  const current = ref('wildberries')
  const isStoreReady = ref(false);

  const slideGroups = computed(() => {
    return store.info[current.value].images;
  });

  watchEffect(() => {
    if (persistedStore.current) {
      current.value = persistedStore.current
      isStoreReady.value = true; 
    }
  });

  const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % slideGroups.value.length;
  };

  const prevSlide = () => {
    currentSlide.value = (currentSlide.value - 1 + slideGroups.value.length) % slideGroups.value.length;
  };
</script>

<template>
  <div v-if="isStoreReady" class="slider-container w-full overflow-hidden">
    <div
      ref="sliderTrack"
      class="slider-track flex transition-transform duration-500"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <div
        v-for="(group, index) in slideGroups"
        :key="index"
        class="slider-item grid sm:grid-cols-2 grid-cols-1 gap-8 w-full flex-shrink-0"
      >
        <div class="image-group">
          <div class="text-[20px] font-[600] leading-[28px] mb-4 flex">До</div>
          <NuxtImg :src="group.before" class="image" loading="lazy" alt="До HARMEX" />
        </div>

        <div class="image-group">
          <div class="text-[20px] font-[600] leading-[28px] mb-4 flex">После</div>
          <NuxtImg :src="group.after" class="image" loading="lazy" alt="После HARMEX"/>
        </div>
      </div>
    </div>
  </div>

  <div v-if="slideGroups.length > 1" class="w-full flex gap-4 justify-center items-center mt-4">
    <button
      class="btn-circle prev-btn flex items-center justify-center"
      @click="prevSlide"
      type="button"
      aria-label="Предыдущий слайд"
    >
      <Icon name="uil:arrow-left" class="w-4 h-4" />
    </button>
    <button
      class="btn-circle next-btn flex items-center justify-center"
      @click="nextSlide"
      type="button"
      aria-label="Следующий слайд"
    >
      <Icon name="uil:arrow-right" class="w-4 h-4" />
    </button>
  </div>
</template>

<style scoped>
  .label {
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 8px;
  }

  .image-group {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .image {
    width: 80%;
    height: auto;
    border-radius: 8px;
    display: flex;
    margin: auto;
  }
</style>
