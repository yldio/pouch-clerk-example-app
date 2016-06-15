import { Modal, Button } from 'react-bootstrap'
import React, { Component, PropTypes } from 'react'
import Moment from 'moment'
import Driver from './Driver'

export default class Finished extends Component {

  handleDone() {
    this.props.actions.setTransactionState(this.props.transaction._id, 'finished')
    const { router } = this.context
    setTimeout(_ => {
      router.push({pathname: '/transactions/new'})
    }, 3000)
  }

  handleOnStarClick(rating) {
    return _ => {
      this.props.actions.editTransaction(this.props.transaction._id, {
        rating: rating
      })
    }
  }

  render() {
    const { transaction } = this.props
    const { time, cost, rating } = transaction
    const metrics = {
      you_waited: diff(time.started, time.driver_arrived),
      driver_waited: diff(time.driver_arrived, time.pickup),
      trip: diff(time.pickup, time.arrived),
      cost: `${cost.value} ${cost.currency}`
    }
    const stars = []
    for(var i = 1 ; i <= 5 ; i ++) {
      if (rating >= i) {
        stars.push(
          <i
            style={{
              fontSize: '2em',
              fontColor: 'yellow',
            }}
            className="fa fa-star" key={i}
            onClick={::this.handleOnStarClick(i)}/>
          )
      } else {
        stars.push(
          <i
            style={{fontSize: '2em'}}
            className="fa fa-star-o" key={i}
            onClick={::this.handleOnStarClick(i)}/>
          )
      }
    }

    const footer = transaction.clerk_state.state == 'service-completed' && rating ? (
      <Modal.Footer>
        <Button
          bsStyle="primary"
          disabled={!transaction.rating}
          onClick={::this.handleDone}
          >Done</Button>
      </Modal.Footer>
      ) : undefined;

    return (
      <Modal.Dialog>

        <Modal.Header>
          <Modal.Title>Your trip is finished!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>You <b>waited {metrics.you_waited}</b> for a dragon to arrive.</p>
          <p>{transaction.driver.name} <b>waited {metrics.driver_waited}</b> for you at the pickup spot.</p>
          <p>{transaction.driver.name} <b>took {metrics.trip}</b> to get you to your destination.</p>
          <p>Your trip costed you <b>{metrics.cost}</b>.</p>
          <p>
            <label>Please rate your experience:</label>
            {stars}
          </p>
        </Modal.Body>

        {footer}

      </Modal.Dialog>)
  }
}


// ask for `router` from context
Finished.contextTypes = {
  router: PropTypes.object
}


function diff(from, to) {
  return Moment.duration(to - from).humanize()
}