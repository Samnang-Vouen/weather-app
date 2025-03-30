function Mode() {
  return (
    <div className="mode-container">
      <label className="toggle-switch">
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
      <span className="mode-label"><b>DARK MODE</b></span>
    </div>
  )
}
export default Mode;