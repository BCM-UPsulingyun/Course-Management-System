import React from 'react';

const MemberHome = () => {
  // 模拟数据
  const members = [
    { name: '张三', sector: '经济界', title: '主任委员' },
    { name: '李四', sector: '教育界', title: '委员' },
    { name: '王五', sector: '医药卫生界', title: '委员' },
  ];

  return (
    <div className="page-container">
      <div className="page-title">委员之家</div>
      <div className="grid-container">
        {members.map((m, i) => (
          <div key={i} className="card">
            <h3>{m.name}</h3>
            <p><strong>界别：</strong>{m.sector}</p>
            <p><strong>职务：</strong>{m.title}</p>
            <button className="btn">查看档案</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberHome;