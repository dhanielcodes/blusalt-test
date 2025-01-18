import { Dispatch, SetStateAction } from "react";

export interface NavDataInterface {
  name?: string;
  icon?: any;
}
export interface NavItemProps {
  name?: string;
  onClick?: () => void;
  icon?: any;
  showName?: boolean;
}

export type ContextType = {
  navState?: string;
  setNavState?: Dispatch<SetStateAction<string>>;
  toggleNavState?: () => void;
};
