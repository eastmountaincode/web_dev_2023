function PassingDataOnEvent() {
    const add = (a, b) => {
      alert(`${a} + ${b} = ${a + b}`);
    };
    return (
      <div>
        <h2>Passing Data on Event</h2>
        <button 
            className="btn btn-primary"
            onClick={() => add(100, 3)}> 
            Pass 100 and 3 to add() 
        </button>
      </div>
  ); }
  export default PassingDataOnEvent;