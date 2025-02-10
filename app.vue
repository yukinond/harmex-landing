<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtNotifications
      position="top right"
      :max="2"
      :close-on-click="true"
      :pause-on-hover="true"
      :speed="500"
    />
    <NuxtLayout>
      <NuxtPage />
      <CookieModal />
    </NuxtLayout>
  </div>
</template>

<style></style>
