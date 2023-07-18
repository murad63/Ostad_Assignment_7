import React from "react"
export default function Input({inputChange,value}) {
  return (
    <input className="form-control" onChange={inputChange} value={value}/>
  )
}
