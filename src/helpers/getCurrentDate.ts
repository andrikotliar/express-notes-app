export const getCurrentDate = () : string => {
  const date = new Date();
  const formatedDate = date.toLocaleString('default', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return formatedDate;
}