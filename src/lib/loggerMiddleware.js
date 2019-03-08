const loggerMiddleware = store => next => action =>{
    console.log('현재상태', store.getState());
    
    console.log('액션',action);

    const result = next(action);

    console.log('다음상태', store.getState());
    console.log('\n');

    return result;//반환하는 값은 store.dispatch(ACTION_TYPE)했을때의 결과로 설정된다

}
export default loggerMiddleware;