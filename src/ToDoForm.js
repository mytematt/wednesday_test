import React from 'react'


class ToDoForm extends React.Component {

  state = { name: "" }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addItem(this.state.name)
    this.setState({ name: ""})
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value})
  }

  render() {
      return(
        <form
          onSubmit = {this.handleSubmit}
        >
          <input  
            required 
            value = {this.state.name}
            onChange={this.handleChange}
            name="name"
            />
        </form>
      )
    }

}

export default ToDoForm