import { listItems } from '@/lib/adapters/items';
import { formatAmount, formatDate } from '@/lib/utils/format';

// Demo screen proving the data chain works: page -> adapter -> seed data.
// Delete once real screens exist.
export default async function ItemsPage() {
  const items = await listItems();

  return (
    <main className="min-h-screen bg-neutral-950 p-8 text-neutral-100">
      <h1 className="mb-6 text-2xl font-semibold">Items</h1>
      {items.length === 0 ? (
        <p className="py-16 text-center text-neutral-400">Nothing here yet.</p>
      ) : (
        <table className="w-full text-left text-sm">
          <thead className="text-neutral-400">
            <tr>
              <th className="py-2 font-medium">Name</th>
              <th className="py-2 font-medium">Status</th>
              <th className="py-2 text-right font-medium">Amount</th>
              <th className="py-2 font-medium">Created</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-t border-white/10">
                <td className="py-2">{item.name}</td>
                <td className="py-2 text-neutral-400">{item.status}</td>
                <td className="py-2 text-right tabular-nums">{formatAmount(item.amount)}</td>
                <td className="py-2 text-neutral-400">{formatDate(item.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
