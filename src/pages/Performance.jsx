import React from 'react';

const Performance = () => {
  return (
    <div className="page-container">
      <div className="page-title">委员履职平台</div>
      <div className="grid-container">
        <div className="card">
          <h3>提交提案</h3>
          <p>在线撰写并提交年度提案。</p>
          <button className="btn">去提交</button>
        </div>
        <div className="card">
          <h3>反映社情民意</h3>
          <p>上传调研中发现的群众急难愁盼问题。</p>
          <button className="btn">去反映</button>
        </div>
        <div className="card">
          <h3>履职积分查询</h3>
          <p>查看您的年度履职得分与排名。</p>
          <button className="btn">查询</button>
        </div>
      </div>
    </div>
  );
};

export default Performance;