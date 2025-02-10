<script setup lang="ts">
const showModal = ref(false);

onMounted(() => {
  const isCookieAccepted = localStorage.getItem("cookieAccepted");
  if (!isCookieAccepted) {
    showModal.value = true;
  }
});

const acceptCookies = () => {
  localStorage.setItem("cookieAccepted", "true");
  showModal.value = false;
};
</script>

<template>
  <div v-if="showModal" class="cookie-modal">
    <div class="cookie-modal-content">
      <p>
        Этот сайт использует cookie для хранения данных. Продолжая использовать
        сайт, Вы даете согласие на работу с этими файлами
      </p>
      <button
        class="btn btn-ghost btn-lg bg-white w-52 h-12 text-xl"
        @click="acceptCookies"
      >
        <span class="text-[17px]"> Принять и закрыть </span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.cookie-modal {
  position: fixed;
  bottom: 5px;
  right: 5px;
  z-index: 1000;
}

/* Адаптация для мобильных устройств */
@media (max-width: 640px) {
  .cookie-modal {
    left: 50%;
    right: auto;
    transform: translateX(-50%);
    width: 90%; /* Ширина модалки на мобилках */
    max-width: 400px; /* Максимальная ширина */
  }
}

.cookie-modal-content {
  background-color: rgb(0, 0, 0);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  max-width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.cookie-modal-content p {
  margin-bottom: 20px;
  font-size: 16px;
  color: #ffffff;
}
</style>
