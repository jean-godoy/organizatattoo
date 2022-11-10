export interface PropsSideBar {
    sidebarOpen: any,
    closeSidebar: () => void
}

export interface PropsNavBar {
    sidebarOpen: boolean,
    openSidebar: () => void
}

export interface AuthContextInterface {
    user: UserType | null;
    authenticated: boolean;
    login: (user: string, password: string) => void;
    logout: () => void;
    loading?: boolean;
    token: string | null;
}

export interface ICostumer {
    name: string,
    phone: number,
    email: string,
    cpf: number,
    birth_date: string,
    address: string,
    district: string,
    city: string,
    cep: number,
    uf: string

}

export type TSidebarOpen = {
    sidebarOpen: any;
}

export type UserType = {

}

export type TokenType = string | null;

export type UserLogged = {
    email: string,
    password: string
}