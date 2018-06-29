import './NYSEStyles.scss';
import '../Messages.js';

class NYSELog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moneyInvested: new Number(0.00).toPrecision(3),
      stockName: "nyse-one",
      dateInvested: new Date().toLocaleDateString("en-US"),
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name] : event.target.value });
  }
  
  handleSubmit(event) {
    alert('USD Invested =  ' + this.state.moneyInvested + '  Nasdaq Stock =  ' + this.state.stockName + '  Date =  ' + this.state.dateInvested);
    event.preventDefault();
  }

  render() {
    return (
    
    <div className='nyseLogContainer'>
      
      <h1 className='nyseLogHeading'>NYSE Log</h1>
      
      <form onSubmit={this.handleSubmit}>  
        <h2 className='nyseLabelStyle'>USD Invested</h2>
        
        <br/>
        
        <input name="moneyInvested" autoComplete="off" value={this.state.moneyInvested} onChange={this.handleChange} className='nyseFormStyle' placeholder="Enter USD Invested" required />    
        
        <h2 className='nyseLabelStyle'>NYSE Stock</h2>
        
        <br/>

        <select name="stockName" value={this.state.stockName} onChange={this.handleChange} className='nyseFormStyle'>
          <option value="nyse-one">NYSE Stock One</option>
          <option value="nyse-two">NYSE Stock Two</option>
          <option value="nyse-three">NYSE Stock Three</option>
          <option value="nyse-four">NYSE Stock Four</option>
        </select>

        <h2 className='nyseLabelStyle'>Date</h2>

        <br/>

        <input name="dateInvested" autoComplete="off" value={this.state.dateInvested} onChange={this.handleChange} className='nyseFormStyle' placeholder="Enter Date Invested" required />                 
        
        <br/>

        <input name="submit" type="submit" value="Submit" className='nyseSubmitStyle'/>
      </form>
      
    </div>

    );
  }
}

export default NYSELog