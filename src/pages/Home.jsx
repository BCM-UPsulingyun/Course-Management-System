import React from 'react';

const Home = () => {
  return (
    <div className="page-container">
      <div className="page-title">平台概览</div>
      <div style={{display: 'flex', gap: '20px'}}>
        <div style={{flex: 2}}>
          <h2>欢迎进入政协委员通</h2>
          <p>这里是委员履职、学习交流、服务群众的综合性数字化平台。</p>
        </div>
        <div style={{flex: 1, border: '1px solid #ddd', padding: '20px'}}>
          <h3>通知公告</h3>
          <ul>
            <li>关于提交2026年提案的通知</li>
            <li>市政协年度全体会议预告</li>
            <li>委员履职积分管理办法更新</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;