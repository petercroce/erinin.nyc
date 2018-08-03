import React from 'react';
import Radium from 'radium';

import styleVars from '../../../styles/styleVars.js';

function Input(props) {
  return(
    // inputValue, inputLabel
    // trying to get this to work using something like <Input inputValue={this.state.name} inputLabel="Name"></Input>

    <div className="inputGroup">
      <input type="text"
        style={[styles.input, styles.inputAndButton]}
        value={props.inputValue}
        onChange={(event) => this.setState({ [props.inputLabel.toLowerCase()]: event })}
        required/>
      <label htmlFor={props.inputLabel} style={styles.label}>
        {props.inputLabel}
      </label>
    </div>
  )
}


const styles = {
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
}

export default Radium(Input);
