import React from 'react'
import OrdersPieChart from '../OrdersPieChart/OrdersPieChart'
import css from './Orders.module.css'

const Orders = ({details}) => {
    return (
        <div className={`${css.container} theme-container`}>
            <div className={css.orderChart}>
                <span style={{marginBottom:"1.8rem"}} >Water Availability chart:</span>
                <OrdersPieChart details={details} />
            </div>
        </div>
    )
}

export default Orders