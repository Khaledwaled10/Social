export function getFixedDate(isdate) {
  const date = new Date(isdate);
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  return date.toLocaleDateString('en-GB', options).replace(',', '');
}

