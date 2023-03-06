import React from 'react'
import PropTypes from 'prop-types'
import FormButtons from 'components/Todo/AddCard/controllers/FormButtons'

const AddCard = ({handleInputChange, handleAddTask, inputData, handleCancelClick}) => {
  return (
    <div className='todo-card add-card'>
      <form>
        <textarea className='todo-input' type="text" id='todo-input' onChange={handleInputChange} value={inputData} autoFocus></textarea>
        <FormButtons handleAddTask={handleAddTask} handleCancelClick={handleCancelClick}/>
      </form>
    </div>
  )
}

AddCard.propTypes = {
  handleAddTask: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  inputData: PropTypes.string.isRequired,
  handleCancelClick: PropTypes.func.isRequired
}

export default AddCard