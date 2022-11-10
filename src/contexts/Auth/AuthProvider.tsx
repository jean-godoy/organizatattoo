import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { TokenType, UserLogged, UserType } from "../../@types";
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({ children }: { children: JSX.Element }) => {

    const navigate = useNavigate();
    const [user, setUser] = useState<UserType | null>(null);
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState<TokenType>(null);
    const [userLogged, setUserLogged] = useState<UserLogged>({} as UserLogged);


    useEffect(() => {
        const recoveredUser = localStorage.getItem('@user');
        // const recoveredToken: string | null = localStorage.getItem('@token');

        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser));
            // setToken(recoveredToken);
        }

        setLoading(false);

    }, []);

    const login = async (email: string, password: string) => {

        if (email == 'seidecapital@gmail.com') {
            const data = {
                email: '',
                password: ''
            };

            userLogged.email = email;
            userLogged.password = password;
            setUserLogged(data);
            localStorage.setItem('@user', JSON.stringify(userLogged));
            navigate('/main');
            window.location. reload()
        }
    }

    const logout = async () => {
        setUser(null);
        localStorage.removeItem('@user');
        localStorage.removeItem('@token');
        return navigate("/login");
    }

    return (
        <AuthContext.Provider
            value={{
                authenticated: !!user,
                user, login, logout, loading, token
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}