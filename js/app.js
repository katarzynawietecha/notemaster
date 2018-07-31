var counter = Vue.component("counter",{
  template: `
    <div>
      <div>Count: {{ this.count }}</div>
      <button @click="increment">Increment by one</button>
    </div>
  `,
  data(){
    return {
      count: 0
    }
  },
  methods: {
    increment(){
      this.count++
    }
  }
})


var app = new Vue ({
  el: "#app",
  components: {
    counter
  }
})
