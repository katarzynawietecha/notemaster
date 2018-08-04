var notes = [
  {
    title: "Buy a gift for sister",
    text: "Black handbag with a zipper and very big chocolate with nuts and raisins."
  },
  {
    title: "take care of the hamster",
    text: "1. Clean the aquarium. 2. Prepare seeds."
  }
]


var app = new Vue ({
  el: "#app",
  data: {
    title: "Notemaster",
    notes: notes,
    note: {
      newTitle: "",
      newText: ""
    }
  },
  methods: {
    createNote: function(){
      this.notes.push({
          newTitle: this.note.newTitle,
          newText: this.note.newText
      })
    }
  }
})

// var counter = Vue.component("counter",{
//   template: `
//     <div>
//       <div>Count: {{ this.count }}</div>
//       <button @click="increment">Increment by {{ this.addNumber }}</button>
//     </div>
//   `,
//   data(){
//     return {
//       count: 0
//     }
//   },
//   props: {
//     addNumber: {
//       type: Number,
//       default: 1
//     }
//   },
//   methods: {
//     increment(){
//       this.count += this.addNumber
//     }
//   }
// })
//
// var changeText = Vue.component("change-text",{
//   template: `
//     <div>
//       <p>Change the text:</p>
//       <input v-model="myText.text" type="text" placeholder="Your text" />
//       <div>Uppercased: {{ upperText }}</div>
//     </div>
//   `,
//   data(){
//     return {
//       myText: {
//         text: ""
//       }
//     }
//   },
//   computed: {
//     upperText(){
//       return this.myText.text.toUpperCase()
//     }
//   }
// })
//
// var app = new Vue ({
//   el: "#app",
//   components: {
//     counter,
//     changeText
//   }
// })
