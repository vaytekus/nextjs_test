import { format, isValid, parseISO } from "date-fns";

export function FormatDate(date: Date | string | number, formatStr: string) {
  if (!date) return "n/a";
  
  let d: Date;
  if (date instanceof Date) {
    d = date;
  } else if (typeof date === 'string') {
    d = parseISO(date);
    if (!isValid(d)) {
        // Try fallback to new Date() for non-ISO strings if parseISO fails
        d = new Date(date);
    }
  } else {
    d = new Date(date);
  }

  if (!isValid(d)) {
    return "Invalid Date";
  }

  return format(d, formatStr);
}