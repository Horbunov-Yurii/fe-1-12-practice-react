import { format } from "date-fns";
export const formatIventStart = (start)=>{
return format(Date.parse(start), 'dd MMMM yyyy, hh:mm')
};