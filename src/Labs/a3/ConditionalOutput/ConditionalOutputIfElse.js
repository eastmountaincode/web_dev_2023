const ConditionalOutputIfElse = () => { 
    const loggedIn = true;
    if ( loggedIn ) {
        return (<h2>Welcome If Else 1st</h2>);
    } else {
        return (<h2>Please login If Else 1st</h2>); 
    }
};
export default ConditionalOutputIfElse;