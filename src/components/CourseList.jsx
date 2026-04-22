import CourseCard from "./CourseCard";

function CourseList({ 
  courses, 
  onLearn, 
  onDelete, 
  onEdit,
  onToggleComplete,
  editingId,
  editForm,
  onEditChange,
  onSaveEdit,
  onCancelEdit
}) {
  if (courses.length === 0) {
    return (
      <div className="empty-state">
        <span style={{ fontSize: "3rem", display: "block", marginBottom: "10px" }}>📖</span>
        <p>暂无课程，添加一门新课程吧~</p>
      </div>
    );
  }

  return (
    <div className="course-list">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          id={course.id}
          title={course.title}
          desc={course.desc}
          category={course.category}
          completed={course.completed}
          onLearn={onLearn}
          onDelete={onDelete}
          onEdit={onEdit}
          onToggleComplete={onToggleComplete}
          isEditing={editingId === course.id}
          editForm={editForm}
          onEditChange={onEditChange}
          onSaveEdit={onSaveEdit}
          onCancelEdit={onCancelEdit}
        />
      ))}
    </div>
  );
}

export default CourseList;