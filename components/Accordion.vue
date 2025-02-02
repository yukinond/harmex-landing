<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:isOpen']);

const contentHeight = ref(0);
const panel = ref(null);

const toggleAccordion = () => {
  emit('update:isOpen', !props.isOpen);
};

onMounted(() => {
  contentHeight.value = panel.value.scrollHeight;
});
</script>

<template>
  <div class="border-b border-[#E8E8E8]" :class="{ 'pb-5': isOpen }">
    <button type="button" :aria-label="`${isOpen ? 'Закрыть вопрос' : 'Открыть вопрос'} ${title}`" class="accordion" @click="toggleAccordion">
      {{ title }}
      <Icon class="icon min-h-5 min-w-5" :class="{ 'rotate-45': isOpen, 'rotate-0': !isOpen }" name="prime:plus" />
    </button>
    <div
      class="panel"
      :style="{ maxHeight: isOpen ? contentHeight + 'px' : null }"
      ref="panel"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
.accordion {
  background-color: inherit;
  color: #444;
  cursor: pointer;
  padding: 18px;
  padding-left: 0px;
  padding-right: 0px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.4s;
}

.icon {
  display: inline-block;
  border: 2px solid #777;
  border-right: none;
  border-bottom: none;
  transform: rotate(0deg);
  transition: transform 0.2s ease;
}

.rotate-45 {
  transform: rotate(135deg);
}

.panel {
  padding: 0;
  background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  color: #0a0a0ab2;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
</style>
