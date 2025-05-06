<script lang="ts" setup>

</script>

<template>
  <div class="flex flex-row justify-between items-center border-b border-zinc-50/10 px-10 py-4">
    <NuxtLink
      to="/"
      class="text-emerald-700 flex items-center gap-2 justify-center hover:text-emerald-800 transition-colors"
    >
      <Icon name="lucide:boxes" size="40" />
      <span
        class="font-semibold text-2xl"
      >
        [ Test Tracker ]
      </span>
    </NuxtLink>
    <div>
      <ul class="flex gap-4">
        <Button class="text-zinc-300 transition-colors bg-transparent hover:bg-transparent border-1 border-emerald-700 hover:border-emerald-800 rounded-lg">
          Sign In
          <Icon name="tabler:login-2" size="20" />
        </Button>
      </ul>
    </div>
  </div>
</template>
