import React, { Component } from 'react';
import { addNewPositions } from '../services/newPositionService';





class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    e.preventDefault();
    const newPos = {
      name: this.state.name,
      description: this.state.description
    };
    addNewPositions(newPos).then(res => {
      console.log('saved');
    });
  }



  render() {


    return (





      <div class="container">
        <div class="row " >
          <div class="col-4">

            <div class="card-header bg-primary text-white ">
              Add opportunities
           </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="form-group mt-3" >
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="type"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>

              <button type="submit" className="btn btn-lg btn-primary btn-block">
                Post Now
              </button>
            </form>
          </div>
          <div class="col-4">
            <div class="card-header bg-primary text-white ">
              Applicant Form Site
            </div>
            <a href="https://my.aidaform.com/form/13vclfj2xii/responses" target="_blank" rel="noopener noreferrer"> <button class="btn btn-primary btn-lg btn-block mt-2">Go</button></a>

          </div>


          <div class="col-4">
            <div class="card-header bg-primary text-white ">
              Contact Center
            </div>
            <a href="https://flex.twilio.com/agent-desktop/" target="_blank" rel="noopener noreferrer"> <button class="btn btn-primary btn-lg btn-block mt-2">Go</button></a>

          </div>



        </div>

      </div>

    );
  }
}

export default TodoForm;
