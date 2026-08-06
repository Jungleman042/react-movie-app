function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">🎬 MovieFlix</h1>

      <input
        type="text"
        placeholder="Search movies..."
        className="search"
      />
    </nav>
  );
}

export default Navbar;