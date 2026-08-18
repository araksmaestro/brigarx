// Domain types for BrigaRx.
// These describe the app's own shape of data — not the shape of any backend.
// When a backend is added, adapters translate its response into these types.

export type ID = string;

/**
 * TEMPLATE ENTITY — rename to a real BrigaRx entity and delete this comment.
 * Keep the pattern: an id, a human-readable label, and typed fields.
 */
export interface Item {
  id: ID;
  name: string;
  status: ItemStatus;
  amount: number;        // always a number here — never a formatted string
  createdAt: string;     // ISO 8601
}

export type ItemStatus = 'draft' | 'active' | 'archived';

export const ITEM_STATUSES: ItemStatus[] = ['draft', 'active', 'archived'];
