

function Input(props) {
  return(
    // inputValue, inputLabel
    <div className="inputGroup">
      <input type="text"
        style={[styles.input, styles.inputAndButton]}
        value={this.state.name}
        onChange={(event) => this.setState({ `${inputValue}`: event.target.value })}
        required/>
      <label htmlFor={inputValue} style={styles.label}>
        {inputValue}
      </label>
    </div>
  )
}
