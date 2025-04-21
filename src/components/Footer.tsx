import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">关于我们</h3>
            <p className="text-gray-300">
              我们致力于为用户提供优质的住房信息服务，帮助您找到理想的住所。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">联系方式</h3>
            <p className="text-gray-300">
              电话：400-123-4567<br />
              邮箱：contact@housing.com<br />
              地址：北京市朝阳区
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">帮助中心</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">常见问题</a></li>
              <li><a href="#" className="hover:text-white">使用指南</a></li>
              <li><a href="#" className="hover:text-white">隐私政策</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>© 2024 住房管理系统. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 