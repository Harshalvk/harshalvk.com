export function formatDate(date: string): string {
  const [month, year] = date.split('.');
  return new Date(Number(year), Number(month) - 1).toLocaleString('en-US', {
    month: 'short',
    year: 'numeric',
  });
}
