import React from 'react'
import PropTypes from 'prop-types'
import FormButtons from 'components/Todo/AddCard/controllers/FormButtons'

const AddCard = ({handleInputChange, handleAddTask, inputData}) => {
  return (
    <div className='todo-card add-card'>
      <form>
        <input className='todo-input' type="text" id='todo-input' onChange={handleInputChange} value={inputData} autoFocus></input>
        <FormButtons handleAddTask={handleAddTask}/>
      </form>
    </div>
  )
}

AddCard.propTypes = {
  handleAddTask: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  inputData: PropTypes.string.isRequired
}

export default AddCard