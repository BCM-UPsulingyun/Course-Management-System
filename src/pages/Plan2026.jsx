import React from 'react';

const Plan2026 = () => {
  return (
    <div className="page-container">
      <div className="page-title">2026年履职计划</div>
      <div className="card">
        <h3>第一季度计划</h3>
        <ul>
          <li>1月：参加全体委员会议</li>
          <li>2月：提交关于城市交通优化的提案</li>
          <li>3月：开展“送医下乡”活动</li>
        </ul>
      </div>
      <div className="card" style={{marginTop: '20px'}}>
        <h3>年度目标</h3>
        <p>1. 提交高质量提案 2 件</p>
        <p>2. 参加界别活动不少于 4 次</p>
        <p>3. 联系服务群众不少于 20 人次</p>
      </div>
    </div>
  );
};

export default Plan2026;