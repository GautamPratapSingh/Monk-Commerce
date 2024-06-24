import React, { useState } from 'react'
import {Select, TextField, IconButton,InputAdornment, Button} from '@mui/material'
import { MenuItem } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import {ProductPicker} from './productPicker'

const ProductList = () => {
    const [product,setProduct]=useState('');
    const [addMode,setAddMode]=useState(false);
    const [pickerStatus,SetPickerStatus]= useState(false);
    const [discountType,setDiscountType]=useState('% OFF');

    const handleIconClick = () => {
        SetPickerStatus(true);
    }
    const handlePickerClose = () => {
        SetPickerStatus(false);
    }
    const handleDiscountChange = (e)=> {
        setDiscountType(e.target.value)
    }
    const handleAddDiscount = ()=>{
        setAddMode(true);
    }
  return (
    ( addMode?(<>
        <TextField
        value={product}
        placeholder="Select a product"
        InputProps={{
          readOnly: true,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton 
                edge="end"
                onClick={handleIconClick}
              >
                <EditIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
        <TextField
        type='number'
        sx={{width:'80px'}}
        />
        <Select
        value={discountType}
        onChange={handleDiscountChange}
        >
            <MenuItem value='% OFF'>% OFF</MenuItem>
            <MenuItem value='Flat OFF'>Flat OFF</MenuItem>
        </Select>
        </>)
        :(<>
        <TextField
        value={product}
        placeholder="Select a product"
        InputProps={{
          readOnly: true,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton 
                edge="end"
                onClick={handleIconClick}
              >
                <EditIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        />
        <Button 
        variant='contained'
        onClick={handleAddDiscount}
        sx={{height:'55px',padding:'25px'}}>Add Discount</Button>
        </>)
    )
  )
}

export default ProductList