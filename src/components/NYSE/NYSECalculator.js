import './NYSEStyles.scss';

class NYSECalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moneyInvested: null,
      stockName: "nyse-one",
      timeName: "one-day"
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
        
        <label className='nyseLabelStyle'>
          USD Invested
          <input name="moneyInvested" type="text" value={this.state.moneyInvested} onChange={this.handleChange} className='nyseFormStyle' />
        </label>

        <br/>

        <label className='nyseLabelStyle'>
          NYSE Stock
          <select name="stockName" value={this.state.stockName} onChange={this.handleChange} className='nyseFormStyle'>
            <option value="nyse-one">NYSE Stock One</option>
            <option value="nyse-two">NYSE Stock Two</option>
            <option value="nyse-three">NYSE Stock Three</option>
            <option value="nyse-four">NYSE Stock Four</option>
          </select>
        </label>

        <br/>

        <label className='nyseLabelStyle'>
          Time Invested
          <select name="timeName" value={this.state.timeName} onChange={this.handleChange} className='nyseFormStyle'>
            <option value="one-day">One Day</option>
            <option value="one-week">One Week</option>
            <option value="one-month">One Month</option>
            <option value="one-year">One Year</option>
          </select>
        </label>

        <br/>

        <input name="submit" type="submit" value="Submit" className='nyseSubmitStyle' />
        
      </form>
    </div>

    );
  }
}

export default NYSECalculator