import type { Item } from '@/lib/types';

// Static seed data. Nothing outside lib/adapters/ may import this file.
// Delete it once a real backend is connected.

export const ITEMS: Item[] = [
  { id: '1', name: 'First item',  status: 'active',   amount: 1250.5,   createdAt: '2026-08-01T09:00:00Z' },
  { id: '2', name: 'Second item', status: 'draft',    amount: 87234.19, createdAt: '2026-08-03T14:30:00Z' },
  { id: '3', name: 'Third item',  status: 'archived', amount: 0,        createdAt: '2026-07-22T11:15:00Z' },
];
