
import"./profilecard.css";
 export default function ProfileCard(){
    return(
        <div className="profile-card">
            <img  className="avatar"
            src="C:\Users\HP\Pictures\profile_picture.jpeg" alt="Profile" />
            <h2 className="name">Jakeer</h2>
            <h3 className="title">Web Developer</h3>
            <p className="bio">Passionate web developer with experience in creating dynamic and user-friendly websites.</p>
              
              <div>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </div>
    )
}