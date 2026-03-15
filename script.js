const app = Vue.createApp({
    created() {
    fetch('reviews.json').then(response => response.json()).then(json => {
      this.reviews = json
      console.log(this.reviews)
    })
  },
    data() {
        return {
            reviews: []
        }
    },
    methods: {

    },
    computed: {
        threeCardsPerSlide() {
            const three=[];
            for(let i=0; i<this.reviews.length; i+=3) {
               three.push(this.reviews.slice(i, i+3))
            }
            return three;
        }
    }
}).mount('#app')