import { siteConfig } from '@/lib/config';
import Link from 'next/link';
import { MenuList } from './MenuList';

/**
 * 网站顶部
 * LOGO 和 菜单
 * @returns
 */
export const Header = (props) => {
  return (
    <header className='w-full px-6 bg-white dark:bg-black relative z-20'>
      <div className='mx-auto max-w-4xl md:flex justify-between items-center'>
        {/* 移除了显示站点标题的 <Link> 元素 */}
        <div className='w-full md:w-auto text-center md:text-right'>
          {/* 右侧文字 */}
        </div>
      </div>

      {/* 菜单 */}
      <MenuList {...props} />
    </header>
  );
};
