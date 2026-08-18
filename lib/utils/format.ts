/** Currency and number formatting — comma separators, always 2 decimals. */
export function formatAmount(value: number | string | null | undefined): string {
  const n = typeof value === 'string' ? parseFloat(value) : Number(value ?? 0);
  if (!Number.isFinite(n)) return '0.00';
  return n.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

/** Short date for table cells. */
export function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '—';
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}
