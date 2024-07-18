import { Component } from "react";
import Card from "../../Component/Main/Card";
import './main.css'
import { supabase } from "../../Supabase/supabase";
import { CommonContext } from "../../context/CommonContext";



class Main extends Component {
    static contextType = CommonContext;
    constructor(props) {
        super(props)
        this.state = {
             products : [],
             error : "",
             loading: false
        }
    }
    componentDidMount () {
        this.setState({loading:true})
        this.fetchData();
    }
    async fetchData () {
        const {state, dispatch} = this.context;
        const { data, error } = await supabase
        .from('products')
        .select()
        if(error) {
            this.setState({error: "Error fetching info"})
            return
        }
        this.setState({loading:false})
        dispatch({type: "set_products" , payload: data})
    }


    render () {
        const {state} = this.context
        return <div className="mt-20">
            {this.state.loading ? <div className="px-20 pt-8">Loading...</div> : 
            <div>
            <div>

            </div>
            <div className="display-item-parent  px-20">
                <div className="font-bold text-2xl mb-4 text-zinc-900">Fresh recommendations</div>
                <div className="grid md:grid-cols-4 gap-4  display-items">
                    {state.filteredproducts.map((item,index)=> {
                        return <Card product={item} key={item.id}/>
                    })}
                    
                </div>
            </div>
            </div>
    }
        </div>
    }
}

export default Main;