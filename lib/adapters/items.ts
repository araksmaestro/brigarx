import { ITEMS } from '@/lib/data/items';
import type { Item, ID, ItemStatus } from '@/lib/types';

// The only sanctioned way to read BrigaRx data.
// Every function is async so that swapping the internals for a real fetch
// later is an internal change, not a signature change across every caller.

export async function listItems(filters?: { status?: ItemStatus }): Promise<Item[]> {
  try {
    const rows = ITEMS;
    if (!filters?.status) return rows;
    return rows.filter((r) => r.status === filters.status);
  } catch (error) {
    throw new Error(
      `listItems failed: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}

export async function getItem(id: ID): Promise<Item | null> {
  try {
    return ITEMS.find((r) => r.id === id) ?? null;
  } catch (error) {
    throw new Error(
      `getItem(${id}) failed: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}
