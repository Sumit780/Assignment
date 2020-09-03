import React from 'react';
import dash from './assets/dash.svg';
import moment from 'moment';
import rightArrow from './assets/rightArrow.svg';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     totalKm:[]
    }
  }

  getTrip = (milisecond) =>{
    let now = moment();
    let expiredTime = moment().add((milisecond/1000), 'seconds');
    return expiredTime.diff(now,'hours');
  }

  getDate = (timestamp) => {
    let now = moment(Number(timestamp))
    window.moment = moment;
    return now.format('L');
  }

  getTime = (timestamp) => {
    let now = new moment(Number(timestamp));
    return now.format('LT');
  }


  getTripExpense = (expense) => {
    let price = expense.map((price) => price.amount);
    if (price.length > 0) {
      return price.reduce((acc, cv) => acc + cv)
    } else {
      return 0
    };
  }

  getNode = (trips) => {
    return trips.map((node, index) => {
      return <div key={node.tripId} className="row text-left">
        <div className="col-1 border p-3">
          {index + 1}
        </div>
        <div className="col-2 border p-3">
          {node.startPointNode}({this.getTime(node.startTripDate)}) <img src={rightArrow}/> {node.endPointNode} ({this.getTime(node.endTripDate)})
         </div>
        <div className="col-1 border p-3">
          {node.driverName}
        </div>
        <div className="col-1 border p-3">
          Rs.{this.getTripExpense(node.tripExpenses)}
        </div>
        <div className="col-1 border p-3">
          {node.totalKm}
        </div>
        <div className="col-1 border p-3">
          {(node.gpsDistance).toPrecision(2)}KM
         </div>
        <div className="col-1 border p-3">
          Trip Time
         </div>
        <div className="col-1 border p-3">
          {node.startODOMeter} <img src={rightArrow}/> {node.endODOMeter}
        </div>
        <div className="col-3 border">
          <div><button className="btn btn-info btn-sm m-2">Movement Report</button><button className="btn btn-info btn-sm">Stopage Report</button></div>
        </div>
      </div>
    })
  }

  tripDetails = () => {
    const { tripDetails } = this.props;
    return tripDetails.map((trips) => {
      return <div key={trips.id} className="container-fluid mt-3">
        <div className="table-top border table-padding">
          <span>Date: {this.getDate(trips.startDay)} at {this.getTime(trips.startDay)} - {this.getDate(trips.endDay)} at {this.getTime(trips.endDay)} ({this.getTrip(trips.dailyRunningTime)}Hrs 0 Min) </span>
          <span> <span className="km-color">Totak KM: 165</span>  <span className="expense-color">Total Expense: 0</span></span>
          <span><img src={dash} alt="" /></span>
        </div>
        <div className="container-fluid inner-table border">
          <div className="row table-inner-header">
            <div className="col-1 border">
              #
                    </div>
            <div className="col-2 border">
              Trip Starts(Node) to Trip Ends (Node)
                    </div>
            <div className="col-1 border">
              Driver Name
                    </div>
            <div className="col-1 border">
              Trip Expenses
                    </div>
            <div className="col-1 border">
              Trip Km
                    </div>
            <div className="col-1 border">
              Trip GPS KM
                    </div>
            <div className="col-1 border">
              Trip Time
                    </div>
            <div className="col-1 border">
              Odometer Reading
                    </div>
            <div className="col-3  border">
              Action
                    </div>
          </div>
          {trips.tripLists && this.getNode(trips.tripLists)}

        </div>
      </div>
    })
  }


  render() {
    return (
      <>
        {this.tripDetails()}
      </>
    )
  }
}

export default Table;