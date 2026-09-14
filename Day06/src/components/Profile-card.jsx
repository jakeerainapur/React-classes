import "./profile.css";
import image from "./new-pic.jpeg";

function ProfileCard() {
    return (
        <div className="profile-card">

            <img className="profile-img" src={image} alt="profile" />

            <h1>Jakeer Ainapur</h1>

            <h3>React Developer I build responsive and user-friendly web applications using React, JavaScript, HTML, and CSS.I enjoy creating reusable components and learning new web technologies.</h3>

            <p>
                I am a React Web Developer.
            </p>

            <div className="social">
                <a href="#">Instagram</a>
                <a href="#">LinkedIn</a>
                <a href="#">Portfolio</a>
            </div>

        </div>
    );
}

export default ProfileCard;