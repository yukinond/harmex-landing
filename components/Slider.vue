<script setup>
  import { ref } from 'vue';
  
  const currentSlide = ref(0);
  const slideGroups = [
    {
      before: '/img/example.svg',
      after: '/img/example.svg',
    },
    {
      before: '/img/example.svg',
      after: '/img/example.svg',
    },
    {
      before: '/img/example.svg',
      after: '/img/example.svg',
    },
  ];
  
  const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % slideGroups.length;
  };
  
  const prevSlide = () => {
    currentSlide.value = (currentSlide.value - 1 + slideGroups.length) % slideGroups.length;
  };
</script>

<template>
    <div class="slider-container w-full overflow-hidden">
      <div
        ref="sliderTrack"
        class="slider-track flex transition-transform duration-500"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <div
          v-for="(group, index) in slideGroups"
          :key="index"
          class="slider-item grid sm:grid-cols-2 grid-cols-2 gap-8 w-full flex-shrink-0"
        >
          <NuxtImg :src="group.before" class="image" />
          <NuxtImg :src="group.after" class="image" />
        </div>
      </div>
    </div>
  
    <div class="w-full flex gap-4 justify-center items-center mt-4">
      <button
        class="btn-circle prev-btn flex items-center justify-center"
        @click="prevSlide"
        aria-label="Предыдущий слайд"
      >
        <Icon name="uil:arrow-left" class="w-4 h-4" />
      </button>
      <button
        class="btn-circle next-btn flex items-center justify-center"
        @click="nextSlide"
        aria-label="Следующий слайд"
      >
        <Icon name="uil:arrow-right" class="w-4 h-4" />
      </button>
    </div>
  </template>
  
  <style scoped>
  .slider-container {
    width: 100%;
    overflow: hidden;
  }
  
  .slider-track {
    display: flex;
    will-change: transform;
  }
  
  .slider-item {
    width: 100%;
    flex-shrink: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  
  .image {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  
  .btn-circle {
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    background: #f3f4f6;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .btn-circle:hover {
    background: #e5e7eb;
  }
  </style>
  