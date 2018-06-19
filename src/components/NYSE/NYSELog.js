import './NYSEStyles.scss';

class NYSELog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moneyInvested: null,
      stockName: "nyse-one",
      dateInvested: new Date(),
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name] : event.target.value });
  }
  
  handleSubmit(event) {
    alert('USD Invested =  ' + this.state.moneyInvested + '  NYSE Stock =  ' + this.state.stockName + '  Date =  ' + this.state.dateInvested);
    event.preventDefault();
  }

  render() {
    return (
    
    <div className='logContainer'>
      <h1>NYSELog</h1>  
      <form onSubmit={this.handleSubmit}>

      <br/>

        <label className='labelStyle'>
          USD Invested
          <input name="moneyInvested" type="text" value={this.state.moneyInvested} onChange={this.handleChange} className='formStyle' />
        </label>

        <br/>
        
        <label className='labelStyle'>
          NYSE Stock
          <select name="stockName" value={this.state.stockName} onChange={this.handleChange} className='formStyle'>
            <option value="nyse-one">NYSE Stock One</option>
            <option value="nyse-two">NYSE Stock Two</option>
            <option value="nyse-three">NYSE Stock Three</option>
            <option value="nyse-four">NYSE Stock Four</option>
          </select>
        </label>

        <br/>

        <label className='labelStyle'>
          Date
          <input name="dateInvested" type="date" value={this.state.dateInvested} onChange={this.handleChange} className='formStyle' />
        </label>      

        <br/>       

        <input name="submit" type="submit" value="Submit" className='submitStyle' />
        
      </form>
    </div>

    );
  }
}

export default NYSELog