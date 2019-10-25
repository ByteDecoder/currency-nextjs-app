class Prices extends React.Component {
  state = {
    currency: "USD",
    currencyList: ["USD", "GBP", "EUR"]
  };

  renderList = () => {
    const currencyData = this.props.bpi[this.state.currency];
    return (
      <ul className="list-group">
        <li className="list-group-item">
          Bitcoin rate for {currencyData.description} :
          <span className="badge badge-primary">{currencyData.code}</span>
          <strong>{currencyData.rate}</strong>
        </li>
      </ul>
    );
  };

  render() {
    return (
      <div>
        {this.renderList("USD")}
        <select
          className="form-control"
          onChange={e => this.setState({ currency: e.target.value })}
        >
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    );
  }
}

export default Prices;
