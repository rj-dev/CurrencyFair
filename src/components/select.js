/*jshint esversion: 6 */
import React , {Component}from 'react';
import flag1 from '../assets/europe_flag.png';
import flag2 from '../assets/united_kingdom_uk_flag.png';

export default class Select extends Component {

	constructor(){
		super();
		this.state = { showList: 'hide' };
		this.showHideYouSendSelect = this.showHideYouSendSelect.bind(this);
		this.handleListClick = this.handleListClick.bind(this);
		this.getCurrencyList = this.getCurrencyList.bind(this);
	}
	handleSelectChange(e){
    this.setState({ ownerAgeRangeSelection: e.target.value });
	}
	handleListClick(e){
		let flagImg = e.currentTarget.getElementsByTagName('img')[0].getAttribute("src");
		let currency = e.currentTarget.getElementsByTagName('label')[0].innerHTML;
		console.log(flagImg);
		if(this.props.id === 'youSendCurrencyList'){
			document.getElementById('imgFlatYouSend').setAttribute("src", flagImg);
			document.getElementById('lblCurrencyYouSend').innerHTML = currency;
		}
		else{
			document.getElementById('imgFlatReceiverGet').setAttribute("src", flagImg);
			document.getElementById('lblCurrencyReceiverGet').innerHTML = currency;
		}
		
	}
	showHideYouSendSelect(e){
		this.setState({ showList: this.state.showList === 'show' ? 'hide' : 'show'});

	}
	getCurrencyList () {
		return fetch('../source/currency-list.json')
      .then(response => response.json());
		
	}
	render(){
		return(
			<section>
				<CurrencyList id={this.props.id}
					showHide={this.state.showList} 
					hideOnBlur={this.showHideYouSendSelect}
					handleListClick={this.handleListClick}
					currencyList={this.getCurrencyList}
					/>
			</section>
		);
	}
}


const CurrencyList = ({props, showHide, hideOnBlur, handleListClick , id, currencyList}) => ( 
  <div id={id} onBlur={hideOnBlur} className={showHide} >
		<ul className="select-currency">
			<li onClick={handleListClick}>
				<img src={flag2} />
        <label>GBP</label>
				<label>- Pound Sterling</label>
			</li>
			<li onClick={handleListClick}>
				<img src={flag1} />
        <label>EUR</label>
				<label>- Euro</label>
			</li>
			<li onClick={handleListClick}>
				<img src={flag2} />
        <label>GBP</label>
				<label>- Pound Sterling</label>
			</li>
			<li>
				<img src={flag1} />
        <label>EUR</label>
				<label>- Euro</label>
			</li>
		</ul>
    
  </div>
);

// {
//     props.options.map(opt => {
//         return (
//         <option
//             key={opt}
//             value={opt}>{opt}</option>
//         );
//     })
// }