function Header({ title, courseCount, completedCount }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <p>🌱 记录每一门课程，收获每一份成长</p>
      {courseCount !== undefined && (
        <div className="header-stats" style={{ marginTop: "10px", fontSize: "0.9rem" }}>
          已添加 {courseCount} 门课程，完成 {completedCount} 门
        </div>
      )}
    </header>
  );
}

export default Header;