import profilePic from './assets/photo1.jpeg';
function Card(){

    return(

        <div className="card">
        <img className="card-image" src={profilePic} alt="Profile picture" />
        <h2>Mohammed Ahmed</h2>
        <p>Student Computer engineering</p>
        </div>
    );
}

export default Card;