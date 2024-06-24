import React, { useState } from 'react'
import {Select, TextField, IconButton,InputAdornment, Button,MenuItem,Dialog,
    DialogTitle,
    DialogContent,
    DialogActions} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import {ProductPicker} from './productPicker'
import AddProductButton from './addProductButton'

const ProductList = () => {
    const [product,setProduct]=useState('');
    const [addMode,setAddMode]=useState(false);
    const [searchTerm, setSearchTerm] = useState('');
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
    const handleClose = ()=>{
        SetPickerStatus(false)
    }
    const handleSearch = () => {
        console.log('Searching for:');
        // Implement your search functionality here
        handleClose();
      };
  return (
    ( addMode?(<div style={{position:'relative'}}>
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
        sx={{width:'80px',margin:'5px'}}
        />
        <Select
        value={discountType}
        onChange={handleDiscountChange}
        >
            <MenuItem value='% OFF'>% OFF</MenuItem>
            <MenuItem value='Flat OFF'>Flat OFF</MenuItem>
        </Select>
        <Dialog open={pickerStatus} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>
          Search
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="search"
            label="Search term"
            type="search"
            fullWidth
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSearch} variant="contained" endIcon={<SearchIcon />}>
            Search
          </Button>
        </DialogActions>
      </Dialog>
        <AddProductButton/>
        </div>)
        :(<div style={{position:'relative'}}>
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
        <Dialog open={pickerStatus} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>
          Search
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="search"
            label="Search term"
            type="search"
            fullWidth
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSearch} variant="contained" endIcon={<SearchIcon />}>
            Search
          </Button>
        </DialogActions>
      </Dialog>
        <Button 
        variant='contained'
        onClick={handleAddDiscount}
        sx={{height:'55px',margin:'5px'}}>Add Discount</Button>
        <AddProductButton/>
        </div>)
    )
  )
}

export default ProductList