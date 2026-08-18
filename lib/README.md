# lib/

    adapters/   the only sanctioned way to read data — components import from here
    data/       static seed data, read exclusively by adapters
    utils/      formatting and shared helpers
    types.ts    domain types

BrigaRx has no backend. When one is added:

1. add lib/[backend]/client.ts and lib/[backend]/types.ts
2. rewrite the adapter internals to call it
3. delete lib/data/

Components should need zero changes. If they do, the adapter boundary leaked.
