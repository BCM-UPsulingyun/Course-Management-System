import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Header from "./components/Header";
import CourseList from "./components/CourseList";
import Footer from "./components/Footer";

function App() {
  // 1. useState: 管理状态
  const [courses, setCourses] = useState(() => {
    const savedCourses = localStorage.getItem("courses");
    if (savedCourses) {
      return JSON.parse(savedCourses);
    }
    return [
      { id: 1, title: "React 入门教程", desc: "学习 React 基础概念、组件化开发、JSX 语法等核心知识", category: "前端", completed: false },
      { id: 2, title: "JavaScript 进阶", desc: "深入理解原型链、闭包、异步编程等高级特性", category: "前端", completed: false },
      { id: 3, title: "CSS 布局实战", desc: "掌握 Flex、Grid 等现代布局技术，实现响应式设计", category: "前端", completed: false },
      { id: 4, title: "Python 数据分析", desc: "使用 Pandas 和 NumPy 进行数据处理与分析", category: "后端", completed: false },
    ];
  });

  const [newCourse, setNewCourse] = useState({ title: "", desc: "", category: "前端" });
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("全部");
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ title: "", desc: "", category: "前端" });
  const [errorMsg, setErrorMsg] = useState("");

  // 2. useRef: 获取 DOM 元素引用，用于自动聚焦
  const inputRef = useRef(null);

  // 3. useEffect: 处理副作用
  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
  }, [courses]);

  // 当组件首次加载或添加课程后，让输入框自动聚焦
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [courses]);

  // 4. useCallback: 缓存函数
  const handleLearn = useCallback((id, title) => {
    alert(`开始学习：《${title}》\n祝您学习愉快！`);
  }, []);

  const handleAddCourse = useCallback(() => {
    if (!newCourse.title.trim()) {
      setErrorMsg("课程名称不能为空！");
      return;
    }
    if (!newCourse.desc.trim()) {
      setErrorMsg("课程简介不能为空！");
      return;
    }

    const newId = Math.max(0, ...courses.map(c => c.id)) + 1;
    const courseToAdd = {
      id: newId,
      title: newCourse.title.trim(),
      desc: newCourse.desc.trim(),
      category: newCourse.category,
      completed: false
    };

    setCourses(prevCourses => [...prevCourses, courseToAdd]);
    setNewCourse({ title: "", desc: "", category: "前端" });
    setErrorMsg("");
  }, [newCourse, courses]);

  const handleDeleteCourse = useCallback((id) => {
    if (window.confirm("确定要删除这门课程吗？")) {
      setCourses(prevCourses => prevCourses.filter(course => course.id !== id));
    }
  }, []);

  const handleStartEdit = useCallback((course) => {
    setEditingId(course.id);
    setEditForm({
      title: course.title,
      desc: course.desc,
      category: course.category
    });
  }, []);

  const handleSaveEdit = useCallback(() => {
    if (!editForm.title.trim()) {
      setErrorMsg("课程名称不能为空！");
      return;
    }
    setCourses(prevCourses =>
      prevCourses.map(course =>
        course.id === editingId
          ? { ...course, title: editForm.title.trim(), desc: editForm.desc.trim(), category: editForm.category }
          : course
      )
    );
    setEditingId(null);
    setErrorMsg("");
  }, [editForm, editingId]);

  const handleCancelEdit = useCallback(() => {
    setEditingId(null);
    setErrorMsg("");
  }, []);

  const handleToggleComplete = useCallback((id) => {
    setCourses(prevCourses =>
      prevCourses.map(course =>
        course.id === id ? { ...course, completed: !course.completed } : course
      )
    );
  }, []);

  // 5. useMemo: 缓存计算结果
  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            course.desc.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "全部" || course.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [courses, searchTerm, selectedCategory]);

  const totalCount = courses.length;
  const completedCount = courses.filter(c => c.completed).length;
  const currentCount = filteredCourses.length;

  const categories = ["全部", "前端", "后端", "数据库", "其他"];

  return (
    <div className="app">
      <Header title="📚 课程管理" courseCount={totalCount} completedCount={completedCount} />

      {/* 搜索和筛选区域 */}
      <div className="search-filter">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="搜索课程..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filter-box">
          <span className="filter-icon">🏷️</span>
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* 添加课程表单 */}
      <div className="add-course-section">
        <h3>✨ 添加新课程</h3>
        <div className="add-box">
          <input
            ref={inputRef}
            type="text"
            placeholder="课程名称 *"
            value={newCourse.title}
            onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
            maxLength="50"
          />
          <input
            type="text"
            placeholder="课程简介 *"
            value={newCourse.desc}
            onChange={(e) => setNewCourse({ ...newCourse, desc: e.target.value })}
          />
          <select value={newCourse.category} onChange={(e) => setNewCourse({ ...newCourse, category: e.target.value })}>
            <option value="前端">前端</option>
            <option value="后端">后端</option>
            <option value="数据库">数据库</option>
            <option value="其他">其他</option>
          </select>
          <button onClick={handleAddCourse}>➕ 添加课程</button>
        </div>
        {errorMsg && <div className="error-msg">{errorMsg}</div>}
      </div>

      {/* 统计信息 */}
      <div className="stats">
        <span>📊 总课程: {totalCount}</span>
        <span>✅ 已完成: {completedCount}</span>
        <span>📌 当前显示: {currentCount}</span>
      </div>

      {/* 课程列表 */}
      <CourseList
        courses={filteredCourses}
        onLearn={handleLearn}
        onDelete={handleDeleteCourse}
        onEdit={handleStartEdit}
        onToggleComplete={handleToggleComplete}
        editingId={editingId}
        editForm={editForm}
        onEditChange={setEditForm}
        onSaveEdit={handleSaveEdit}
        onCancelEdit={handleCancelEdit}
      />

      <Footer />
    </div>
  );
}

export default App;