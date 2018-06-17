import './NasdaqCalculator.scss';

class NasdaqCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moneyInvested: null,
      stockName: "nas-one",
      timeName: "one-day"
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
    
    <div className='formContainer'>
      <h1>NasdaqCalculator</h1>  
      <form onSubmit={this.handleSubmit}>
        
        <label className='labelStyle'>
          USD Invested
          <input name="moneyInvested" type="text" value={this.state.moneyInvested} onChange={this.handleChange} className='formStyle' />
        </label>

        <br/>

        <label className='labelStyle'>
          Nasdaq Stock
          <select name="stockName" value={this.state.stockName} onChange={this.handleChange} className='formStyle'>
            <option value="nas-one">Nasdaq Stock One</option>
            <option value="nas-two">Nasdaq Stock Two</option>
            <option value="nas-three">Nasdaq Stock Three</option>
            <option value="nas-four">Nasdaq Stock Four</option>
          </select>
        </label>

        <br/>

        <label className='labelStyle'>
          Time Invested
          <select name="timeName" value={this.state.timeName} onChange={this.handleChange} className='formStyle'>
            <option value="one-day">One Day</option>
            <option value="one-week">One Week</option>
            <option value="one-month">One Month</option>
            <option value="one-year">One Year</option>
          </select>
        </label>

        <br/>

        <input name="submit" type="submit" value="Submit" className='submitStyle' />
        
      </form>
    </div>

    );
  }
}

export default NasdaqCalculator