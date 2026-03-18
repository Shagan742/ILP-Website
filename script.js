const app = Vue.createApp({
    created() {
    fetch('reviews.json').then(response => response.json()).then(json => {
      this.reviews = json
      console.log(this.reviews)
    })

    fetch('questions.json').then(response => response.json()).then(json => {
      this.questions = json
      console.log(this.questions)
    })

    fetch('serviceQuestions.json').then(response => response.json()).then(json => {
      this.sQuestions = json
      console.log(this.sQuestions)
    })
  },
    data() {
        return {
            reviews: [],
            questions: [],
            sQuestions: []
        }
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