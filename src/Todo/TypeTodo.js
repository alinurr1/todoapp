import React from 'react';

const styles = {
    margin: "5px"
}

const TypeTodo = ({changeType}) => {
    return (
        <>
            <button style={styles} className="btn btn-primary btn-sm" onClick={() => changeType("ALL")}> All </button>
            <button style={styles} className="btn btn-primary btn-sm" onClick={() => changeType("ACTIVE")}> Active </button>
            <button style={styles} className="btn btn-primary btn-sm" onClick={() => changeType("COMPLETED")}> Completed </button>
        </>
    );
}

export default TypeTodo;