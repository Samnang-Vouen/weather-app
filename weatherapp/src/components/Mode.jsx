function Mode({ isDarkMode, toggleTheme }) {
  return (
    <div className="mode-container">
      <label className="toggle-switch">
        <input 
          type="checkbox" 
          checked={isDarkMode} 
          onChange={toggleTheme} 
        />
        <span className="slider"></span>
      </label>
      <span className="mode-label"><b>{isDarkMode ? "DARK MODE" : "LIGHT MODE"}</b></span>
    </div>
  );
}

export default Mode;
