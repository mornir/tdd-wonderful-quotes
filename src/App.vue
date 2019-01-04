<template>
  <div id="app"
       class="container mx-auto px-4 mt-8">
    <QuoteProgress :quotesAdded="quotes.length" />
    <NewQuote @new-quote="addQuoteToList"
              class="mb-3" />
    <QuotesGrid :quotes="quotes"
                @delete-quote="deleteQuote" />

    <div data-cy="alert-overload"
         v-if="quotes.length >= 10"
         class="mt-8 border border-yellow-dark bg-yellow-lighter px-2 py-3 max-w-lg mx-auto font-semibold text-center">You've reached the maximum number of quotes. Delete quotes by clicking on them.</div>
  </div>
</template>

<script>
import QuotesGrid from '@/components/QuotesGrid'
import NewQuote from '@/components/NewQuote'
import QuoteProgress from '@/components/QuoteProgress'

export default {
  name: 'app',
  data() {
    return {
      quotes: [
        {
          id: 1,
          text: 'Just a quote to start with something!',
        },
      ],
    }
  },
  methods: {
    addQuoteToList(quote) {
      if (this.quotes.length < 10) {
        this.quotes.push(quote)
      } else {
        console.log('OVERLOAD')
      }
    },
    deleteQuote(id) {
      this.quotes = this.quotes.filter(quote => quote.id !== id)
    },
  },
  components: {
    QuotesGrid,
    NewQuote,
    QuoteProgress,
  },
}
</script>

<style>
@import './assets/css/tailwind.css';
</style>
