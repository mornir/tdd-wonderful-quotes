<template>
  <div>
    <p class="font-semibold max-w-lg mx-auto text-xl mb-2">Quotes Added <span class="text-grey-darker text-sm ml-2"> <span class="text-xl">{{quotesAdded}}</span> / 10</span></p>
    <progress :value="quotesAdded"
              class="w-full max-w-lg mx-auto block"
              max="10"></progress>
  </div>
</template>

<script>
export default {
  props: {
    quotesAdded: {
      type: Number,
      default: 1,
      required: true,
    },
  },
}
</script>

<style scoped>
progress {
  /* Reset the default appearance */
  -webkit-appearance: none;
  appearance: none;

  height: 20px;
}

progress[value]::-webkit-progress-bar {
  background-color: #eee;
  border-radius: 2px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
}

progress[value]::-webkit-progress-value {
  background-image: linear-gradient(to left, #2779bd, #4dc0b5);

  border-radius: 2px;
}
</style>
