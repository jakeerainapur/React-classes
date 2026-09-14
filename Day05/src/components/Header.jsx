 export default function Header() {
  return (
    <header className="header">
      <img
        className="profile-image"
        src="/profile_picture.jpeg"
        alt="Profile"
      />

      <h1>My Profile</h1>

      <nav>
        <a href="#home">Home</a>
        <a href="#rules">Rules of JSX</a>
        <a href="#about">About</a>
      </nav>
    </header>
  );
}

