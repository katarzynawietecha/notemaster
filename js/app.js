var counter = Vue.component("counter",{
  template: `
    <div>
      <div>Count: {{ this.count }}</div>
      <button @click="increment">Increment by {{ this.addNumber }}</button>
    </div>
  `,
  data(){
    return {
      count: 0
    }
  },
  props: {
    addNumber: {
      type: Number,
      default: 1
    }
  },
  methods: {
    increment(){
      this.count += this.addNumber
    }
  }
})


var app = new Vue ({
  el: "#app",
  components: {
    counter
  }
})
