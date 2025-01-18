import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const CFormatter = (num: number) => {
  return `${num?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`;
};

export const KFormatter = (val: number) => {
  return Math.abs(val) > 999999999
    ? `${Math.sign(val) * parseFloat((Math.abs(val) / 1000000000).toFixed(1))}B`
    : Math.abs(val) > 999999
    ? `${Math.sign(val) * parseFloat((Math.abs(val) / 1000000).toFixed(1))}M`
    : Math.abs(val) > 999
    ? `${Math.sign(val) * parseFloat((Math.abs(val) / 1000).toFixed(1))}k`
    : Math.sign(val) * Math.abs(val);
};

export const getPercentage = (part: number, total: number) => {
  if (total === 0) return 0; // Avoid division by zero
  return (part / total) * 100;
};

export const sumUp = (array: Array<number>) => {
  if (array?.length) {
    return array?.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);
  } else {
    return [0, 0, 0]?.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);
  }
};
