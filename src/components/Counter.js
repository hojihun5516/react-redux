import React from 'react';
import {connect} from 'react-redux';

class Counter extends React.Component{
    render(){
        return (
            <h1>VALUE:{this.props.value}</h1>
        )
    }
}

let mapStateToProps = state =>{
    return {
        value: state.counter.value
    };
}
//connect 는 react component를 리덕스 스토어에 연결 해줍니다
// 이 함수의 리턴값은 특정 컴포넌트 클래스의 프롭스를 스토어의 데이터에 연결시켜주는 또다른 함수를 리턴합니다.
//리턴된 함수에 컴포넌트를 인수로 넣어 실행하면 기존 컴포넌트를 수정하는게 아니라 새로운 컴포넌트를 리턴합니다.
Counter = connect(mapStateToProps)(Counter);

export default Counter;