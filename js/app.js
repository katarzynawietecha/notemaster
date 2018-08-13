var notes = [
  {
    title: "Buy a gift for sister",
    text: "Black handbag with a zipper and very big chocolate with nuts and raisins.",
    date: "05/08/2018",
    background: "white"
  },
  {
    title: "take care of the hamster",
    text: "1. Clean the aquarium. 2. Prepare seeds.",
    date: "03/08/2018",
    background: "yellow"
  }
]


var app = new Vue ({
  el: "#app",
  data: {
    title: "Notemaster",
    notes: notes,
    note: {
      newTitle: "",
      newText: "",
      date: "",
      background: "white"
    }
  },
  methods: {
    createNote: function(){
      this.notes.push({
          title: this.note.newTitle,
          text: this.note.newText,
          date: new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear(),
          background: this.note.background
      })
    }
  }
})
