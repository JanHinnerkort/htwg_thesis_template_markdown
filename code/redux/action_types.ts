
export type AuthAction = LoginAction | LogoutAction;

export type Action =
    AuthAction
    | TodoAction
    | FilterAction;
