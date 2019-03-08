import React from 'react';

class TodoItem extends React.Component{
    
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }
                render(){
                    console.log(this.props)
        return(
            <div>
                {this.props.id}
                {this.props.text}
            </div>
        )
    }
}
export default TodoItem