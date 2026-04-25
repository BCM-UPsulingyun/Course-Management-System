import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

// 导入下面我们将创建的7个页面组件
import Home from './pages/Home'; // 首页
import MemberHome from './pages/MemberHome'; // 委员之家
import StreetGroup from './pages/StreetGroup'; // 街道委员小组
import SectorInfo from './pages/SectorInfo'; // 界别基本情况
import NewEra from './pages/NewEra'; // 市政协新时代
import Performance from './pages/Performance'; // 委员履职平台
import StarStudio from './pages/StarStudio'; // 星级委员工作室风采
import Plan2026 from './pages/Plan2026'; // 2026年履职计划

// 简单的导航项高亮组件
const NavLinkItem = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link 
      to={to} 
      className={`nav-link ${isActive ? 'active' : ''}`}
    >
      {children}
    </Link>
  );
};

function App() {
  return (
    <div className="app">
      {/* 顶部黑色通栏 */}
      <div className="top-bar">
      欢迎访问浙江省杭州市政协委员通履职服务平台 
      </div>

      {/* 头部红色Logo区 */}
      <header className="main-header">
        <h1>浙江省杭州市政协委员通</h1>
      </header>

      {/* 导航栏 */}
      <nav className="nav-bar">
        <NavLinkItem to="/">首页</NavLinkItem>
        <NavLinkItem to="/member-home">委员之家</NavLinkItem>
        <NavLinkItem to="/street-group">街道委员小组</NavLinkItem>
        <NavLinkItem to="/sector-info">界别基本情况</NavLinkItem>
        <NavLinkItem to="/new-era">市政协新时代</NavLinkItem>
        <NavLinkItem to="/performance">委员履职平台</NavLinkItem>
        <NavLinkItem to="/star-studio">星级委员工作室</NavLinkItem>
        <NavLinkItem to="/plan-2026">2026履职计划</NavLinkItem>
      </nav>

      {/* 内容区域 - 路由出口 */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/member-home" element={<MemberHome />} />
          <Route path="/street-group" element={<StreetGroup />} />
          <Route path="/sector-info" element={<SectorInfo />} />
          <Route path="/new-era" element={<NewEra />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/star-studio" element={<StarStudio />} />
          <Route path="/plan-2026" element={<Plan2026 />} />
        </Routes>
      </main>

      {/* 底部 */}
      <footer className="footer">
        <p>© 2026 浙江省杭州市政协委员 || 版权所有</p>
      </footer>
    </div>
  );
}

export default App;