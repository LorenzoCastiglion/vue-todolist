



const {createApp} = Vue;

let id = 0
const app = createApp({
    data() {
      return {
        
        newTodo: '',
        todos: [
          { id: id++, text: 'Learn HTML', done: false },
          { id: id++, text: 'Learn JavaScript', done: false },
          { id: id++, text: 'Learn Vue', done: false }
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
      }
    }
  }).mount('#app')