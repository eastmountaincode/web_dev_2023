const ConditionalOutputInline = () => { 
    const loggedIn = false;
    return (
        <div>
            {loggedIn && <h2>Welcome Inline 2nd</h2> } 
            {!loggedIn && <h2>Please login Inline 2nd</h2> }
        </div> 
    );
};
export default ConditionalOutputInline;