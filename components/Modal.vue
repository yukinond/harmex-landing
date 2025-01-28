<template>
  <div class="modal-overlay flex items-center " @click="$emit('close')">

    <div class="modal relative h-fit w-fit lg:max-w-[60%]">
      <button class="absolute lg:flex hidden top-2 -right-10 text-white" @click="$emit('close')">
        <Icon name="material-symbols:close-rounded" class="w-10 h-10" />
      </button>
      <slot />
    </div>

  </div>
</template>

<script>
</script>

<style scoped>

.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
  z-index: 110;
}

.modal {
  text-align: center;
  background-color: white;
  padding: 30px 0;
  border-radius: 20px;
}
.close {
  cursor: pointer;
}

</style>
