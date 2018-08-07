/*jshint esversion: 6 */
import React, { Component } from 'react';
import flag1 from '../assets/europe_flag.png';
import flag2 from '../assets/united_kingdom_uk_flag.png';
import Select from './select';
import SimpleModal from '../components/modal';


class PageSteps extends Component {

    constructor(){
        super();
        this.state = {txtYouSendValue: '2000', txtReceiverGetValue: '1717.94'};
        this.youSendValueOnChange = this.youSendValueOnChange.bind(this);
        this.receiverGetValueOnChange = this.receiverGetValueOnChange.bind(this);
     }

    componentDidMount () {
        document.getElementById('divYouSendCurrency').addEventListener('click', () => {
            this.refs.youSendCurrencyList.showHideYouSendSelect('youSendCurrencyList');
        });
        document.getElementById('divReceiverGetCurrency').addEventListener('click', () => {
            this.refs.receiverGetCurrencyList.showHideYouSendSelect('receiverGetCurrencyList');
        });
        document.getElementById('amountBeingSent').addEventListener('click', () => {
            document.getElementById('txtYouSend').classList.remove('hide');
            document.getElementById('txtYouSend').focus();
            document.getElementById('amountBeingSent').classList.add('hide');
        });
        document.getElementById('amountBeingGotten').addEventListener('click', () => {
            document.getElementById('txtReceiverGet').classList.remove('hide');
            document.getElementById('txtReceiverGet').focus();
            document.getElementById('amountBeingGotten').classList.add('hide');
        });
        document.getElementById('txtYouSend').addEventListener('blur', () => {
            document.getElementById('txtYouSend').classList.add('hide');
            document.getElementById('amountBeingSent').classList.remove('hide');
            let valueInformed = Number(document.getElementById('txtYouSend').value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            document.getElementById('spanSendInteger').innerHTML = valueInformed.toString().split('.')[0];
            document.getElementById('spanYouSendDecimal').innerHTML = valueInformed.toString().split('.')[1];
        });
        document.getElementById('txtReceiverGet').addEventListener('blur', () => {
            document.getElementById('txtReceiverGet').classList.add('hide');
            document.getElementById('amountBeingGotten').classList.remove('hide');
            let valueInformed = Number(document.getElementById('txtReceiverGet').value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            document.getElementById('spanReceiverInteger').innerHTML = valueInformed.toString().split('.')[0];
            document.getElementById('spanReceiverDecimal').innerHTML = valueInformed.toString().split('.')[1];
        });
    }
    youSendValueOnChange(e){
        const re = /^[0-9\b\.]+$/;
        if (e.target.value == '' || re.test(e.target.value)) {
           this.setState({txtYouSendValue: e.target.value});
        }
    }
    receiverGetValueOnChange(e){
        const re = /^[0-9\b\.]+$/;
        if (e.target.value == '' || re.test(e.target.value)) {
           this.setState({txtReceiverGetValue: e.target.value});
        }
    }
    showModal(){
        this.refs.modal.showModal();
    }
    render(){
        return(
            <div className="screen-size">
            <div className="boxLeft">
                <ul className="StepsMenu">
                <li className="active"><a className="active" href="javascript:void(0);">
                    Step 1 <br />
                    Transaction info</a></li>
                <li><a href="javascript:void(0);">Step 2 <br />
                    Recipient info</a></li>
                <li><a href="javascript:void(0);">Step 3 <br />
                    Make payment</a></li>
                </ul>
                <h3>
                Let’s set up your transaction!
                </h3>
                <p>
                Specify the amount to be sent or received.
                </p>
                <ul className="boxYouSend">
                <li>
                    <div>
                        <div className="youSendTitle">You send</div>
                        <div className="currency" id="divYouSendCurrency">
                            <img id="imgFlatYouSend" src={flag1} />
                            <label id="lblCurrencyYouSend">EUR</label>
                            <Select id="youSendCurrencyList" ref="youSendCurrencyList"/>
                        </div>
                        <div className="t-a-l">
                            <input type="text" id="txtYouSend" className="input-amount-money hide" value={this.state.txtYouSendValue} onChange={this.youSendValueOnChange}/>
                            <p id="amountBeingSent"><span>€</span><span id="spanSendInteger">2000</span>.<span id="spanYouSendDecimal" className="currencyDecimal">00</span></p>
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <div className="youSendTitle">RECEIVER GETS</div>
                        <div className="currency" id="divReceiverGetCurrency">
                            <img id="imgFlatReceiverGet" src={flag2} />
                            <label id="lblCurrencyReceiverGet">GBP</label>
                            <Select id="receiverGetCurrencyList" ref="receiverGetCurrencyList"/>
                        </div>
                        <div className="t-a-l">
                            <input type="text" id="txtReceiverGet" className="input-amount-money hide" value={this.state.txtReceiverGetValue} onChange={this.receiverGetValueOnChange}/>
                            <p id="amountBeingGotten"><span>£</span><span id="spanReceiverInteger">1,717</span>.<span id="spanReceiverDecimal" className="currencyDecimal">94</span></p>
                        </div>
                        
                    </div>
                </li>
                </ul>
                
                <div className="t-a-l">
                    <button className="btnNext" onClick={this.showModal.bind(this)}>
                        Next
                    </button>
                </div>

                <SimpleModal ref="modal"/>

                <div className="currency-footer">
                <div className="footer-a__item">© 2018 CurrencyFair</div>
                <div className="footer-a__item">
                    <ul className="list-inline margin-bottom-none">
                    <li className="list-inline__item">
                        <a href="https://app.currencyfair.com/support/en/cf-for-business/still-have-questions" target="_blank">Help &amp; Support</a>
                    </li>
                    <li className="list-inline__item">
                        <a href="https://www.currencyfair.com/trust/legal-stuff/" target="_blank">Legal Stuff</a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>


            <div className="boxRight">
                <ul className="boxSendingDetails">
                <li>
                    Sending Details
                </li>
                <li>
                    <label>
                    You Send
                    </label>
                    <div className="amount-details">€2000.00</div>
                </li>
                <li>
                    <label>
                    Receiving Details
                    </label>
                    <a>As of right now <div>&#63;</div></a>
                </li>
                <li>
                    <ul>
                    <li>
                        <label>
                        Rate
                        </label>
                        <div>0.86022</div>
                    </li>
                    <li>
                        <label>
                        Fee
                        </label>
                        <div>£2.50</div>
                    </li>
                    <li>
                        <label>
                        Delivery date
                        </label>
                        <div>25th November</div>
                    </li>
                    <li>
                        <label>
                        Recipient gets
                        </label>
                        <div className="amount-details">£1717.94</div>
                    </li>
                    </ul>
                </li>
                <div className="boxSendingDetailsFooter">
                    You save 66.19 compared ypur bank!
                </div>
                </ul>
            </div>

            {/* <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p> */}
            </div>
        )
    }
};

export default PageSteps;