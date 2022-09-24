import React,{useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'


function CreateService() {
  let dispatch =  useDispatch()
  const[service, setService] = useState('')
  const[description, setDescription] = useState('')

  const handleSubmit =(e)=>{
    e.preventDefault();

    const newService={service, description}
    console.log(newService)
  }

  useEffect(()=>{
  //  dispatch(createService())
  })
  return (
    <div>
      <div className='container'>
        <form method='POST' onSubmit={handleSubmit}>
          <h4 className='display-4'>New Service</h4>
          <label htmlFor='service'>Service</label>
          <input 
          className='form-control'
          name='service'
          onChange={(e)=>setService(e.target.value)}
          required
          placeholder='enter service name'
          />
          <label htmlFor='description'>Description</label>
          <textarea className='form-control' name='description'onChange={(e)=>setDescription(e.target.value)}></textarea>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  )
}

export default CreateService