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
    isData: boolean;
    login: (user: string, password: string) => Promise<any>;
    logout: () => void;
    loading?: boolean;
    token: string | null;
    userData: TUserData;
   
}

export interface IToastifyContext {
    isMessage: boolean;
    message: string | null;
    writeMessage: (message: string) => void;
}

export interface ICostumer {
    uuid?: string,
    name: string,
    phone: number,
    email: string,
    cpf: number,
    birth_date: string,
    address: string,
    district: string,
    city: string,
    cep: number,
    uf: string,
    is_active?: number

}

export interface IModalUser {
    user: TUserInput,
    closeModal: () => void;
}

export type TSidebarOpen = {
    sidebarOpen: any;
}

export type UserType = {

}

export type TokenType = string | null;

export type UserLogged = {
    email: string,
    name: string
}

export type TUserData = {
    userUuid: string,
    studioUuid: string,
    studioName: string,

    name: string,
    email: string,
    rules: string,
    isAdmin: string
    

}

export type TUser = {
    name: string,
    email: string,
    password: string,
    check_password?: string,
    rules: string,
    is_active: boolean,
    studio_uuid: string | null
}

export type TUserInput = {
    uuid?: string,
    studio_uuid: string,
    name: string,
    email:string,
    password: string,
    check_password?: string,
    is_active: boolean | number,
    rules: string
}

export type TResponse = {
    status: boolean;
    message: string;
    data: []
}