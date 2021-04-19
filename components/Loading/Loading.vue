<template>
    <div class="loading-container">
        <div class="loading-circle"></div>
    </div>
</template>
<style scoped lang="scss">
.loading-container {
  display: flex;
  height: 70vh;
  justify-content: space-around;
  align-items: center;
}
.loading-circle {
  width: 10px;
  height: 10px;
  background-color: $blue-color;
  border-radius: 50%;
  animation: loading 1.2s infinite;
}
@keyframes loading {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
}
</style>
