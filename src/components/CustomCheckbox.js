import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React from 'react';

const InLineCustomCheckbox = (props) => {
    return (
      <FormGroup>
        <FormControlLabel control={<Checkbox checked={props.checked}
          id={props.id}
          name={props.id}
          value={1}
          onClick={props.onClick} 
          style={{color:'#ff5531'}}
          />} label={props.label} />
      </FormGroup>
    )
}

export default InLineCustomCheckbox