import { TextField as MUITextField, TextFieldProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const TextInput = ({ ...inputProps }: TextFieldProps) => {
  return (
               <MUITextField
                variant="outlined"
                { ...inputProps } 
              /> 
    
           )}

export default TextInput;