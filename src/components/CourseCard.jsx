function CourseCard({ 
  id, 
  title, 
  desc, 
  category, 
  completed, 
  onLearn, 
  onDelete, 
  onEdit, 
  onToggleComplete,
  isEditing,
  editForm,
  onEditChange,
  onSaveEdit,
  onCancelEdit
}) {
  return (
    <div className={`card ${completed ? 'completed' : ''}`}>
      {!isEditing ? (
        <>
          <span className="category-tag">{category}</span>
          <h3>{title}</h3>
          <p>{desc}</p>
          <div className="card-buttons">
            <button onClick={() => onLearn(id, title)}>📖 学习</button>
            <button onClick={() => onToggleComplete(id)}>
              {completed ? '↩️ 撤销' : '✅ 完成'}
            </button>
            <button onClick={() => onEdit({ id, title, desc, category })}>✏️ 编辑</button>
            <button onClick={() => onDelete(id)}>🗑️ 删除</button>
          </div>
        </>
      ) : (
        <div className="edit-form">
          <h3>编辑课程</h3>
          <input
            type="text"
            value={editForm.title}
            onChange={(e) => onEditChange({ ...editForm, title: e.target.value })}
            placeholder="课程名称"
          />
          <input
            type="text"
            value={editForm.desc}
            onChange={(e) => onEditChange({ ...editForm, desc: e.target.value })}
            placeholder="课程简介"
          />
          <select
            value={editForm.category}
            onChange={(e) => onEditChange({ ...editForm, category: e.target.value })}
          >
            <option value="前端">前端</option>
            <option value="后端">后端</option>
            <option value="数据库">数据库</option>
            <option value="其他">其他</option>
          </select>
          <div className="edit-buttons">
            <button onClick={onSaveEdit}>💾 保存</button>
            <button onClick={onCancelEdit}>❌ 取消</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseCard;