<script lang="ts" setup>

</script>

<template>
  <div class="navbar bg-base-100 border-b-1 border-zinc-600 px-10">
    <div class="navbar-start">
      <NuxtLink to="/" class="text-emerald-600 flex items-center gap-2 justify-center hover:text-emerald-700 transition-colors font-semibold text-3xl font-[Oswald]">
        <Icon name="tabler:track" size="40" />
        Test Track
      </NuxtLink>
    </div>
    <div class="navbar-end">
      <AppThemeToggle />
      <AppSignInButton />
    </div>
  </div>
</template>
