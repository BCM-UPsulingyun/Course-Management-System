import React, { useState } from 'react';

// 1. 数据源：根据你提供的文档整理
const committeeData = [
  {
    street: "湖滨街道",
    leader: "查靖",
    leaderTitle: "湖滨街道党工委副书记",
    members: [
      "王林慧", "方蔚军", "许康波", "杜缨", "李伟达", "吴利泽", "吴桂萍", "张正", "张虹", "陆雯",
      "陈洁", "陈翔", "郑斐尹", "胡丽亚", "胡巍", "钱云忠", "章海燕", "葛佳轩", "黎洁"
    ]
  },
  {
    street: "清波街道",
    leader: "徐洁",
    leaderTitle: "清波街道党工委副书记",
    members: [
      "叶萌", "朱嫣红", "许国伟", "孙雅国", "杜永波", "杨洁", "言妍", "沈乐平", "张含", "陈贺梅",
      "陈蕴涵", "苟佶明", "罗旭峰", "金晓", "周媛媛", "赵军", "赵群伟", "姚娅琼", "高艳", "涂小莉",
      "梁向明", "蔡旭荣", "潘克倾"
    ]
  },
  {
    street: "小营街道",
    leader: "冷晓辉",
    leaderTitle: "小营街道党工委副书记",
    members: [
      "王容峰", "刘元凯", "杜向群", "杨丽英", "杨杰涛", "邹欢金", "汪利民", "张艺群", "张建平",
      "陈仕会", "陈屹一", "陈丽丽", "陈明晖", "陈星", "胡志强", "施俞刚", "施莉娜", "徐跃峰", "黄明科",
      "葛芳民", "韩霄波", "楼数", "潘丽华", "叶嗒嗒", "张勇"
    ]
  },
  {
    street: "望江街道",
    leader: "毛静波",
    leaderTitle: "望江街道党工委副书记",
    members: [
      "丁黎", "马红", "王早晖", "王尉", "毛雪波", "吕昀", "朱盈", "俞宁", "宋旭鏐", "宋红朋",
      "陆峰", "陈娟", "陈萍", "俞仲凯", "俞富根", "徐志清", "蒋骥", "傅艺", "慈玲", "蔡肇颖", "潘晓岑"
    ]
  },
  {
    street: "南星街道",
    leader: "游广敏",
    leaderTitle: "南星街道党工委副书记",
    members: [
      "方元", "方晓阳", "付选央", "孙文祥", "李友银", "李进", "李晓强", "杨东", "吴江达", "吴航通",
      "何晓菲", "沈旭欣", "陈杭闽", "周立钢", "胡杭东", "胡晓敏", "宫旭", "骆志明", "高杰", "屠明珏",
      "童雁汝南", "虞静", "董华迪", "应啸", "张鹭翔"
    ]
  },
  {
    street: "紫阳街道",
    leader: "王盈",
    leaderTitle: "紫阳街道党工委副书记",
    members: [
      "许利芳", "汪丹凤", "沈军", "张佳", "郭简", "陶宏莉", "龚晓丹", "盛昕炜", "麻侃", "程婧莹",
      "释廓忍", "缪先祥", "瞿伟", "张剑峰", "吴国庆", "许勇", "张文杰", "陈一春"
    ]
  },
  {
    street: "闸弄口街道",
    leader: "祝文雅",
    leaderTitle: "闸弄口街道党工委副书记",
    members: [
      "尹兆青", "冯新恩", "刘相玉", "江华平", "岑刚", "邱杰", "余毅", "张一良", "张伟良", "张琦",
      "陆涛", "陈璐", "邵正刚", "胡晓", "袁娜", "梅中鹤", "章超", "章蔚郓"
    ]
  },
  {
    street: "凯旋街道",
    leader: "徐灵峰",
    leaderTitle: "四季青街道党工委副书记、办事处主任", // 文档中此处似乎有笔误，原文写的是四季青，但归类在凯旋
    members: [
      "王芝芬", "包良军", "华剑波", "刘晓", "许涛", "孙益芳", "寿丽", "杨连江", "张瑞旭", "胡丹丹",
      "俞敏", "俞鑫红", "凌栋", "盛国祥", "章炜颖", "谢慧淼", "熊义勤", "缪渭川", "张碧云", "吴国荣"
    ]
  },
  {
    street: "采荷街道",
    leader: "赵丹晨",
    leaderTitle: "采荷街道党工委副书记（正处级）",
    members: [
      "王叶华", "方俊平", "李陟峰", "汪政", "沈波", "陆洋", "陈奕东", "周珍", "胡斌", "俞富康",
      "洪紫林", "骆丁辉", "聂建波", "钱磊", "董岷", "韩新宇", "缪永平", "李晓华"
    ]
  },
  {
    street: "四季青街道",
    leader: "李岗",
    leaderTitle: "四季青街道党工委副书记",
    members: [
      "马学军", "王军", "王晓婷", "王梦婷", "王翔", "任亚", "李罡", "吴昊", "余丽丽", "沈春妮",
      "张忠成", "张欣", "张健", "张频", "陈健", "陈海军", "陈铭", "陈琳", "陈磊", "胡晓振",
      "姜爱意", "费雄文", "姚华俊", "骆鉴湖", "黄晓莉", "黄晓芹", "龚真真", "盛史超", "虞军红", "张晓波",
      "尚晓红"
    ]
  },
  {
    street: "笕桥街道",
    leader: "阮骏",
    leaderTitle: "上城区笕桥街道党工委副书记",
    members: [
      "丁宙胜", "王勇", "包崇来", "许春波", "李冬梅", "何肖龙", "余丹凤", "应科", "张叶平", "张智利",
      "陈小龙", "陈宇", "陈雄", "夏叶丽", "高艳芳", "蒋平樑", "鲁佳波", "蔡晓霞", "沈小华", "杨欣蔚"
    ]
  },
  {
    street: "彭埠街道",
    leader: "叶慧明",
    leaderTitle: "区社会治理中心常务副主任", // 文档中未明确标注彭埠副书记，此处为文档首位人员
    members: [
      "马健", "蓝炜铭", "王鹏", "严素娟", "李美群", "余卫东", "陈忠义", "周世安", "周建卫", "胡伟强",
      "胡琦", "施海红", "倪永钧", "徐小平", "童春霞", "鲍一鹏", "潘乐屹", "潘爱斌", "何力强"
    ]
  },
  {
    street: "九堡街道",
    leader: "胡建清",
    leaderTitle: "上城区九堡街道党工委副书记",
    members: [
      "毛江文", "朱苗", "刘海峰", "许新霞", "李国祥", "李祖胜", "吴谦", "余文科", "汪尧", "周伟",
      "郑宇", "赵庭尉", "胡敏", "程微", "傅昕辉", "魏文锋", "王剑", "王盛", "方晓丽", "冯敏",
      "杨冬强", "应庆园", "宋新民", "张仕权", "陈建恩", "陈瑞贵", "赵明", "姜学英", "聂明军", "倪晓东",
      "高浪华", "黄晓煌", "董娜", "裘琦箐"
    ]
  },
  {
    street: "丁兰街道",
    leader: "倪勇卿",
    leaderTitle: "丁兰街道党工委副书记",
    members: [
      "赵韵红", "刘祖辉", "吴韵", "何亮", "沈洁", "陆筱雅", "陈国华", "陈晓亮", "金超奇", "赵婷",
      "余向平", "胡伟祥", "郦政为", "俞宙", "高艳霞", "龚云玉", "斯梦龙", "焦国平", "释念性", "樊立刚",
      "俞浙晖", "张瑞光", "朱剑文"
    ]
  }
];

const StreetGroup = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // 过滤逻辑：搜索街道名或委员名
  const filteredGroups = committeeData.filter(group => {
    const matchStreet = group.street.includes(searchTerm);
    const matchMember = group.members.some(m => m.includes(searchTerm));
    const matchLeader = group.leader.includes(searchTerm);
    return matchStreet || matchMember || matchLeader;
  });

  return (
    <div className="page-container" style={styles.container}>
      <div className="page-title" style={styles.title}>街道委员小组</div>
      <p style={styles.subtitle}>展示2026年上城区各街道政协委员联络组的组织架构与人员名单。</p>
      
      {/* 搜索框 */}
      <div style={styles.searchBox}>
        <input 
          type="text" 
          placeholder="搜索街道或委员姓名..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.input}
        />
      </div>

      {/* 列表渲染 */}
      <div className="cards-container" style={styles.cardsContainer}>
        {filteredGroups.length > 0 ? (
          filteredGroups.map((group, index) => (
            <div key={index} className="card" style={styles.card}>
              <h3 style={styles.cardHeader}>
                <span style={styles.streetBadge}>{group.street}</span>
                <span style={styles.leaderInfo}>组长：{group.leader}</span>
              </h3>
              <div style={styles.memberList}>
                {group.members.map((member, idx) => (
                  <span key={idx} style={styles.memberTag}>{member}</span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>未找到相关小组或委员。</p>
        )}
      </div>
    </div>
  );
};

// 简单的内联样式，保证复制即用
const styles = {
  container: { padding: '20px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' },
  title: { color: '#1890ff', borderBottom: '2px solid #1890ff', paddingBottom: '10px' },
  subtitle: { color: '#666', marginBottom: '20px' },
  searchBox: { marginBottom: '20px' },
  input: { width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '16px', boxSizing: 'border-box' },
  cardsContainer: { display: 'flex', flexDirection: 'column', gap: '20px' },
  card: { border: '1px solid #e8e8e8', borderRadius: '8px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' },
  cardHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', borderBottom: '1px solid #f0f0f0', paddingBottom: '10px' },
  streetBadge: { fontSize: '1.2em', fontWeight: 'bold', color: '#333' },
  leaderInfo: { color: '#1890ff', fontSize: '0.9em' },
  memberList: { display: 'flex', flexWrap: 'wrap', gap: '8px' },
  memberTag: { background: '#f5f5f5', padding: '4px 8px', borderRadius: '4px', fontSize: '0.9em', color: '#555' }
};

export default StreetGroup;