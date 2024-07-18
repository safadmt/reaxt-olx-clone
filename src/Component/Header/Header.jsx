import { Component } from "react";
import logoimage from "../../Assets/logos/76a0559e38785778f7204968d466a98b.png";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import './header.css'
import { CommonContext } from "../../context/CommonContext";
import { supabase } from "../../Supabase/supabase";
import SearchInput from "./SearchInput";


class Header extends Component {
    static contextType = CommonContext;
   
    componentDidMount() {
      supabase.auth.getSession().then(resp=> {
        if(resp.data.session) {
          this.setSession(resp.data.session)
        }
      })
      .catch(err=> {
        console.log(err)
      })
    }
    
    
    setSession(info) {
      const {state, dispatch} = this.context
      dispatch({type:"set_session", payload: info})
    }
    
  render() {
    const {state, dispatch} = this.context
    function handleToggleMenu () {
      dispatch({type:"side_bar_open", payload: state.isSidebarOpen === "authactive" ? "" : "authactive"})
    }
    return (
      <div className="nav-bar bg-gray-300 px-5 py-3 fixed top-0 left-0 w-screen box-border">
        <nav className="nav-container flex justify-between pe-8">
          <div>
            <img
              src={logoimage}
              alt="header"
              className="min-w-16 max-w-16 mix-blend-multiply"
            />
          </div>
          <IoMenu size={25} className="none mt-2 hover:cursor-pointer" id="hambergar" onClick={handleToggleMenu}/>
          <div className={`md:shrink md:flex md:justify-between  gap-60 nav-items ${state.isSidebarOpen}`}>
            <div className="shrink sm:w-full">
              <SearchInput/>
            </div>
            <div>
              <ul className="nav-item flex justify-center items-center">
                <li className="mt-2 me-4">
                  <Link className="text-[#092230] underline underline-offset-8 font-bold text-lg"
                  onClick={()=> {dispatch({type: "auth_bar_open", payload:"active"})}}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to={'/post'}>
                    <div className="bg-white text-gray-950 gap-1 rounded-full flex justify-center items-baseline font-medium px-6 text-center py-2 border-none">
                      <div>
                      <FaPlus size={12}/>
                      </div>
                      <div>
                        <button className="">SELL</button>

                      </div>
                      </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
