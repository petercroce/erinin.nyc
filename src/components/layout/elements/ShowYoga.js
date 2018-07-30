import React, { Component } from 'react';
import Radium from 'radium';
import Airtable from 'airtable';

import Title from '../elements/Title';
import Paragraph from '../elements/Paragraph';

import colors from '../../../styles/Colors.js';

var base = new Airtable({apiKey: `${process.env.REACT_APP_AIRTABLE_API_KEY}`}).base('appd70HPb5h5osxI4');

class ShowYoga extends Component {
  constructor(props) {
    super(props);
    this.state = {

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
    base("Erin's Yoga Options in NYC").select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 3,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {
            console.log('Retrieved', record.get('Name'));
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();

    }, function done(err) {
        if (err) {
          console.error(err);
          return;
        } else {
          buttonSubmit.innerHTML = "Submitted 👍";
        }
    });
    this.setState({
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
        <form onSubmit={this.handleSubmit} style={styles.showYoga}>


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
    backgroundColor: colors.primary,
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
  showYoga: {
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
    borderBottom: `1px solid ${colors.primary}`,
    margin: '1rem 0',
    width: 400,
    fontSize: '1.5em',
    '@media (max-width: 448px)': {
      width: '100%',
    }
  },
  button: {
    borderRadius: '3px',
    color: colors.textColor,
    border: `1px solid ${colors.textColor}`,
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
    backgroundColor: colors.primary,
  },
  buttonSubmitted: {
    backgroundColor: colors.primary,
  },
  checkbox: {
    marginLeft: 10,
  },
  label: {
    color: colors.textColor,
  }
}

export default Radium(ShowYoga);
