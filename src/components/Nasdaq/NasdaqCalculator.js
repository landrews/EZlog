import './NasdaqStyles.scss';

class NasdaqCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moneyInvested: new Number(0.00).toPrecision(3),
      stockName: "nas-one",
      timeName: "one-day",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name] : event.target.value });
  }
  
  handleSubmit(event) {
    alert('USD Invested =  ' + this.state.moneyInvested + '  Nasdaq Stock =  ' + this.state.stockName + '  Time Invested =  ' + this.state.timeName);
    event.preventDefault();
  }

  render() {
    return (
    
    <div className='nasCalculatorContainer'>

      <h1 className='nasCalculatorHeading'>Nasdaq Calculator</h1>

      <form onSubmit={this.handleSubmit}>
        <h2 className='nasLabelStyle'>USD Invested</h2>

        <br/>
        
        <input name="moneyInvested" autoComplete="off" value={this.state.moneyInvested} onChange={this.handleChange} className='nasFormStyle' placeholder="Enter USD Invested" required  />
      
        <h2 className='nasLabelStyle'>Nasdaq Stock</h2>

        <br/>
      
        <select name="stockName" type="hidden" value={this.state.stockName} onChange={this.handleChange} className='nasFormStyle'>
          <option value="nas-one">Nasdaq Stock One</option>
          <option value="nas-two">Nasdaq Stock Two</option>
          <option value="nas-three">Nasdaq Stock Three</option>
          <option value="nas-four">Nasdaq Stock Four</option>
        </select>  

        <h2 className='nasLabelStyle'>Time Invested</h2>

        <br/>

        <select name="timeName" type="hidden" value={this.state.timeName} onChange={this.handleChange} className='nasFormStyle'>
          <option value="one-day">One Day</option>
          <option value="one-week">One Week</option>
          <option value="one-month">One Month</option>
          <option value="one-year">One Year</option>
        </select>
       
        <input name="submit" type="submit" value="Submit" className='nasSubmitStyle' />
      </form>
      
    </div>

    );
  }
}

export default NasdaqCalculator