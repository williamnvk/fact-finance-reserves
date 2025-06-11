export function formatLargeNumber(value: number, currency: string = ''): string {
  if (value >= 1_000_000_000) {
    return `${currency}${(value / 1_000_000_000).toFixed(2)}B`;
  }
  if (value >= 1_000_000) {
    return `${currency}${(value / 1_000_000).toFixed(1)}M`;
  } 
  if (value >= 10_000) {
    return `${currency}${(value / 1_000).toFixed(1)}K`;
  }
  if (value < 1000) {
    return `${currency}${value.toFixed(0)}`;
  }

  return value.toLocaleString();
}