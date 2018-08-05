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
      notes: [],
      submitted: false
    }
  }
  componentDidMount = (event) => {

    base("Notes").select({
        maxRecords: 20,
        view: "Active Notes"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {

          let note = record.get('Note');

          this.setState({
            notes: [...this.state.notes, `${note}`]
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
    }.bind(this));
    this.setState({
      submitted: true
    });
  }

  render() {
    const notes = this.state.notes.reduce((result, note) => {
      if (note !== 'undefined') {
        result.push(<Paragraph>{note}</Paragraph>)
      }
      return result
    }, []);
    return (
      <div style={styles.formWrapper}>

        <Title>Notes</Title>

        {notes}

      </div>
    );
  };
}

const styles = {
  formWrapper: {
  }
}

export default Radium(NoteReader);
