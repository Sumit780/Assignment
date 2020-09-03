import React from 'react';
import truck from './assets/truck.svg';
import speed from './assets/speed.png';
import clock from './assets/clock.svg';
import wallet from './assets/wallet.svg';
import moment from 'moment';
import rightArrow from './assets/rightArrow.svg'
import DatePicker from "react-datepicker";
import search from './assets/search.svg';

import "react-datepicker/dist/react-datepicker.css";


class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {
      startDate: new Date("04/23/2020").toString(),
      endDate: new Date("04/23/2020").toString()
    }
  }

  getTrip = (milisecond) =>{
    let now = moment();
    let expiredTime = moment().add((milisecond/1000), 'seconds');
    return expiredTime.diff(now,'hours');
  }

  render() {
    return (
      <>
        <div className="container-fluid">
          <h6 className="mt-5">Trip Summary</h6>
          <nav aria-label="breadcrumb" className="datepicker">
            <ol className="breadcrumb pt-0 bg-white breadcrum-margin">
              <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
              <li className="breadcrumb-item active" aria-current="page">Trip Summary</li>
            </ol>
            <div className="d-flex"> <div className="mr-2">From</div> <DatePicker className="float-right"/>
                  <div className="mr-2 ml-2">To</div> <DatePicker className="float-right" />
                  <div className="btn btn-info btn-sm mr-2 ml-2"><img src={search}/></div>
                  <div className="btn btn-outline-info btn-sm mr-2">Export </div>
            </div>
          </nav>
          <div className="d-flex justify-content-between ml-3">
          <div className="row">
          <div className="row-6">
            <div className="d-flex">
              <div className="details"><img src={truck} alt="" />{this.props.result.data.vehicleNo}</div>
              <div className="details"><img src={truck} alt="" />Total Trips: {this.props.result.data.totalTrips}</div>
              <div className="details"><img src={speed} alt="" />Total KM: {this.props.result.data.totalKm} KM</div>
            </div>
          </div>
          <div className="row-6">
            <div className="d-flex">
              <div className="details"><img src={clock} alt="" />Trip Time: {this.getTrip(+this.props.result.data.totalTripTime)} Hr </div>
              <div className="details"><img src={clock} alt="" />Total Time: {this.getTrip(+this.props.result.data.totalTime)} Hr</div>
              <div className="details"><img src={wallet} alt="" />Total Exp: Rs.{this.props.result.data.totalExpences}</div>
            </div>
          </div>
          </div>
          <div className="border mr-5 w-300"> <img src={wallet}/>Other Exp :Rs 0.00 <img src={rightArrow}/></div>
          </div>
        </div>

      </>
    )
  }
}

export default Summary;