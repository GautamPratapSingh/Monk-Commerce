import { Button } from '@mui/material'
import React from 'react'

const AddProductButton = () => {
  return (
    <div style={{position:'absolute', top:'80px',left:'600px'}}>
        <Button variant='outlined' sx={{color:'#1b5e20',width:'250px', borderColor:'#1b5e20',borderWidth:'2px'}}>Add Product</Button>
    </div>
  )
}

export default AddProductButton