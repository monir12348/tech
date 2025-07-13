<script setup>
</script>

<template>
  <div class="overflow-hidden whitespace-nowrap bg-[var(--color-primary-400)] py-6">
    <div class="animate-marquee inline-block min-w-full">
      <span class="text-[32px] font-medium text-[var(--color-neutral-0)] mr-16">
        Thank You For Visiting The Site! ✦
      </span>
      <span class="text-[32px] font-medium text-[var(--color-neutral-0)] mr-16">
        Thank You For Visiting The Site! ✦
      </span>
      <span class="text-[32px] font-medium text-[var(--color-neutral-0)] mr-16">
        Thank You For Visiting The Site! ✦
      </span>
      <span class="text-[32px] font-medium text-[var(--color-neutral-0)] mr-16">
        Thank You For Visiting The Site! ✦
      </span>
      <span class="text-[32px] font-medium text-[var(--color-neutral-0)] mr-16">
        Thank You For Visiting The Site! ✦
      </span>
      <span class="text-[32px] font-medium text-[var(--color-neutral-0)] mr-16">
        Thank You For Visiting The Site! ✦
      </span>
      <span class="text-[32px] font-medium text-[var(--color-neutral-0)] mr-16">
        Thank You For Visiting The Site! ✦
      </span>
      <span class="text-[32px] font-medium text-[var(--color-neutral-0)] mr-16">
        Thank You For Visiting The Site! ✦
      </span>
    </div>
  </div>

</template>

<style scoped>
@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  display: inline-flex;
  animation: marquee 17s linear infinite;
}
</style>
