import { TextField } from '@mui/material';
import React from 'react';
import { useFormContext } from 'react-hook-form';

interface FormFieldProps {
  name: string;
  label: string;
}

const FormField: React.FC<FormFieldProps> = ({ name, label }) => {
  const { register, formState } = useFormContext();

  return (
    <>
      <TextField
        {...register(name)}
        fullWidth
        className="mb-20"
        required
        error={!!formState.errors[name]?.message}
        helperText={formState.errors[name]?.message?.toString()}
        id="outlined-required"
        label={label}
        name={name}
        size="small"
      />
    </>
  );
};

export default FormField;
