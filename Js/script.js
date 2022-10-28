



const {createApp} = Vue;

let id = 0
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
        this.todos = this.todos.filter((t) => t !== todo)
      },

      toggle(index){
        this.todos[index].done = !this.todos[index].done;
      }

    }
  }).mount('#app')