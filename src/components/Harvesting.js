import React from 'react'
import PropTypes from 'prop-types'

const Harvesting = (props) => {
    return (
        <section>
            <h2>Harvesting</h2>
            <p>Bananas per second: {props.harvesters.num * props.harvesters.yield}</p>
            <button
                onClick={props.buyHarvester}
                disabled={props.bananas < props.harvesters.cost}
            >
                Robotic Harvester
            </button>{" "}
            {props.harvesters.num}
            <br />
            <span>Cost: {props.harvesters.cost} banana(s)</span>
        </section>
    )
}

Harvesting.propTypes = {
    bananas: PropTypes.number.isRequired,
    harvesters: PropTypes.object.isRequired,
    buyHarvester: PropTypes.func.isRequired,
}

export default Harvesting;