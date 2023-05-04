import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TokenType, TUserData, UserLogged, UserType } from "../../@types";
import { loginInfo } from "../../services/auth/loginInfoService";
import loginService from "../../services/auth/loginService";
import { AuthContext } from "./AuthContext"
import { checkCredentialService } from "../../services/auth/checkCredentialService";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {

    const navigate = useNavigate();

    const [user, setUser] = useState<UserType | null>(null);
    const [userData, setUserData] = useState<any>();
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState<TokenType>(null);
    const [userLogged, setUserLogged] = useState<UserLogged>({} as UserLogged);
    const [email, setEmail] = useState<string | null>(null);


    useEffect(() => {

        const recoveredUser = localStorage.getItem('@user');
        const recoveredToken: string | null = localStorage.getItem('@token');

        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser));
            setToken(recoveredToken);

            if(token) {
                const chechAuth = async () => {
                    console.log("check");
                    
                    const response = await checkCredentialService(token);
                }
                chechAuth();
            }

            const { email } = JSON.parse(recoveredUser);
            setEmail(email);

            if (!(!!userData)) {
                const getLoginInfo: any = async (email: string) => {

                    const response: any = await loginInfo(email);
                    
                    if (response.status) {
                        setUserData(
                            {
                                userUuid: response.data.user_uuid,
                                studioUuid: response.data.studio_uuid,
                                studioName: response.data.studio_name,
                                name: response.data.name,
                                email: response.data.email,
                                rules: response.data.rules,
                                isAdmin: response.data.is_admin,

                            }
                        )
                    }
                }
                getLoginInfo(email);
            }

            setLoading(false);
        }


    }, []);


    const login = async (email: string, password: string) => {

        if (email && password) {


            const response = await loginService(email, password);
          
            if(response.code === 401) {
                toast.warning(`${response.message}`);
                return response;
            }
            
            if (response.code === 200) {

                userLogged.email = response.data.user.email;
                userLogged.name = response.data.user.name;

                localStorage.setItem('@user', JSON.stringify(userLogged));
                localStorage.setItem('@token', response.data.token);

                if (userData) {
                    toast.success(`${response.message}`)
                    setLoading(false);
                    return true;
                }

            }

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
                isData: !!userData,
                user, login, logout, loading, token, userData
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}