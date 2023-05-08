import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showSuccessToast = (message) => {
  toast.success(message, {
    className: "toast-message success-message",
  });
};

export const showErrorToast = (message) => {
  toast.error(message, {
    className: "toast-message error-message",
  });
};

export const showRequiredToast = (message) => {
  toast.warn(message, {
    className: "toast-message warn-message",
  });
};
