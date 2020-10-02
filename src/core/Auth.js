import React from "react";
import AuthContext from "../configs/authContext";

export default class AuthComponent extends React.Component {
    constructor(props) {
        super(props);
        const user = localStorage.getItem("user");
        this.state = {
            user: user ? JSON.parse(user) : undefined,
            login: this.login,
            logout: this.logout,
        };
    }
    login = (user) => {
        localStorage.setItem("user", JSON.stringify(user));
        this.setState({ user: user });
    };
    logout = () => {
        localStorage.removeItem("user");
        this.setState({ user: undefined });
    };
    render() {
        return (
            <AuthContext.Provider value={this.state}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}