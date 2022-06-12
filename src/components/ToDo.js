import React from "react";


class ToDo extends React.Component{
    state={
        done: this.props.task.done
    }
    toggleDone=()=>{
        this.setState(prevState=>({
            done:!prevState.done
        }))
        this.props.onToggleDone(this.props.task.id)
    }
    render(){
        return (
            <li className={"list-group-item d-flex align-tiems-center "+ (this.state.done? 'bg-success':null)}>
                {this.props.task.name}
                <button className={"btn btn-sm ml-auto " + (this.state.done? 'bg-success':'btn-outline-success')} onClick={()=>this.toggleDone()}>&#x2713;</button>
            </li>
        )
    }
}
export default ToDo