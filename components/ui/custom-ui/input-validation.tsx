// import clsx from "clsx";
import { cn } from "@/lib/utils"

import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

type InputProps<T extends FieldValues> = {
  className?: string;
  name: Path<T>;
  placeholder?: string;
  defaultValue?: string;
  register: UseFormRegister<T>;
  type: string;
  validationSchema?: RegisterOptions<T>;
  [key: string]: unknown;
};

const Input = <T extends FieldValues>({
  className,
  name,
  placeholder,
  defaultValue,
  register,
  type,
  validationSchema = {},
  ...rest
}: InputProps<T>) => {
  return (
    <input
      className={cn(
        "block h-[48px] w-full rounded-md border-2 border-border-accent-secondary px-200 py-40 focus:border-[3px] focus:outline-none",
        "border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      placeholder={placeholder}
      defaultValue={defaultValue}
      type={type}
      {...rest}
      {...register(name, validationSchema)}
    />
  );
};
export default Input;
