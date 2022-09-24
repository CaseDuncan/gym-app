import React,{useEffect, useState} from 'react'
import Services from './Services'
import { useDispatch, useSelector } from 'react-redux'
import { fetchServices } from '../../features/serviceSlice'

function ServiceContainer() {

    const dispatch = useDispatch()
    const services = useSelector(state)

    useEffect(()=>{
        dispatch(fetchServices())
    },[])

    const  serviceList = services.map((service)=>(
        <Services
        key={service.id}
        service={service}
        />
    ))
  return (
    <div>
       {serviceList}
    </div>
  )
}

export default ServiceContainer