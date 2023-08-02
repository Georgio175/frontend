import React from "react";
import { Autocomplete, TextField, FormControl } from "@mui/material";

const SingleCustomAutoComplete = (props) => {
  const filedName = props.filedName;
  const fieldLabel = props.label;
  const list = props.list;
  const value = props.value;
  const listKey = props.listKey;
  const listDescription = props.description;
  const customOnChange = props.customOnChange;

  const optionForLabel = (label) => {
    if (typeof label === "object" && !Array.isArray(label) && label !== null) {
      return label[listDescription];
    }
    let toReturn = list.find((source) => {
      return source[listKey] == label;
    });
    if (toReturn) {
      return toReturn[listDescription];
    }
    return `${label}`;
  };

  const getOptionSelected = (option, value) => {
    if (
      typeof option === "object" &&
      !Array.isArray(option) &&
      option !== null
    ) {
      return option[listKey] == value;
    }
    return false;
  };

  const update = (event, value) => {
    if (!customOnChange) {
      return;
    }
    if (value === null) {
      customOnChange(null, filedName, "", event, value);
      return;
      // }else if( typeof value === 'string'){
      //     setValue(optionForLabel(value))
    } else {
      customOnChange(
        value[listKey],
        filedName,
        value[listDescription],
        event,
        value
      );
    }
  };

  return (
    <FormControl style={{ width: "100%" }}>
      <Autocomplete
        disabled={props.disabled ? props.disabled : false}
        name={filedName}
        options={list} // Options List
        value={value}
        onChange={update}
        getOptionLabel={optionForLabel}
        getOptionSelected={getOptionSelected}
        style={{ width: "100%" }}
        renderInput={(params) => <TextField {...params} label={fieldLabel} />}
      />
    </FormControl>
  );
};

export default SingleCustomAutoComplete;
