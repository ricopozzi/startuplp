import React, { InputHTMLAttributes } from "react";
import { Input } from "../ui/input";
import { FieldError } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: any;
  error?: FieldError;
}

export const TextInput: React.FC<InputProps> = ({
  register,
  error,
  ...rest
}) => {
  return (
    <div className="pb-6 relative">
      <Input
        {...rest}
        {...register}
        className={`${error?.message && "focus-visible:ring-red-500"}`}
      />
      <p className="text-sm text-red-600 absolute bottom-0">{error?.message}</p>
    </div>
  );
};
