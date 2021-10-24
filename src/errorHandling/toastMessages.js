import { toast } from "react-toastify";

export const success = message => {
  toast.success(message);
};

export const failure = message => {
  toast.error(message);
};
