import React from 'react';

const SectorInfo = () => {
  const sectors = ['中共界', '经济界', '农业界', '教育界', '科技界', '医卫界', '文艺界'];

  return (
    <div className="page-container">
      <div className="page-title">界别基本情况</div>
      <table style={{width: '100%', borderCollapse: 'collapse'}}>
        <thead>
          <tr style={{borderBottom: '2px solid #333'}}>
            <th style={{textAlign: 'left', padding: '10px'}}>界别名称</th>
            <th style={{textAlign: 'left', padding: '10px'}}>委员人数</th>
            <th style={{textAlign: 'left', padding: '10px'}}>召集人</th>
          </tr>
        </thead>
        <tbody>
          {sectors.map((sec, i) => (
            <tr key={i} style={{borderBottom: '1px solid #eee'}}>
              <td style={{padding: '10px'}}>{sec}</td>
              <td style={{padding: '10px'}}>{20 + i}</td>
              <td style={{padding: '10px'}}>召集人{i+1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SectorInfo;