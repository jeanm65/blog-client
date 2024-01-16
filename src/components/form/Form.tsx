/* eslint-disable @typescript-eslint/no-explicit-any */
import {  FormProvider  } from "react-hook-form";
import { Button, Stack } from "@mui/material";
import { Children, FormEvent, ReactNode, useEffect } from "react";

type Props = {
  onSubmit: (() => void) | ((event: FormEvent<HTMLFormElement>) => void);
  form: any;
  loading?: boolean;
  children: ReactNode;
  primaryButtonText?: string; 
} 

const Form = ( { form, onSubmit, loading, children, primaryButtonText = "Save" }: Props) => {
  return (
    <FormProvider { ...form }>
        <form onSubmit={onSubmit}>
          <Stack spacing={2}>
              { children }            
          <Button type="submit" variant="contained">
            { loading ? "...loading" : primaryButtonText }
          </Button>
          </Stack>
      </form>
    </FormProvider>  
  );
  };

export default Form;