<script lang="ts" setup>

</script>

<template>
  <div class="flex flex-col min-h-screen bg-zinc-900 text-zinc-400">
    <header>
      <AppNavBar />
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>
