import './NasdaqStyles.scss';

class NasdaqLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moneyInvested: null,
      stockName: "nas-one",
      dateInvested: new Date(),
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
    
    <div className='nasLogContainer'>
      <h1 className='nasLogHeading'>Nasdaq Log</h1> 
      <form onSubmit={this.handleSubmit}>

        <h2 className='nasLabelStyle'>USD Invested</h2>
          
        <input name="moneyInvested" type="text" value={this.state.moneyInvested} onChange={this.handleChange} className='nasFormStyle' />

        <h2 className='nasLabelStyle'>Nasdaq Stock</h2>
        
        <select name="stockName" value={this.state.stockName} onChange={this.handleChange} className='nasFormStyle'>
          <option value="nas-one">Nasdaq Stock One</option>
          <option value="nas-two">Nasdaq Stock Two</option>
          <option value="nas-three">Nasdaq Stock Three</option>
          <option value="nas-four">Nasdaq Stock Four</option>
        </select>

        <h2 className='nasLabelStyle'>Date</h2>
          
        <input name="dateInvested" type="date" value={this.state.dateInvested} onChange={this.handleChange} className='nasFormStyle' />      

        <input name="submit" type="submit" value="Submit" className='nasSubmitStyle' />
        
      </form>
    </div>

    );
  }
}

export default NasdaqLog