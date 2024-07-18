import React from 'react';
import { supabase } from '../../Supabase/supabase';

class Signup extends React.Component{
        
    constructor (props) {
        super(props)
        this.state = {
            signupInfo : {
                email: "",
                password: ""     
            },
            error : ""
            
        }
        this.handleSignup = this.handleSignup.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    
    async handleSignup () {
        if(!this.state.signupInfo.email || !this.state.signupInfo.password) {
            this.setState({["error"]: "Required all field"})
            return
        }
        const { data, error } = await supabase.auth.signUp({
            email: this.state.signupInfo.email,
            password: this.state.signupInfo.password,
            options: {
              emailRedirectTo: 'http://localhost:1234',
            },
          })

        if(error) {
            console.log(error)
        }
        console.log(data)

    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            signupInfo: {
                ...prevState.signupInfo,
                [name]: value
            }
        }));
    }
    render() {
       
        return (<div>
            <div>
                <div className='font-bold text-xl mb-2'>Signup</div>
                <div className='border-2 border-[#092230] px-6 py-4 w-full mb-2'>
                    <input 
                    type="text" 
                    name="email" 
                    id="email" 
                    value={this.state.signupInfo.email}
                    onChange={this.handleChange}
                    className='outline-none  text-gray-500 border-none font-medium text-lg w-full'/>
               
                </div>
                <div className='border-2 border-[#092230] px-6 py-4 mb-2 relative'>
                    <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    value={this.state.signupInfo.password}
                    onChange={this.handleChange}
                    className='outline-none text-gray-500 border-none font-medium text-lg w-full'/>
                </div>
                <div>
                    <span className='text-center text-red-600 font-bold text-[13px]'>{this.state.error}</span>
                    <button 
                    className='border-2 py-4 border-[#092230] bg-[#092230] text-white font-medium text-lg w-full'
                    onClick={this.handleSignup}>Signup</button>
                </div>
            </div>
        </div>)
    }
}

export default Signup;