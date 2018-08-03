import React, { Component } from 'react';
import Radium from 'radium';
import Airtable from 'airtable';

// import Title from '../elements/Title';
import Paragraph from '../elements/Paragraph';

import styleVars from '../../../styles/styleVars.js';

var base = new Airtable({apiKey: `${process.env.REACT_APP_AIRTABLE_API_KEY}`}).base('appd70HPb5h5osxI4');

class NoteReader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    }
    // this.handleSubmit = this.handleSubmit.bind(this);
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
  componentDidMount = (event) => {
    // event.preventDefault();
    // var buttonSubmit = document.getElementById("buttonSubmitEmailForm");
    // buttonSubmit.innerHTML = "Submitting...";

    base("Notes").select({
        maxRecords: 12,
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
        }.bind(this));

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();

    }.bind(this), function done(err) {
        if (err) {
          console.error(err);
          return;
        }
    }); //.bind(this)
    // this.forceUpdate();
  }


  render() {
    return (
      <div style={styles.formWrapper}>
        {/* <Title>Complete Form</Title>
        <br/>
        <Paragraph>Do it, please.</Paragraph>
        <br/> */}
        <form>


          {/* <button type="submit"
            id="buttonSubmitEmailForm"
            style={this.state.submitted === false ? [styles.buttonUnsubmitted, styles.button, styles.inputAndButton] : [styles.buttonSubmitted, styles.button, styles.inputAndButton]}>
            Submit
          </button> */}

          <Paragraph>{this.state.notes[0]}</Paragraph>
          <Paragraph>{this.state.notes[1]}</Paragraph>
          <Paragraph>{this.state.notes[2]}</Paragraph>
          <Paragraph>{this.state.notes[3]}</Paragraph>
          <Paragraph>{this.state.notes[4]}</Paragraph>
          <Paragraph>{this.state.notes[5]}</Paragraph>
          <Paragraph>{this.state.notes[6]}</Paragraph>
          <Paragraph>{this.state.notes[7]}</Paragraph>
          <Paragraph>{this.state.notes[8]}</Paragraph>
          <Paragraph>{this.state.notes[9]}</Paragraph>
          <Paragraph>{this.state.notes[10]}</Paragraph>
          <Paragraph>{this.state.notes[11]}</Paragraph>
          <Paragraph>{this.state.notes[12]}</Paragraph>




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
  label: {
    color: styleVars.textColor,
  },
  checkbox: {
    marginLeft: 10,
  },
}

export default Radium(NoteReader);
