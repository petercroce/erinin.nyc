import React, { Component } from 'react';
import Radium from 'radium';
import Airtable from 'airtable';

import Title from '../elements/Title';
import Paragraph from '../elements/Paragraph';

import styleVars from '../../../styles/styleVars.js';

var base = new Airtable({apiKey: `${process.env.REACT_APP_AIRTABLE_API_KEY}`}).base('appd70HPb5h5osxI4');

class EmailSignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
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
    var buttonSubmit = document.getElementById("buttonSubmitEmailForm");
    buttonSubmit.innerHTML = "Submitting...";
    base('People Who Requested a Case Packet').create({
      "Name": `${this.state.name}`,
      "Email": `${this.state.email}`,
    }, {typecast: true}, function(err, record) {
        if (err) {
          console.error(err);
          alert("There was an error submitting your contact information. Please refresh the page and try again. If this keeps happening, email hello@umbn.co for help.");
          return;
        } else {
          buttonSubmit.innerHTML = "Submitted 👍";
        }
        // console.log(record.getId());
    });
    this.setState({
      name: '',
      email: '',
      submitted: true
    });
  };
  render() {
    return (
      <div style={styles.formWrapper}>
        <Title>Complete Form</Title>
        <br/>
        <Paragraph>Do it, please.</Paragraph>
        <br/>
        <form onSubmit={this.handleSubmit} style={styles.emailSignupForm}>
          <div className="inputGroup">
            <input type="text"
              style={[styles.input, styles.inputAndButton]}
              value={this.state.name}
              onChange={(event) => this.setState({ name: event.target.value })}
              required/>
            <label htmlFor="Full name" style={styles.label}>
              Full name
            </label>
          </div>
          <div className="inputGroup">
            <input type="text"
              style={[styles.input, styles.inputAndButton]}
              value={this.state.email}
              onChange={(event) => this.setState({ email: event.target.value })}
              required/>
            <label htmlFor="Email"
              style={styles.label}>
              Email
            </label>
          </div>

          <button type="submit"
            id="buttonSubmitEmailForm"
            style={this.state.submitted === false ? [styles.buttonUnsubmitted, styles.button, styles.inputAndButton] : [styles.buttonSubmitted, styles.button, styles.inputAndButton]}>
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
    padding: 30,

    '@media (min-width: 650px)': { // not large mobile
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    '@media (max-width: 649px)': { // large mobile
      width: '100%',
      padding: 15,
    },
  },
  emailSignupForm: {
    margin: '3rem 0',
    display: 'flex',
    flexDirection: 'column',

    '@media (max-width: 992px)': {
      margin: 0,
    }
  },
  inputAndButton: {
    fontSize: '1.5em',
    padding: '0.5rem 0.75rem',
    '@media (max-width: 992px)': {
      padding: '.5rem .57rem',
    }
  },
  input: {
    borderRadius: 0,
    border: 'none',
    borderBottom: `1px solid ${styleVars.primary}`,
    margin: '1rem 0',
    width: 400,
    fontSize: '1.5em',
    '@media (max-width: 448px)': {
      width: '100%',
    }
  },
  button: {
    borderRadius: '3px',
    color: styleVars.textColor,
    border: `1px solid ${styleVars.textColor}`,
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
  buttonUnsubmitted: {
    backgroundColor: styleVars.primary,
  },
  buttonSubmitted: {
    backgroundColor: styleVars.primary,
  },
  checkbox: {
    marginLeft: 10,
  },
  label: {
    color: styleVars.textColor,
  }
}

export default Radium(EmailSignupForm);
