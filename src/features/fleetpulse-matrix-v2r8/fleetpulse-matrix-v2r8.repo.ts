import {
  fleetPulseDefaultPreferences,
  fleetPulseVehicleRecords,
  type FleetPulsePreferences,
  type FleetPulseVehicleRecord,
} from '../../__fixtures__/fleetpulse-matrix-v2r8.fixture';

const STORAGE_KEY = 'fleetpulse-matrix-v2r8.state';

export interface FleetPulsePersistedState {
  records: FleetPulseVehicleRecord[];
  preferences: FleetPulsePreferences;
}

export interface FleetPulseLoadResult {
  state: FleetPulsePersistedState;
  status: 'ready' | 'recovered';
  error: string | null;
}

export const fleetPulseMatrixRepository = {
  load(storage: Storage | null = getBrowserStorage()): FleetPulseLoadResult {
    const fallback = createFallbackState();
    if (!storage) {
      return { state: fallback, status: 'ready', error: null };
    }

    const raw = storage.getItem(STORAGE_KEY);
    if (!raw) {
      return { state: fallback, status: 'ready', error: null };
    }

    try {
      const parsed = JSON.parse(raw) as unknown;
      return { state: normalizePersistedState(parsed), status: 'ready', error: null };
    } catch {
      storage.removeItem(STORAGE_KEY);
      return {
        state: fallback,
        status: 'recovered',
        error: 'Stored FleetPulse data was unreadable and has been reset.',
      };
    }
  },

  save(state: FleetPulsePersistedState, storage: Storage | null = getBrowserStorage()): void {
    if (!storage) return;
    storage.setItem(STORAGE_KEY, JSON.stringify(normalizePersistedState(state)));
  },

  clear(storage: Storage | null = getBrowserStorage()): void {
    storage?.removeItem(STORAGE_KEY);
  },

  storageKey: STORAGE_KEY,
};

export function createFallbackState(): FleetPulsePersistedState {
  return {
    records: fleetPulseVehicleRecords,
    preferences: fleetPulseDefaultPreferences,
  };
}

function normalizePersistedState(candidate: unknown): FleetPulsePersistedState {
  const persisted = isPersistedStateCandidate(candidate) ? candidate : {};
  return {
    records: Array.isArray(persisted.records) ? persisted.records : fleetPulseVehicleRecords,
    preferences: { ...fleetPulseDefaultPreferences, ...persisted.preferences },
  };
}

function isPersistedStateCandidate(candidate: unknown): candidate is Partial<FleetPulsePersistedState> {
  return typeof candidate === 'object' && candidate !== null;
}

function getBrowserStorage(): Storage | null {
  if (typeof window === 'undefined') return null;
  return window.localStorage;
}
