import React from 'react'
import './App.css'

const BillAmount = () => {

    const next = () => {
    }


    return (
        <div>
            <form>
                <label htmlFor="billAmount">Bill Amount</label>
                <input type="number" name="billAmount" id="billAmount" />
                <button type="submit" className="btn" onClick={next}>Next</button>
            </form>
        </div>
    )
}

export default BillAmount
