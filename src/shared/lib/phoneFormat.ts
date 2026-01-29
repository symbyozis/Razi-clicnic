export const phoneFormat = (phone: string): string => {
  if (/^\+?7[9]\d{9}/.test(phone)) {
    return phone.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, `$1 $2 $3 $4 $5`);
  }
  return "";
};
