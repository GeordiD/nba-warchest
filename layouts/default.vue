<template>
  <div>
    <NavBar />
    <div class="main">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.main {
  max-width: 756px;
  margin-left: auto;
  margin-right: auto;
}
</style>
