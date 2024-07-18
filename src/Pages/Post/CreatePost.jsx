import React ,{Component} from "react";
import { supabase } from "../../Supabase/supabase";
import { v4 as uuidv4 } from 'uuid';

class CreatePost extends Component {
    constructor (props) {
        super(props)
        this.state = {
            product_info: {
                product_name: "",
                price: "",
            place : "",
            year_of_registration : "",
            kilometer_run : "",
            small_description: "",
            brief_description : "",
            image: ""
            },
            warning_msg: ""
            
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    
    async handleSubmit (e) {
        e.preventDefault();
        const {product_name, place,year_of_registration,price,
             kilometer_run, small_description,brief_description, image} = this.state.product_info

        if( !product_name || !price || !place || !year_of_registration ||     !kilometer_run || !small_description || !brief_description || !image
        ) {
            this.setState({warning_msg:"Required all field"})
            return
        }
        
        const {data,error}= await supabase.from('products')
        .insert({
            product_name,
            price,
             place, 
             year_of_registration, 
             kilometor_run:kilometer_run, 
             small_description, 
             brief_description,
              imageid:image
            })

        if(error) {
            console.log(error)
            return
        }
            this.setState({
                product_info: {
                    product_name: "",
                    price: "",
                place : "",
                year_of_registration : "",
                kilometer_run : "",
                small_description: "",
                brief_description : "",
                image: ""
                }
            })
        
        
    }

    handleChange (e) {

        const {name,value} = e.target;
    
        this.setState(prevState=> ({
            product_info: {
                ...prevState.product_info,
                [name] : value
            }
        }))
    }   
    render() {
        
        return <div className="mt-20 py-10">
            <div className="w-6/12 mx-auto">
            <img src="" alt="" />
                <div className="py-4 text-center font-semibold text-2xl">Post your product</div>
               <form action="" onSubmit={this.handleSubmit}>
                <label htmlFor="" className="">Product Name</label>
                <input 
                type="text" 
                name="product_name" 
                id="product_name"
                value={this.state.product_info.product_name}
                onChange={this.handleChange}
                className="border mb-4 outline-indigo-400 border-gray-500 rounded px-4 py-2 font-medium text-xl text-gray-500 w-full"
                />
                <label htmlFor="" className="">Price</label>
                <input 
                type="number" 
                name="price" 
                id="price"
                value={this.state.product_info.price}
                onChange={this.handleChange}
                className="border mb-4 outline-indigo-400 border-gray-500 rounded px-4 py-2 font-medium text-xl text-gray-500 w-full"
                />
                <label htmlFor="" className="">Place</label>
                <input 
                type="text" 
                name="place" 
                id="place"
                onChange={(this.handleChange)}
                className="border mb-4 outline-indigo-400 border-gray-500 rounded px-4 py-2 font-medium text-xl text-gray-500 w-full"
                />
                <label htmlFor="" className="">Year of Registration</label>
                <input 
                type="number" 
                name="year_of_registration" 
                id="year_of_registration"
                onChange={this.handleChange}
                className="border mb-2 outline-indigo-400 border-gray-500 rounded px-4 py-2 font-medium text-gray-500 w-full"
                />
                <label htmlFor="" className="">Kilometer Run</label>
                <input 
                type="number" 
                name="kilometer_run" 
                id="kilometer_run"
                onChange={this.handleChange}
                className="border mb-4 outline-indigo-400 border-gray-500 rounded px-4 py-2 font-medium text-gray-500 w-full"
                />
                <label htmlFor="" className="">Small description</label>
                <input 
                type="text" 
                name="small_description" 
                id="small_description"
                onChange={this.handleChange}
                className="border mb-4 outline-indigo-400 border-gray-500 rounded px-4 py-2 font-medium  text-gray-500 w-full"
                />
                <label htmlFor="" className="">Brief description</label>
                <textarea name="brief_description"
                className="border mb-4 outline-indigo-400 border-gray-500 rounded px-4 py-2 font-medium  text-gray-500 w-full"
                onChange={this.handleChange}/>
                <label htmlFor="" className="">Image link</label>
                 <input 
                type="url" 
                name="image" 
                id="image"
                onChange={this.handleChange}
                className="border mb-4 outline-indigo-400 border-gray-500 rounded px-4 py-2 font-medium text-gray-500 w-full"
                />
                <span className="text-red-500 font-medium text-[13px] text-center"></span>
                <button 
                type="submit"
                className="px-4 py-2 font-medium text-xl bg-[#092230] text-white w-full">Post</button>
                </form> 
            </div>
        </div>
    }
}

export default CreatePost;