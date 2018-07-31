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

var changeText = Vue.component("change-text",{
  template: `
    <div>
      <p>Change the text:</p>
      <input v-model="myText.text" type="text" placeholder="Your text" />
      <div>Uppercased: {{ upperText }}</div>
    </div>
  `,
  data(){
    return {
      myText: {
        text: ""
      }
    }
  },
  computed: {
    upperText(){
      return this.myText.text.toUpperCase()
    }
  }
})

var app = new Vue ({
  el: "#app",
  components: {
    counter,
    changeText
  }
})
