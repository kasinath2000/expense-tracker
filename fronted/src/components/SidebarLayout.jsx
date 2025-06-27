


// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import {
//   FaChartPie,
//   FaMoneyBillWave,
//   FaWallet,
//   FaSignOutAlt,
// } from 'react-icons/fa';

// const SidebarLayout = ({ children }) => {
//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar */}
//       <aside className="w-64 p-4 space-y-4 bg-[#504450]/80 backdrop-blur text-white">
//         <h1 className="text-2xl font-bold mb-6 text-white">Expense Tracker</h1>

//         <NavLink
//           to="/dashboard"
//           className={({ isActive }) =>
//             `flex items-center gap-2 p-2 rounded hover:bg-white/10 ${
//               isActive ? 'bg-white/10 text-white font-semibold' : 'text-white/80'
//             }`
//           }
//         >
//           <FaChartPie /> Dashboard
//         </NavLink>

//         <NavLink
//           to="/income"
//           className={({ isActive }) =>
//             `flex items-center gap-2 p-2 rounded hover:bg-white/10 ${
//               isActive ? 'bg-white/10 text-white font-semibold' : 'text-white/80'
//             }`
//           }
//         >
//           <FaMoneyBillWave /> Income
//         </NavLink>

//         <NavLink
//           to="/expense"
//           className={({ isActive }) =>
//             `flex items-center gap-2 p-2 rounded hover:bg-white/10 ${
//               isActive ? 'bg-white/10 text-white font-semibold' : 'text-white/80'
//             }`
//           }
//         >
//           <FaWallet /> Expense
//         </NavLink>

//         <NavLink
//           to="/logout"
//           className="flex items-center gap-2 p-2 rounded text-white/60 hover:text-red-400"
//         >
//           <FaSignOutAlt /> Logout
//         </NavLink>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 bg-gray-50 p-4 overflow-y-auto">{children}</main>
//     </div>
//   );
// };

// export default SidebarLayout;
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Import MUI icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';

const SidebarLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Sidebar is "expanded" if either not collapsed OR hovered while collapsed
  const isExpanded = !collapsed || hovered;

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`${
          isExpanded ? 'w-64' : 'w-20'
        } p-4 space-y-6 bg-[#504450]/80 backdrop-blur text-white transition-width duration-300 ease-in-out flex flex-col`}
      >
        {/* Logo + toggle */}
        <div
          className={`flex items-center justify-between cursor-pointer select-none ${
            !isExpanded ? 'justify-center' : ''
          }`}
          onClick={() => setCollapsed((prev) => !prev)}
          title={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
        >
          {isExpanded ? (
            <h1 className="text-xl font-bold">
              <span className="text-blue-400">Expense</span>{' '}
              <span className="text-pink-400">Tracker</span>
            </h1>
          ) : (
            <h1 className="text-2xl font-bold text-center">
              <span className="text-blue-400">E</span>
              <span className="text-pink-400">T</span>
            </h1>
          )}

          {/* Toggle Icon */}
          <MenuIcon className="cursor-pointer text-white hover:text-gray-300 ml-2" />
        </div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-3 flex-1">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded hover:bg-white/10 ${
                isActive ? 'bg-white/10 text-white font-semibold' : 'text-white/80'
              } ${!isExpanded ? 'justify-center' : ''}`
            }
          >
            <DashboardIcon />
            {isExpanded && 'Dashboard'}
          </NavLink>

          <NavLink
            to="/income"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded hover:bg-white/10 ${
                isActive ? 'bg-white/10 text-white font-semibold' : 'text-white/80'
              } ${!isExpanded ? 'justify-center' : ''}`
            }
          >
            <AttachMoneyIcon />
            {isExpanded && 'Income'}
          </NavLink>

          <NavLink
            to="/expense"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded hover:bg-white/10 ${
                isActive ? 'bg-white/10 text-white font-semibold' : 'text-white/80'
              } ${!isExpanded ? 'justify-center' : ''}`
            }
          >
            <AccountBalanceWalletIcon />
            {isExpanded && 'Expense'}
          </NavLink>

          <NavLink
            to="/logout"
            className={`flex items-center gap-2 p-2 rounded text-white/60 hover:text-red-400 ${
              !isExpanded ? 'justify-center' : ''
            }`}
          >
            <LogoutIcon />
            {isExpanded && 'Logout'}
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-4 overflow-y-auto">{children}</main>
    </div>
  );
};

export default SidebarLayout;
