import React from 'react'
import { supabase } from '../../Supabase/supabase';

class Login extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            loginInfo : {
                email: "",
                password: ""
            },
            error: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this)
    }
    handleChange (e) {
        const {name, value} = e.target;
        this.setState(prevState=> ({
            loginInfo: {
                ...prevState.loginInfo,
                [name] : value
            }
        }))
        
    }

    async handleLogin () {
        const {email,password} = this.state.loginInfo;
        if(!email || !password) {
            this.setState({error: "Required all field"})
            return;
        }
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        })

        if(error) {
            console.log(error)
        }
        console.log(data)

    }
    render () {
        return <div>
            
            <div>
            <div className='font-bold text-xl mb-2'>Login</div>
                <div className='border-2 border-[#092230] px-6 py-4 w-full mb-2'>
                    <input 
                    type="text" 
                    name="email" 
                    id="email" 
                    value={this.state.loginInfo.email}
                    onChange={this.handleChange}
                    className='outline-none  text-gray-500 border-none font-medium text-lg w-full'/>
               
                </div>
                <div className='border-2 border-[#092230] px-6 py-4 mb-2 relative'>
                    <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    value={this.state.loginInfo.password}
                    onChange={this.handleChange}
                    className='outline-none text-gray-500 border-none font-medium text-lg w-full'/>
                </div>
                <div>
                    <span className='text-center text-red-600 font-bold text-[13px]'>{this.state.error}</span>
                    <button 
                    className='border-2 py-4 border-[#092230] bg-[#092230] text-white  font-medium text-lg w-full'
                    onClick={this.handleLogin}>Login</button>
                </div>
            </div>
        </div>
    }
}

export default Login;