import { Component } from "react";
import Card from "../../Component/Main/Card";
import './main.css'
class Main extends Component {
    // constructor(props) {
    //     this.state = {

    //     }
    // }

    componentDidMount() {
        console.log("hello main")
    }
    render () {
        return <div className="mt-20">
            <div>

            </div>
            <div className="display-item-parent  px-20">
                <div className="font-bold text-2xl mb-4 text-zinc-900">Fresh recommendations</div>
                <div className="grid md:grid-cols-4 gap-4  display-items">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>

                </div>
            </div>
        </div>
    }
}

export default Main;