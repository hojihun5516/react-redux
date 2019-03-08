import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../module/CalcActions'
class Calculator extends React.Component{        
    shouldComponentUpdate(nextProps, nextState){
        return this.props.result !== nextProps.result
    }
    // state={
    //     result:''
    // }
    // componentDidMount(){
    //     this.setState({
    //         result:this.props.result
    //     })
    // }

    // UNSAFE_componentWillReceiveProps(nextProps) {
        // console.log(nextProps);
    // }
    render(){
        console.log(this.props);
        return(
            <div>
                결과값 : <input type='text' value={this.props.result} />                
                <input type='button' value="+" onClick={this.props.handleAdd} />
                <input type='button' value="thunk+" onClick={this.props.handleThunkAdd} />
                <input type='button' value="-" onClick={this.props.handleSub} />
                diff 수정 : <input type='text' onChange={this.props.handleSetDiff}/>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        diff: state.calcReducer.diff,
        result: state.calcReducer.result
    }
}

const mapDispatchProps = (dispatch) =>{
    return{
        handleThunkAdd : () => {setTimeout(() => dispatch(actions.thunkAdd()), 1000)},
        handleAdd : () => {
            dispatch(actions.add())
        },
        handleSub : () =>{dispatch(actions.sub())},
        handleSetDiff: (e) =>{dispatch(actions.setDiff(e))}
    }
}
export default connect (mapStateToProps,mapDispatchProps)(Calculator)