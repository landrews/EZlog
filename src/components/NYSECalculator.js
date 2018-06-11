const formContainer = {
  backgroundColor: "#f2f2f2",
  width: "25%", 
}

const formStyle = {
  width: "100%",

}

const labelStyle = {
  
}

const submitStyle = {

}

class NYSECalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moneyInvested: null,
      stockName: "stock1",
      timeName: "day"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name] : event.target.value });
  }
  
  handleSubmit(event) {
    alert('USD Invested: ' + this.state.moneyInvested + ' Stock Name: ' + this.state.stockName + ' Time Invested: ' + this.state.timeName);
    event.preventDefault();
  }

  render() {
    return (
    
    <div style={formContainer}>  
      <form onSubmit={this.handleSubmit}>
        
        <label style={labelStyle}>
          USD Invested:
          <input name="moneyInvested" type="number" value={this.state.moneyInvested} onChange={this.handleChange} style={formStyle} />
        </label>

        <br/>

        <label>
          NYSE Stock:
          <select name="stockName" value={this.state.stockName} onChange={this.handleChange} style={formStyle}>
            <option value="stock1">Stock1</option>
            <option value="stock2">Stock2</option>
            <option value="stock3">Stock3</option>
            <option value="stock4">Stock4</option>
          </select>
        </label>

        <br/>

        <label>
          Time Invested:
          <select name="timeName" value={this.state.timeName} onChange={this.handleChange} style={formStyle}>
            <option value="day">One Day</option>
            <option value="week">One Week</option>
            <option value="month">One Month</option>
            <option value="year">One Year</option>
          </select>
        </label>

        <br/>

        <input name="submit" type="submit" value="Submit" style={submitStyle} />
        
      </form>
    </div>

    );
  }
}

export default NYSECalculator










