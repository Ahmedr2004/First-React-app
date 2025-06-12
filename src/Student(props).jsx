
function Student(prop){

    const styles = {
        fontFamily : "Arial, sans-serif",
        fontSize : "2em",
        padding : "10px",
        border : "1px solid #ccc",
    }
    const styles2 = {
        margin : "0",
    }
    const message = "Hello, I am a student!";
    return(
        <div style={styles}>
            <p style={styles2}>Name: {prop.name} <br />{prop.isStudent? message : "Not a Student"}</p>
            <p style={styles2}>Age: {prop.age}</p>
            <p style={styles2}>Student: {prop.isStudent ? "Yes" : "No"}</p>{/*boolean do not display so use ternary operator*/}
        </div>
    );
}

export default Student;