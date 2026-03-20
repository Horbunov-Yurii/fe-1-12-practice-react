import React, { Component } from "react";
import style from "./FormInfo.module.css"
export class FormInfo extends Component{
state={
    login: "test@gmail.com",
    password: ""
}
    // handleLogin = (evt) => {
    //    this.setState({login: evt.target.value})
    // }

    // handlePassword = (evt) => {
    //     this.setState({password: evt.target.value})
    // }
    handleChange = (evt) => {
        const { name, value } = evt.target
        this.setState({
            [name]: value,

        })
    }

     handleSubmit = (evt) => {
         evt.preventDefault()
         const { login, password } = this.state
         console.log("login:", login);
         console.log("password:", password);
     };
    
    render() {
        const {login} = this.state
        return <form onSubmit={this.handleSubmit} className={style.form}>
            <h2 className={style.title}>Логінізація</h2>
            <label>
                <input value={login} onChange={this.handleChange} className={style.input} type="text" name="login" placeholder="введіть логін"/>
            </label>
            <label>
                <input onChange={this.handleChange} className={style.input} type="text" name="password" placeholder="введіть пароль"/>
            </label>
            <button type="submit" className={style.btn}>Зареєструватись</button>
        </form>;
      
    }
}