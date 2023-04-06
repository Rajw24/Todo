import React from 'react'

export const Footer = () => {
  const footerstyle = {
    position: "absolute", 
    left: "0",
    right: "0", 
    bottom: "0", 
  }
  return (
    <>
      <div className="container-fluid bg-dark text-light p-1 pt-2" style={footerstyle}>
        <p className="text-center">Copyright &copy;: rajw24.github.io/Todo/</p>
      </div>
    </>
  )
}
