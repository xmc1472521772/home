export const login = async (credentials: { username: string; password: string }) => {
  // 示例API调用逻辑，根据实际后端接口修改
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  
  if (!response.ok) {
    throw new Error('登录失败');
  }
  
  return response.json();
};