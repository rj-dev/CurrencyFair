/*jshint esversion: 6 */
import React, { Component } from 'react';

export default class ModalVerification extends Component {
    
    render (){
        return (
            <div>
                <div>
                    <div className="modal-title">Identity verification required</div>
                    <p className="modal-info">
                        For your security, we ocassionaly require you to verify your identity by
                        entering a code sent to your mobile device.
                    </p>
                </div>
                <div>
                <div className="middle-box">
                    <div>
                        <ul>
                            <li className="f-s-1">Enter the code sent via SMS to</li>
                            <li className="f-s-1">
                                <label>+353</label>
                                <label>872251177</label>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <input type="number" max="9"/>
                        <input type="number"/>
                        <input type="number"/>
                        <input type="number"/>
                        <input type="number"/>
                        <input type="number"/>
                    </div>
                    <div>
                        <ul>
                            <li>Receive a new code</li>
                            <li>Receive code via call instead</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div>
                    <button className="btnDisable">
                    Verify Identity
                    </button>
                    <button onClick={this.props.handleClose}>
                        Back
                    </button>
    
                    <div>
                        I can't access this mobile device
                    </div>
                </div>
            </div>
        )
    }
    
};