<template>

  <form @submit.prevent="addQuote">

    <label for="quote-input"
           class="block font-semibold">Quote</label>
    <textarea type="text"
              class="border w-full block max-w-sm"
              rows="4"
              name="quote-input"
              v-model.trim="quote"
              data-cy="new-quote"></textarea>

    <button type="submit"
            data-cy="add-quote"
            class="block bg-blue text-white px-3 py-2 rounded mt-3 mx-auto">Add Quote</button>
  </form>

</template>

<script>
export default {
  data() {
    return {
      quote: '',
    }
  },
  methods: {
    addQuote() {
      if (!this.quote) return
      this.$emit('new-quote', {
        id: new Date().getTime(),
        text: this.quote,
      })
      this.quote = ''
    },
  },
}
</script>

<style>
</style>
