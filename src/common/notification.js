import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ICON_TOAST_CHECK, ALT_TEXT_TOAST_ICON } from "common/constants";

export const showSuccessToast = (message) => {
  toast.dismiss();
  toast.success(message, {
    icon: <img src={ICON_TOAST_CHECK} alt={ALT_TEXT_TOAST_ICON} />,
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
