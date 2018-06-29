import './NYSEStyles.scss';

class NYSECalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moneyInvested: new Number(0.00).toPrecision(3),
      stockName: "nyse-one",
      timeName: "one-day",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name] : event.target.value });
  }
  
  handleSubmit(event) {
    alert('USD Invested =  ' + this.state.moneyInvested + '  NYSE Stock =  ' + this.state.stockName + '  Time Invested =  ' + this.state.timeName);
    event.preventDefault();
  }

  render() {
    return (
    
    <div className='nyseCalculatorContainer'>

      <h1 className='nyseCalculatorHeading'>NYSE Calculator</h1>

      <form onSubmit={this.handleSubmit}>
        <h2 className='nyseLabelStyle'>USD Invested</h2>

        <br/>
          
        <input name="moneyInvested" autoComplete="off" value={this.state.moneyInvested} onChange={this.handleChange} className='nyseFormStyle' placeholder="Enter USD Invested" required/>

        <h2 className='nyseLabelStyle'>NYSE Stock</h2>

        <br/>
          
        <select name="stockName" value={this.state.stockName} onChange={this.handleChange} className='nyseFormStyle'>
          <option value="nyse-one">NYSE Stock One</option>
          <option value="nyse-two">NYSE Stock Two</option>
          <option value="nyse-three">NYSE Stock Three</option>
          <option value="nyse-four">NYSE Stock Four</option>
        </select>

        <h2 className='nyseLabelStyle'>Time Invested</h2>

        <br/>

        <select name="timeName" value={this.state.timeName} onChange={this.handleChange} className='nyseFormStyle'>
          <option value="one-day">One Day</option>
          <option value="one-week">One Week</option>
          <option value="one-month">One Month</option>
          <option value="one-year">One Year</option>
        </select>

        <input name="submit" type="submit" value="Submit" className='nyseSubmitStyle' />  
      </form>

    </div>

    );
  }
}

export default NYSECalculator