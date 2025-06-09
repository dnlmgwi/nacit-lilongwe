import * as migration_20250609_223634_init from './20250609_223634_init';

export const migrations = [
  {
    up: migration_20250609_223634_init.up,
    down: migration_20250609_223634_init.down,
    name: '20250609_223634_init'
  },
];
