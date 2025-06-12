
function Button(){
    const styles = {
        backgroundColor:" #1580eb",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
        color:" #ffffff",
    }//inline styling
    return(<button style={styles}>Click Me</button>);
}

export default Button;