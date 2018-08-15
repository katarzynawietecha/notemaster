var notes = [
  {
    title: "Buy a gift for sister",
    text: "Black handbag with a zipper and very big chocolate with nuts and raisins.",
    date: "05/08/2018",
    background: "ghostwhite",
    importance: "standard"
  },
  {
    title: "take care of the hamster",
    text: "1. Clean the aquarium. 2. Prepare seeds.",
    date: "03/08/2018",
    background: "plum",
    importance: "standard"
  },
  {
    title: "Smart woman finish rich",
    text: 'Borrow "Smart woman finish rich" book from Magda',
    date: "10/08/2018",
    background: "lightskyblue",
    importance: "standard"
  },
  {
    title: "Laundry",
    text: "Do the laundry (white and color)",
    date: "12/08/2018",
    background: "lightskyblue",
    importance: "important"
  },
  {
    title: "Pizza with parents!",
    text: "Saturday! 18:00",
    date: "14/08/2018",
    background: "orange",
    importance: "important"
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
      background: "ghostwhite",
      importance: "standard"
    },
    radioColor: "all",
    noteImportance: "all",
    error: false
  },
  methods: {
    createNote: function(){
      if(!this.note.newTitle){ //only title is required
        this.error = true;
      }else{
        this.notes.push({
            title: this.note.newTitle,
            text: this.note.newText,
            date: new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear(),
            background: this.note.background,
            importance: this.note.importance
        })
        //clearing input fields
        this.note.newTitle = "";
        this.note.newText = "";
        this.note.background = "ghostwhite";
        this.note.importance = "standard";
        this.error = false;
      }
    }
  }
})
