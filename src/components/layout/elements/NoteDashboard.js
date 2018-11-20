import React, { Component } from 'react';
import Radium from 'radium';
import Airtable from 'airtable';

import styleVars from '../../../styles/styleVars.js';

var base = new Airtable({apiKey: `${process.env.REACT_APP_AIRTABLE_API_KEY}`}).base('appd70HPb5h5osxI4');

// Lift up state into this component
// onNoteSubmit
// onNoteUpdate


class NoteDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      note: '',
      notes: [],
      submitted: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    var buttonSubmit = document.getElementById("buttonSubmitForm");
    buttonSubmit.innerHTML = "Submitting...";
    base('Notes').create({
      "Name": `${this.state.name}`,
      "Note": `${this.state.note}`,
    }, {typecast: true}, function(err, record) {
        if (err) {
          console.error(err);
          alert("There was an error. Please refresh the page and try again. If this keeps happening, ask Peter what the hell is going on.");
          return;
        } else {
          buttonSubmit.innerHTML = "Submit Another";
        }
    });
    this.setState({
      name: '',
      note: '',
      submitted: true
    });
  };
  render() {
    return (
      <div style={styles.formWrapper}>
        <form onSubmit={this.handleSubmit} style={styles.form}>

          {/* <div className="inputGroup">
            <input type="text"
              style={[styles.input, styles.inputAndButton]}
              value={this.state.name}
              onChange={(event) => this.setState({ name: event.target.value })}
              required/>
            <label htmlFor="Note name" style={styles.label}>
              Note name
            </label>
          </div> */}

          <div className="inputGroup">
            <textarea type="text" rows="4"
              style={[styles.input, styles.inputAndButton]}
              value={this.state.note}
              onChange={(event) => this.setState({ note: event.target.value })}
              required >
            </textarea>
            <label htmlFor="Note"
              style={styles.label}>
              Note
            </label>
          </div>

          <button type="submit"
            id="buttonSubmitForm"
            style={this.state.submitted === false ? [styles.button, styles.inputAndButton] : [styles.button, styles.inputAndButton]}>
            Submit
          </button>
        </form>
      </div>
    );
  };
}


const styles = {
  formWrapper: {
    backgroundColor: styleVars.backgroundColor,
    width: 400,
    '@media (min-width: 650px)': { // not large mobile
      display: 'flex',
      flexDirection: 'column',
    },
    '@media (max-width: 448px)': { // large mobile
      width: '100%',
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',

    '@media (max-width: 992px)': {
      margin: 0,
    }
  },
  inputAndButton: {
    fontSize: '1.5em',
    borderRadius: 0,
    padding: '0.5rem 0.75rem',
    '@media (max-width: 992px)': {
      padding: '.5rem .57rem',
    }
  },
  input: {
    marginTop: '1rem',
    border: `3px solid ${styleVars.primary}`,
    width: 400,
    fontSize: '1.5em',
    resize: 'none',
    '@media (max-width: 448px)': {
      width: '100%',
    }
  },
  button: {
    backgroundColor: 'transparent',
    color: styleVars.textColor,
    border: `3px solid ${styleVars.textColor}`,
    textAlign: 'center',
    width: 400,
    margin: '1rem 0',
    '@media (max-width: 992px)': {
      marginLeft: 0,
    },
    '@media (max-width: 448px)': {
      width: '100%',
    },
  },
  checkbox: {
    marginLeft: 10,
  },
  label: {
    color: styleVars.textColor,
  }
}

export default Radium(NoteDashboard);
