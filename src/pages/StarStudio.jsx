import React from 'react';

const StarStudio = () => {
  return (
    <div className="page-container">
      <div className="page-title">星级委员工作室风采</div>
      <div className="grid-container">
        <div className="card">
          <img src="https://via.placeholder.com/300x150?text=Studio+1" alt="工作室" style={{width:'100%'}}/>
          <h3>张三委员工作室（五星级）</h3>
          <p>特色：法律服务进社区</p>
        </div>
        <div className="card">
          <img src="https://via.placeholder.com/300x150?text=Studio+2" alt="工作室" style={{width:'100%'}}/>
          <h3>李四委员工作室（四星级）</h3>
          <p>特色：医疗健康咨询</p>
        </div>
      </div>
    </div>
  );
};

export default StarStudio;