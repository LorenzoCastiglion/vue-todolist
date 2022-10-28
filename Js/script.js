// Rifare l'esercizio della to do list argomento dell to-do list a piacere :partying_face:.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)



const {createApp} = Vue;
let done;
let id = 0;
const app = createApp({
    data() {
      return {
        
        newTodo: '',
        todos: [
          { id: id++, text: 'Imparare HTML', done: false },
          { id: id++, text: 'Imparare JavaScript', done: false },
          { id: id++, text: 'Imparare Vue', done: false }
        ]
      }
    },
    methods: {
      addTodo() {
        this.todos.push({ id: id++, text: this.newTodo, done: false })
        this.newTodo = ''
      },
      removeTodo(todo) {
        this.todos = this.todos.filter((btn) => btn !== todo)
      },

      toggle(index){
        this.todos[index].done = !this.todos[index].done;
      }

    }
  }).mount('#app')