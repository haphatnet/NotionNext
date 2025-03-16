import React, { useState } from 'react';
import { siteConfig } from '@/lib/config';
import Link from 'next/link';
import { MenuList } from './MenuList';

export const Header = (props) => {
  // 定义状态变量，控制 <div> 的显示或隐藏
  const [isDivVisible, setIsDivVisible] = useState(true);

  // 切换状态的函数
  const toggleDivVisibility = () => {
    setIsDivVisible(!isDivVisible);
  };

  return (
    <header className='w-full px-6 bg-white dark:bg-black relative z-20'>
      <div className='mx-auto max-w-4xl md:flex justify-between items-center'>
        <Link
          href='/'
          className='logo py-6 w-full text-center md:text-left md:w-auto text-gray-dark no-underline flex justify-center items-center'>
          {siteConfig('TITLE')}
        </Link>
        <div className='w-full md:w-auto text-center md:text-right'>
          {/* 右侧文字 */}
        </div>
      </div>

      {/* 按钮，用于切换 <div> 的显示或隐藏 */}
      <button onClick={toggleDivVisibility}>
        {isDivVisible ? '隐藏' : '显示'} 菜单
      </button>

      {/* 根据状态变量决定是否渲染 <MenuList> */}
      {isDivVisible && <MenuList {...props} />}
    </header>
  );
};
