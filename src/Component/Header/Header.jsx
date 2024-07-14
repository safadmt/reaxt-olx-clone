import { Component } from "react";
import logoimage from "../../Assets/logos/76a0559e38785778f7204968d466a98b.png";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import './header.css'
class Header extends Component {
    state = {togglemenu : ""}
    handleToggle = () => {
        this.setState({togglemenu: this.state.togglemenu === "active" ? "" : "active"})
    }
    componentDidUpdate(prevProps , prevState) {
        console.log(this.state.togglemenu)
    }
  render() {
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
          <IoMenu size={25} className="none mt-2 hover:cursor-pointer" id="hambergar" onClick={this.handleToggle}/>
          <div className={`md:shrink md:flex md:justify-between  gap-60 nav-items ${this.state.togglemenu} `}>
            <div className="shrink sm:w-full">
              <div className="input-search-group flex bg-[#092230] w-full rounded border-2 border-[#092230]">
                <input
                  className="flex-1  outline-none border-none w-full px-3"
                  type="text"
                  placeholder="Search for Cars, Mobiles, Bikes, etc..."
                />
                <div
                  className="w-12 h-12 flex justify-center items-center hover:cursor-pointer"
                  style={{ maxWidth: "3rem" }}
                >
                  <FaSearch color="white" className="" />
                </div>
              </div>
            </div>
            <div>
              <ul className="nav-item flex justify-center items-center">
                <li className="mt-2">
                  <Link className="text-[#092230] underline underline-offset-8 font-bold text-lg">
                    Login
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
