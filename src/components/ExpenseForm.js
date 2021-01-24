import React from 'react'
import {MdSend} from 'react-icons/md'

export const ExpenseForm = ({charge,edit,amount,handleAmount,handleCharge,handleSubmit}) => {
    return (
        <>
          <form action="" onSubmit={handleSubmit}>
              <div className="form-center">
                  <div className="form-group">
                      <label htmlFor="charge">charge</label>
                      <input type="text" onChange={handleCharge} value={charge} className="form-control" id='charge' name='charge' placeholder="e.g. rent"/>
                  </div>
                  <div className="form-group">
                      <label htmlFor="amount">amount</label>
                      <input type="number" onChange={handleAmount} value={amount} className="form-control" id='amount' name='amount' placeholder="e.g. 100"/>
                  </div>
              </div>
              <button type="submit"  className="btn">
                  {edit===false ? 'submit':'edit'}
                  <MdSend className="btn-icon"></MdSend>
              </button>
          </form>
        </>
    )
}
