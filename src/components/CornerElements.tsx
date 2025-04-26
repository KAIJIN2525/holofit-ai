import React from 'react'

const CornerElements = () => {
  return (
    <>
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/40"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/40"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary/40"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/40"></div>
    </>
  )
}

export default CornerElements