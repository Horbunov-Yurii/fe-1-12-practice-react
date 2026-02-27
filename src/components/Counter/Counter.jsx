import React, { Component } from "react";


import style from "./Counter.module.css";
import { Ivent } from "../Ivent/Ivent";


 export class Counter extends  Component{

    //  constructor() {
    //      super()
    //      this.state = {}
     //  }

     static defultValue = {
         initialSate: 0,
     }

     state = {
         value: this.props.initialSate,

     }
     
     handlePluce = () =>{
        //     this.state.value += 1//так не можна робити
        //  this.setState({
        //      value: this.state.value + 1
        //  })
        //   this.setState({
        //     value: (this.state.value + 1),
        //   });
        //   this.setState({
        //     value: (this.state.value + 1),
        //   });
        //   this.setState({
        //     value: (this.state.value + 1),
        //    });
         
         this.setState((prevState) => {
             return {
                 value: prevState.value + 1
             }
         })
     }

     handleMinus = () => {
         this.setState((prevState) => ({value: prevState.value - 1}))
     }
     
     render() {//обов'язковий метод  відповідає за повернення jsx розмітки
         return (
           <div className={style.box}>
                 <span className={style.value}>{this.state.value}</span>
             <div className={style.wrapper}>
               <button onClick={this.handlePluce} type="button" className={style.btn}>Збільшити</button>
                     <button onClick={this.handleMinus} type="button" className={style.btn}>Зменшити</button>
             </div>
           </div>
         );
     }
}