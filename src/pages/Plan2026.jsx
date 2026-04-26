import React from 'react';

const Plan2026 = () => {
  return (
    <div className="page-container" style={styles.container}>
      <div className="page-title" style={styles.title}>2026年履职计划</div>

      {/* 第一部分：各界别履职计划 */}
      <div className="card" style={styles.card}>
        <h3 style={styles.mainTitle}>2026年各界别履职计划</h3>
        
        <table style={styles.table}>
          <thead>
            <tr style={styles.headerRow}>
              <th style={{...styles.th, width: '15%'}}>界别</th>
              <th style={{...styles.th, width: '45%'}}>活动名称</th>
              <th style={{...styles.th, width: '20%'}}>活动类型</th>
              <th style={{...styles.th, width: '20%'}}>拟召开时间</th>
            </tr>
          </thead>
          
          <tbody>
            {/* 工商联界别 */}
            <tr>
              <td rowSpan="2" style={styles.td}>工商联界别</td>
              <td style={styles.td}>营商环境专项调研协商</td>
              <td style={styles.td}>专题协商</td>
              <td style={styles.td}>7月</td>
            </tr>
            <tr>
              <td style={styles.td}>委员企业现代治理互学活动</td>
              <td style={styles.td}>主题活动</td>
              <td style={styles.td}>12月</td>
            </tr>

            {/* 科技、科协界别 */}
            <tr>
              <td rowSpan="2" style={styles.td}>科技、科协界别</td>
              <td style={styles.td}>开展关于推进OPC发展的调研</td>
              <td style={styles.td}>专题调研</td>
              <td style={styles.td}>3月</td>
            </tr>
            <tr>
              <td style={styles.td}>开展关于加快推进科技创新和产业创新深度融合的协商会</td>
              <td style={styles.td}>专题协商</td>
              <td style={styles.td}>10月</td>
            </tr>

            {/* 侨、台界别 */}
            <tr>
              <td rowSpan="3" style={styles.td}>侨、台界别</td>
              <td style={styles.td}>“侨助发展 AI赋能经济”——走进群核科技</td>
              <td style={styles.td}>主题活动</td>
              <td style={styles.td}>4月</td>
            </tr>
            <tr>
              <td style={styles.td}>“融通世界 文化互鉴”活动</td>
              <td style={styles.td}>主题活动</td>
              <td style={styles.td}>6月</td>
            </tr>
            <tr>
              <td style={styles.td}>侨助发展专题协商会</td>
              <td style={styles.td}>专题协商</td>
              <td style={styles.td}>9月</td>
            </tr>

            {/* 新闻文体界别 */}
            <tr>
              <td rowSpan="2" style={styles.td}>新闻文体界别</td>
              <td style={styles.td}>上城区人文经济创新发展专题协商会</td>
              <td style={styles.td}>专题协商</td>
              <td style={styles.td}>8月</td>
            </tr>
            <tr>
              <td style={styles.td}>宋韵文化“两创”交流分享活动</td>
              <td style={styles.td}>参观交流</td>
              <td style={styles.td}>10月</td>
            </tr>

            {/* 经济界别 */}
            <tr>
              <td rowSpan="2" style={styles.td}>经济界别</td>
              <td style={styles.td}>开局“十五五”——经济高质量发展专题协商会</td>
              <td style={styles.td}>专题协商</td>
              <td style={styles.td}>4月</td>
            </tr>
            <tr>
              <td style={styles.td}>创新高地专题调研活动</td>
              <td style={styles.td}>主题活动</td>
              <td style={styles.td}>9月</td>
            </tr>

            {/* 环境资源和农业界别 */}
            <tr>
              <td rowSpan="2" style={styles.td}>环境资源和农业界别</td>
              <td style={styles.td}>“城村共生绿美共富”城乡融合体验实践分享会</td>
              <td style={styles.td}>主题活动</td>
              <td style={styles.td}>4月</td>
            </tr>
            <tr>
              <td style={styles.td}>上城去城市更新盘活存量建筑的举措协商会</td>
              <td style={styles.td}>专题协商</td>
              <td style={styles.td}>10月</td>
            </tr>

            {/* 教育界别 */}
            <tr>
              <td rowSpan="2" style={styles.td}>教育界别</td>
              <td style={styles.td}>青少年模拟政协委员活动</td>
              <td style={styles.td}>主题活动</td>
              <td style={styles.td}>9月</td>
            </tr>
            <tr>
              <td style={styles.td}>教育系统政协委员座谈会</td>
              <td style={styles.td}>专题协商</td>
              <td style={styles.td}>11月</td>
            </tr>

            {/* 医卫界别 */}
            <tr>
              <td rowSpan="2" style={styles.td}>医卫界别</td>
              <td style={styles.td}>界别委员惠民健体服务</td>
              <td style={styles.td}>名中医讲座、适宜技术应用、义诊</td>
              <td style={styles.td}>5月</td>
            </tr>
            <tr>
              <td style={styles.td}>医卫界别协商议事会</td>
              <td style={styles.td}>专题协商</td>
              <td style={styles.td}>9月</td>
            </tr>

            {/* 社会福利和保障界别 */}
            <tr>
              <td rowSpan="2" style={styles.td}>社会福利和保障界别</td>
              <td style={styles.td}>爱心服务活动</td>
              <td style={styles.td}>志愿服务</td>
              <td style={styles.td}>6月</td>
            </tr>
            <tr>
              <td style={styles.td}>爱心义卖活动</td>
              <td style={styles.td}>爱心义卖</td>
              <td style={styles.td}>11月</td>
            </tr>

            {/* 民族、宗教界别 */}
            <tr>
              <td rowSpan="2" style={styles.td}>民族、宗教界别</td>
              <td style={styles.td}>红十字会博爱周市集</td>
              <td style={styles.td}>主题活动</td>
              <td style={styles.td}>5月</td>
            </tr>
            <tr>
              <td style={styles.td}>居民楼外立面整治协调会</td>
              <td style={styles.td}>专题协商</td>
              <td style={styles.td}>8月</td>
            </tr>

            {/* 特邀界别 */}
            <tr>
              <td rowSpan="2" style={styles.td}>特邀界别</td>
              <td style={styles.td}>区垃圾分类工作专题协商</td>
              <td style={styles.td}>专题协商</td>
              <td style={styles.td}>5月</td>
            </tr>
            <tr>
              <td style={styles.td}>城市道路健康体检观察主题活动</td>
              <td style={styles.td}>主题活动</td>
              <td style={styles.td}>9月</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 第二部分：各街道“民主议事堂”议事计划 */}
      <div className="card" style={styles.card}>
        <h3 style={styles.mainTitle}>2026年各街道“民主议事堂”议事计划</h3>
        
        {/* 表格区域 */}
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.headerRow}>
                <th style={{...styles.th, width: '20%'}}>责任部门</th>
                <th style={{...styles.th, width: '60%'}}>协商课题</th>
                <th style={{...styles.th, width: '20%'}}>时间</th>
              </tr>
            </thead>
            
            <tbody>
              {/* 湖滨街道 */}
              <tr>
                <td rowSpan="2" style={styles.td}>湖滨街道<br/>委员小组</td>
                <td style={styles.td}>湖滨“智慧文旅商圈”消费提振专题协商会</td>
                <td style={styles.td}>5月</td>
              </tr>
              <tr>
                <td style={styles.td}>“数智赋能，防患未‘燃’”——电动自行车充停点位数字化升级可行性专题协商会</td>
                <td style={styles.td}>8月</td>
              </tr>

              {/* 清波街道 */}
              <tr>
                <td rowSpan="2" style={styles.td}>清波街道<br/>委员小组</td>
                <td style={styles.td}>“IP赋能·业态焕新”——关于打造林微因文化IP与培育街区新质生产力的协商</td>
                <td style={styles.td}>5月</td>
              </tr>
              <tr>
                <td style={styles.td}>“巷陌共治·幸福邻里”——关于深化“十邻坊”机制与优化全龄友好服务体系的协商</td>
                <td style={styles.td}>10月</td>
              </tr>

              {/* 小营街道 */}
              <tr>
                <td rowSpan="2" style={styles.td}>小营街道<br/>委员小组</td>
                <td style={styles.td}>锚定创新高地，赋能健康未来专题协商会</td>
                <td style={styles.td}>3月</td>
              </tr>
              <tr>
                <td style={styles.td}>推进城市更新，让城市更有“韧性”与“温度”专题协商会</td>
                <td style={styles.td}>8月</td>
              </tr>

              {/* 望江街道 */}
              <tr>
                <td rowSpan="2" style={styles.td}>望江街道<br/>委员小组</td>
                <td style={styles.td}>“聚商引智 强链补链”——提升招商引资精准度专题协商</td>
                <td style={styles.td}>5月</td>
              </tr>
              <tr>
                <td style={styles.td}>AI 赋能 “一老一小”，打造智慧养老与托育服务新模式专题协商</td>
                <td style={styles.td}>10月</td>
              </tr>

              {/* 南星街道 */}
              <tr>
                <td rowSpan="2" style={styles.td}>南星街道<br/>委员小组</td>
                <td style={styles.td}>“河韵新生”——龙山河生态人文与生物多样性融合治理协商活动</td>
                <td style={styles.td}>3月</td>
              </tr>
              <tr>
                <td style={styles.td}>以一碗面为媒，探索餐饮烟火气赋能基层治理新路径</td>
                <td style={styles.td}>10月</td>
              </tr>

              {/* 紫阳街道 (合并6行) */}
              <tr>
                <td rowSpan="6" style={styles.td}>紫阳街道<br/>委员小组</td>
                <td style={styles.td}>深化二十三坊有机更新——探索“街区大物业”模式，完善坊巷自治共治体系</td>
                <td style={styles.td}>2月</td>
              </tr>
              <tr>
                <td style={styles.td}>聚力经济提质增效——助力特色产业楼宇打造，服务中央创新区科创企业集聚</td>
                <td style={styles.td}>4月</td>
              </tr>
              <tr>
                <td style={styles.td}>推动人文经济融合——赋能中河南路改造，升级瓦肆文化品牌与文旅融合发展</td>
                <td style={styles.td}>6月</td>
              </tr>
              <tr>
                <td style={styles.td}>创新基层社会治理——构建“防消一张网”，打造一站式矛盾纠纷调处中心</td>
                <td style={styles.td}>8月</td>
              </tr>
              <tr>
                <td style={styles.td}>提升民生服务品质——优化“一老一小一残”服务，完善15分钟便民服务圈</td>
                <td style={styles.td}>10月</td>
              </tr>
              <tr>
                <td style={styles.td}>擦亮基层治理品牌——深化上羊市街居委会建设，争创全过程人民民主实践点</td>
                <td style={styles.td}>12月</td>
              </tr>

              {/* 闸弄口街道 */}
              <tr>
                <td rowSpan="2" style={styles.td}>闸弄口街道<br/>委员小组</td>
                <td style={styles.td}>老旧小区街道全域类未来社区示范样板街区打造专题协商会</td>
                <td style={styles.td}>4月</td>
              </tr>
              <tr>
                <td style={styles.td}>“闸们家”特有AI“TA经济”中心专题协商会</td>
                <td style={styles.td}>8月</td>
              </tr>

              {/* 凯旋街道 */}
              <tr>
                <td rowSpan="2" style={styles.td}>凯旋街道<br/>委员小组</td>
                <td style={styles.td}>关于深化“跨社联片”治理模式、健全新就业群体“双向奔赴”服务体系的专题协商会</td>
                <td style={styles.td}>6月</td>
              </tr>
              <tr>
                <td style={styles.td}>关于探索建立“平安议事会”机制、构建居民纠纷分级分类多元化解体系的专题协商会</td>
                <td style={styles.td}>11月</td>
              </tr>

              {/* 采荷街道 */}
              <tr>
                <td rowSpan="2" style={styles.td}>采荷街道<br/>委员小组</td>
                <td style={styles.td}>聚焦“全球触达”，共议“中国服装第一街”国际消费打卡地品牌打造路径</td>
                <td style={styles.td}>4月</td>
              </tr>
              <tr>
                <td style={styles.td}>深化“商文旅”融合，共绘“中国服装第一街”城市体验与时尚打卡新地图</td>
                <td style={styles.td}>8月</td>
              </tr>

              {/* 四季青街道 */}
              <tr>
                <td rowSpan="2" style={styles.td}>四季青街道<br/>委员小组</td>
                <td style={styles.td}>“持续建设中央创新区（CID）产业社区迭代建设，打造环总部经济生态圈”专题协商会</td>
                <td style={styles.td}>4月</td>
              </tr>
              <tr>
                <td style={styles.td}>“建设全域未来社区，提升辖区人居环境”专题协商会</td>
                <td style={styles.td}>9月</td>
              </tr>

              {/* 笕桥街道 */}
              <tr>
                <td rowSpan="2" style={styles.td}>笕桥街道<br/>委员小组</td>
                <td style={styles.td}>关于小区协商治理的专题协商会</td>
                <td style={styles.td}>4月</td>
              </tr>
              <tr>
                <td style={styles.td}>关于老街区域焕新蝶变的专题协商会</td>
                <td style={styles.td}>10月</td>
              </tr>

              {/* 彭埠街道 */}
              <tr>
                <td rowSpan="2" style={styles.td}>彭埠街道<br/>委员小组</td>
                <td style={styles.td}>“彭友暖新”，探索构建新就业群体多维服务矩阵专题协商</td>
                <td style={styles.td}>5月</td>
              </tr>
              <tr>
                <td style={styles.td}>“破墙融心”，构建租住融合的社区共同体专题协商</td>
                <td style={styles.td}>9月</td>
              </tr>

              {/* 九堡街道 */}
              <tr>
                <td rowSpan="2" style={styles.td}>九堡街道<br/>委员小组</td>
                <td style={styles.td}>关于电商新生态赋能CID建设的专题协商</td>
                <td style={styles.td}>2月</td>
              </tr>
              <tr>
                <td style={styles.td}>“城北企盼”主题协商活动</td>
                <td style={styles.td}>9月</td>
              </tr>

              {/* 丁兰街道 */}
              <tr>
                <td rowSpan="2" style={styles.td}>丁兰街道<br/>委员小组</td>
                <td style={styles.td}>开展聚力丁兰经济发展专题协商会</td>
                <td style={styles.td}>6月</td>
              </tr>
              <tr>
                <td style={styles.td}>开展助力皋亭文旅发展专题协商会</td>
                <td style={styles.td}>10月</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// 样式对象
const styles = {
  container: {
    padding: '20px',
    fontFamily: '"Microsoft YaHei", "SimHei", sans-serif',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
  },
  title: {
    textAlign: 'center',
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '30px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  cardTitle: {
    borderBottom: '2px solid #eee',
    paddingBottom: '10px',
    marginBottom: '20px',
    fontSize: '18px',
    color: '#1a1a1a',
  },
  tableWrapper: {
    overflowX: 'auto', // 允许横向滚动，防止在小屏幕上表格变形
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '14px',
    color: '#333',
  },
  headerRow: {
    backgroundColor: '#f0f0f0', // 表头背景色
  },
  th: {
    border: '1px solid #d9d9d9',
    padding: '12px 8px',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#f9f9f9',
  },
  td: {
    border: '1px solid #d9d9d9',
    padding: '12px 8px',
    textAlign: 'center',
    verticalAlign: 'middle',
    lineHeight: '1.6',
  },
};

export default Plan2026;