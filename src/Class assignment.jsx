import { Component } from "react";

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleResubmit = this.handleResubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    let newTodoItem = { val: this.state.inputVal, key: crypto.randomUUID() };
    this.setState((state) => ({
      todos: state.todos.concat(newTodoItem),
      inputVal: "",
    }));
  }

  handleDelete(index) {
    this.state.todos.splice(index, 1);
    this.setState((state) => ({
      ...state,
      todos: state.todos,
    }));
  }

  handleEdit(e, index) {
    e.target.parentNode.outerHTML = `<form id="resubmit-form${index}">
        <input type="text" value=${this.state.todos[index].val} />
        <input type="submit" value="Resubmit" />
      </form>`;
    document
      .querySelector(`#resubmit-form${index}`)
      .addEventListener("submit", (e) => this.handleResubmit(e, index));
  }

  handleResubmit(e, index) {
    e.preventDefault();
    // replace the todo in the todos state
    let newTodoItem = {
      val: e.target.querySelector("input").value,
      key: this.state.todos[index].key,
    };
    this.state.todos.splice(index, 1, newTodoItem);
    this.setState((state) => ({
      ...state,
      todos: state.todos,
    }));

    // reinstate the display for the todo item
    e.target.outerHTML = `<p>
      ${this.state.todos[index].val}
      <button id="edit-btn${index}" >Edit</button>
    </p>`;
    // add event listener to the edit btn
    document
      .querySelector(`#edit-btn${index}`)
      .addEventListener("click", (e) => this.handleEdit(e, index));
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>
          All the tasks! <Count todoList={this.state.todos} />
        </h4>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={todo.key}>
              <p>
                {todo.val}{" "}
                <button onClick={(e) => this.handleEdit(e, index)}>Edit</button>
              </p>
              <button onClick={() => this.handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

class Count extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <>{this.props.todoList.length}</>;
  }
}

export default ClassInput;
