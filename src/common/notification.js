import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showSuccessToast = (message) => {
  toast.dismiss();
  toast.success(message, {
    className: "toast__message message__success",
  });
};

export const showErrorToast = (message) => {
  toast.dismiss();
  toast.error(message, {
    className: "toast__message message__error",
  });
};

export const showRequiredToast = (message) => {
  toast.dismiss();
  toast.warn(message, {
    className: "toast__message message__warn",
  });
};
