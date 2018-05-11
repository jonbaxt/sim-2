import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { addImg, cancelWizard } from '../../ducks/reducer';

class WizardTwo extends Component {
    constructor() {
        super()
        this.state = {
            img: ''
        }
        this.imgChange = this.imgChange.bind(this);
        this.sendToRedux = this.sendToRedux.bind(this);
    }
    imgChange(e) {
        this.setState({ name: e })
    }

    sendToRedux() {
        console.log(` send was fired`)
        this.props.addImg(this.state.img);
    }

    render() {
        console.log(this.props.match)
        return (
            <div className='wizMain colLight'>
                <div className='wizTop'>
                    <h1>Add New Listing</h1>
                    <Link className='buttPad' to='/'><button className='cancelButt colPink bold' onClick={this.props.cancelWizard}>Cancel</button></Link>
                </div>


                <div className='wizForm'>
                    <h2>Img URL</h2>
                    <input type='text' onChange={(e) => this.imgChange(e.target.value)} value={this.state.img} />
                </div>

                <div className='pad'>
                    <Link to='/wizard/step1'>
                        <button className='cancelButt colDarG texWh' >Previous Step</button>
                    </Link>
                    <Link to='/wizard/step3'>
                        <button className='cancelButt colDarG texWh' onClick={this.sendToRedux} >Next Step</button>
                    </Link>
                </div>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip,
        img: state.img,
        mortgage: state.mortgage,
        rent: state.rent
    }
}

export default connect(mapStateToProps, { addImg, cancelWizard })(WizardTwo);