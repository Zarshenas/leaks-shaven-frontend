import { format } from "date-fns";

export const convertDate = (dateString , formating) => {
  return format(dateString,formating);
}   