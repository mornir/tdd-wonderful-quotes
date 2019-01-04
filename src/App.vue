<template>
  <div id="app"
       class="container mx-auto px-4">
    <QuoteProgress :quotesAdded="quotes.length" />
    <NewQuote @new-quote="addQuoteToList"
              class="mb-3" />
    <QuotesGrid :quotes="quotes"
                @delete-quote="deleteQuote" />
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
      this.quotes.push(quote)
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
