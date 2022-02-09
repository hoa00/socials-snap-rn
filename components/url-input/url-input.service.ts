export const isUrl = (url: string) => {
  if (url && typeof url === 'string' && url.trim()?.length > 0) {
    return /^(ftp|http|https):\/\/[^ "]+$/.test(url);
  }
  return false;
};
