export function generateRandomID(length) {
  let result = '';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_';

  for (let i = 0; i < length; i++)
    result += chars.charAt(Math.floor(Math.random() * chars.length));

  return result;
}
