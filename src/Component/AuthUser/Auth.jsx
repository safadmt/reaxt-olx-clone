import React from "react";
import { IoMdClose } from "react-icons/io";
import Signup from "./Signup";
import './style.css'
import { CommonContext } from "../../context/CommonContext";
import Login from "./Login";


class Auth extends React.Component {
    static contextType = CommonContext;
    constructor(props) {
      super(props)
      this.state = {
        signin : true
      }
    }
  render() {
    const {state, dispatch} = this.context;
    
    return (
      
        <div className={state.isAuthbarOpen}>
          <div className="auth bg-white px-8 py-4 w-96">
            <div className="py-2 ">
              <IoMdClose size={25} 
              color="black" 
              className="ml-auto hover:cursor-pointer" 
              onClick={()=> {dispatch({type: "auth_bar_open", payload:""})}}/>
            </div>

            {this.state.signin === true ? 
            <div className="mt-10">
              <div className="font-bold text-gray-500 text-[14px] text-center mb-4">Creae an accout ? 
                <span className="text-zinc-900 hover:cursor-pointer" onClick={()=> this.setState({signin:false})}> Signup</span></div>
              <Login/>
            </div> : 
            <div className="mt-10">
              <div className="font-bold text-gray-500 text-[14px] text-center mb-4">Already have an accout ? 
                <span className="text-zinc-900 hover:cursor-pointer" onClick={()=> this.setState({signin:true})}> Sigin</span></div>
              <Signup />
            </div>}
          </div>
          <div className="" 
          id="auth-sidebar-overlay"  onClick={()=> {dispatch({type: "auth_bar_open", payload:""})}}> 

          </div>
        </div>
     
    );
  }
}

export default Auth;
