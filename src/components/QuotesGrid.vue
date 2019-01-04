<template>
  <ul data-cy="quotes-list"
      class="list-reset quotes-grid flex flex-wrap justify-center">
    <li v-for="quote in quotes"
        :key="quote.id">
      <AppQuote @click.native="deleteQuote(quote.id)">{{ quote.text }}</AppQuote>

    </li>
  </ul>

</template>

<script>
import Quote from '@/components/Quote'
export default {
  props: {
    quotes: {
      type: Array,
      required: true,
    },
  },
  methods: {
    deleteQuote(id) {
      this.$emit('delete-quote', id)
    },
  },
  components: {
    AppQuote: Quote,
  },
}
</script>

<style>
</style>
