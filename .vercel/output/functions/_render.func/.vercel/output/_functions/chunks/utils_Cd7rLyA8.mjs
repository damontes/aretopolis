import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const groupBy = (list, getKey) => {
  return list.reduce((previous, currentItem) => {
    const group = getKey(currentItem);
    if (!previous[group]) previous[group] = [];
    previous[group].push(currentItem);
    return previous;
  }, {});
};
const formatNumber = (number, options) => {
  return new Intl.NumberFormat("es-ES", options).format(number);
};

export { cn as c, formatNumber as f, groupBy as g };
