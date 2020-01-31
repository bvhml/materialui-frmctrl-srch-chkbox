import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import { TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import withRoot from '../withRoot'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const stopPropagation = e => {
    switch (e.key) {
      case "ArrowDown":
      case "ArrowUp":
      case "Home":
      case "End":
        break;
      default:
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    }
  };
  const defaultNames = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];
  
const CustomFormControl = ({ name, classes }) => {
  

  
  const [NameValues, setNameValues] = useState([]);
  const [FindName, setFindName] = useState('');
  const [allNameClick, setAllNameClick] = useState(false);

 

  const handleChangeMenuName = event => {
    
    if (allNameClick) {
        //When Check All is ON you remove the element you check manually
    } else {
        setNameValues(event.target.value); 
    }
    event.stopPropagation();
    event.preventDefault();
    
  }

  const handleClickAllName = event => {
    setAllNameClick(!allNameClick);
    event.target.checked ? setNameValues(defaultNames): setNameValues([]);
    event.stopPropagation();
    event.preventDefault();
  }
  
  const handleChangeFindName = event => {
    event.preventDefault();
    event.stopPropagation();
    const { value } = event.target;
    setFindName(value);
  };

  const checkboxList = () => {

    if (allNameClick) {
        return defaultNames
          .map(menuValue => (
            <MenuItem key={menuValue} value={menuValue} style={{whiteSpace: 'normal'}}>
              <Checkbox checked={true} onChange= { ()=> setAllNameClick(false) } style={{color: 'red' }}/>
              <ListItemText primary={menuValue} />
            </MenuItem>
          ))
          .filter(() => {return true;})
    } else {
        return defaultNames
          .map(menuValue => (
            <MenuItem key={menuValue} value={menuValue} style={{whiteSpace: 'normal'}}>
              <Checkbox checked={NameValues.indexOf(menuValue) > -1} onChange= { ()=> setAllNameClick(false) } style={{color: 'red' }} />
              <ListItemText primary={menuValue} />
            </MenuItem>
          ))
          .filter(menuValue => {
              if (FindName !== '') {
                  return menuValue.props.value.toLocaleLowerCase().includes(FindName.toLocaleLowerCase().trim());
              }
              else{
                  return true;
              }
              })
    }
    

  };
    return(
        <FormControl className={classes.formControl} variant="outlined" margin="dense" fullWidth>
            <InputLabel id="demo-mutiple-checkbox-label">{name}</InputLabel>
            <Select
              labelId="demo-mutiple-checkbox-label"
              id="demo-mutiple-checkbox"
              multiple
              value={NameValues}
              onChange={handleChangeMenuName}
              onOpen = { () => {setFindName(''); } }
              input={<Input />}
              renderValue={ selected => {selected.join(', '); console.log(NameValues)}}
              MenuProps={MenuProps}
              variant="outlined"
            >
                <MenuItem>
                <TextField 
                    id="txtField"
                    name="txtField"  
                    placeholder="Buscar" 
                    onChange={handleChangeFindName}
                    onKeyDown= {stopPropagation}
                    onClick= {stopPropagation}
                    value= {FindName}
                    />
                </MenuItem>
                <MenuItem style={{whiteSpace: 'normal'}}>
                  <Checkbox checked={ allNameClick } onClick= {handleClickAllName} style={{ backgroundColor: 'red', color: 'white' }}/>
                  <ListItemText primary={allNameClick ? 'None': 'Check All'} />
                </MenuItem>    
              {checkboxList()}
            </Select>
          </FormControl>
    )

}

export default withRoot(CustomFormControl);