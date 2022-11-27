import { createContext } from "react";
import { IToastifyContext } from "../../@types";

export const ToastifyContext = createContext<IToastifyContext>({} as IToastifyContext);