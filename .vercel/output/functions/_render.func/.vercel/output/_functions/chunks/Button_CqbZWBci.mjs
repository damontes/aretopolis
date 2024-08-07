import { jsx } from 'react/jsx-runtime';
import { c as cn } from './utils_Cd7rLyA8.mjs';

const BUTTON_VARIANT_STYLES = {
  primary: "bg-primary-500 hover:bg-primary-600 text-white button-shadow disabled:bg-gray-300 disabled:text-gray-600 disabled:hover:bg-gray-300",
  secondary: "bg-transparent border border-primary-500 text-primary-500 hover:text-primary-600 disabled:bg-primary-300 disabled:text-gray-500 disabled:hover:bg-primary-300",
  link: "bg-transparent text-primary-500 hover:text-primary-600 p-0 disabled:text-gray-500 disabled:hover:text-gray-500"
};
const Button = ({
  type = "button",
  variant = "primary",
  full = true,
  as,
  className = "",
  children,
  ...rest
}) => {
  const Component = as || "button";
  return /* @__PURE__ */ jsx(
    Component,
    {
      className: cn(
        "min-w-12 text-center py-2 px-6 rounded-full h-fit disabled:opacity-50 inline-flex justify-center items-center",
        BUTTON_VARIANT_STYLES[variant],
        {
          "w-full": full,
          "w-fit": !full
        },
        className
      ),
      ...rest,
      children
    }
  );
};

export { Button as B };
