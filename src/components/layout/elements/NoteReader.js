import React, { Component } from 'react';
import Radium from 'radium';
import Airtable from 'airtable';

import Title from '../elements/Title';
import Paragraph from '../elements/Paragraph';

import styleVars from '../../../styles/styleVars.js';

var base = new Airtable({apiKey: `${process.env.REACT_APP_AIRTABLE_API_KEY}`}).base('appd70HPb5h5osxI4');

class NoteReader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {},
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
    var buttonSubmit = document.getElementById("buttonSubmitEmailForm");
    buttonSubmit.innerHTML = "Submitting...";

    base("Notes").select({
        maxRecords: 3,
        view: "Active Notes"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {

          let name = record.get('Name');
          let note = record.get('Note');
          // const { target: { name, note } } = record

          console.log(name, note);
          this.setState({
            notes: [...this.state.notes, `${note}`]
            // [name]: note
          });
          // this.setState((prevState, props) => ({
          //   // record.get('Note') keeps coming up undefined
          //   notes: [...prevState.notes, `${record.get('Note')}`]
          // }));
        }.bind(this));

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();

    }.bind(this), function done(err) {
        if (err) {
          console.error(err);
          return;
        } else {
          buttonSubmit.innerHTML = "Submitted 👍";
        }
    }.bind(this));
    console.log("state is: ",this.state.name)
    this.setState({
      submitted: true
    });
    console.log("state is: ",this.state)
  }

  render() {
    return (
      <div style={styles.formWrapper}>
        <Title>Complete Form</Title>
        <br/>
        <Paragraph>Do it, please.</Paragraph>
        <br/>
        <form onSubmit={this.handleSubmit} style={styles.form}>


          <button type="submit"
            id="buttonSubmitEmailForm"
            style={this.state.submitted === false ? [styles.buttonUnsubmitted, styles.button, styles.inputAndButton] : [styles.buttonSubmitted, styles.button, styles.inputAndButton]}>
            Submit
          </button>

          <Paragraph>{this.state.notes[0]}</Paragraph>
          <Paragraph>{this.state.notes[1]}</Paragraph>
          <Paragraph>{this.state.notes[2]}</Paragraph>
          <Paragraph>{this.state.notes[3]}</Paragraph>



        </form>
      </div>
    );
  };
}

// https://reactjs.org/docs/lists-and-keys.html
// Trying to get notes to display as list listItems

// this.state.notes.map((note) => {
//   <p key={note.toString()}>
//     {note}
//   </p>
// })

// function ListItem(props) {
//   // Correct! There is no need to specify the key here:
//   return <li>{props.value}</li>;
// }
//
// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = this.state.notes.map((number) =>
//     // Correct! Key should be specified inside the array.
//     <ListItem key={number.toString()}
//               value={number} />
//   );
//   return (
//     <ul>
//       {listItems}
//     </ul>
//   );
// }



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
  form: {
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
    border: 'none',
    margin: '1rem 0',
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

export default Radium(NoteReader);
