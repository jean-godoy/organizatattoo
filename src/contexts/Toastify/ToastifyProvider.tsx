import { useState } from "react";
import { ToastifyContext } from "./ToastifyContext";

export const ToastifyProvider = ({ children }: { children: JSX.Element }) => {

    const [message, setMessage] = useState<string | null>(null);

    function writeMessage(text: string) {
        return setMessage(text);
        
    }

    return (
        <ToastifyContext.Provider
            value={{
                isMessage: !!message,
                message,
                writeMessage
            }}
        >
            { children }
        </ToastifyContext.Provider>
    );
}