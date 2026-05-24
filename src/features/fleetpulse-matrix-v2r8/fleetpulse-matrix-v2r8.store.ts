import {
  fleetPulseDefaultPreferences,
  fleetPulseVehicleRecords,
  type FleetPulsePanel,
  type FleetPulsePreferences,
  type FleetPulseVehicleRecord,
} from '../../__fixtures__/fleetpulse-matrix-v2r8.fixture';

export type FleetPulseRoute = 'operations' | 'queue' | 'settings' | 'editor' | 'recovery';
export type FleetPulseStorageStatus = 'idle' | 'loading' | 'ready' | 'recovered' | 'error';

export interface FleetPulseCounts {
  total: number;
  active: number;
  queued: number;
  maintenance: number;
  critical: number;
}

export interface FleetPulseMatrixSnapshot {
  activeRoute: FleetPulseRoute;
  activeScreen: string;
  selectedRecordId: string | null;
  selectedRecord: FleetPulseVehicleRecord | null;
  counts: FleetPulseCounts;
  storageStatus: FleetPulseStorageStatus;
  lastError: string | null;
  activePanel: FleetPulsePanel;
  records: FleetPulseVehicleRecord[];
  preferences: FleetPulsePreferences;
}

export interface FleetPulseMatrixState {
  activeRoute: FleetPulseRoute;
  selectedRecordId: string | null;
  storageStatus: FleetPulseStorageStatus;
  lastError: string | null;
  activePanel: FleetPulsePanel;
  records: FleetPulseVehicleRecord[];
  preferences: FleetPulsePreferences;
}

export type FleetPulseMatrixAction =
  | { type: 'bootstrap:start' }
  | { type: 'bootstrap:success'; records?: FleetPulseVehicleRecord[]; preferences?: FleetPulsePreferences; recovered?: boolean; error?: string | null }
  | { type: 'bootstrap:error'; error: string }
  | { type: 'navigate'; route: FleetPulseRoute; panel?: FleetPulsePanel }
  | { type: 'select'; recordId: string | null }
  | { type: 'panel:set'; panel: FleetPulsePanel }
  | { type: 'error:set'; error: string | null }
  | { type: 'preferences:reset' }
  | { type: 'preferences:save'; preferences?: Partial<FleetPulsePreferences> }
  | { type: 'record:create' };

export function createFleetPulseInitialState(): FleetPulseMatrixState {
  return {
    activeRoute: 'operations',
    selectedRecordId: fleetPulseVehicleRecords[0]?.id ?? null,
    storageStatus: 'idle',
    lastError: null,
    activePanel: fleetPulseDefaultPreferences.activePanel,
    records: fleetPulseVehicleRecords,
    preferences: fleetPulseDefaultPreferences,
  };
}

export function fleetPulseMatrixReducer(
  state: FleetPulseMatrixState,
  action: FleetPulseMatrixAction,
): FleetPulseMatrixState {
  switch (action.type) {
    case 'bootstrap:start':
      return { ...state, storageStatus: 'loading', lastError: null };
    case 'bootstrap:success': {
      const records = action.records?.length ? action.records : fleetPulseVehicleRecords;
      const preferences = { ...fleetPulseDefaultPreferences, ...action.preferences };
      return {
        ...state,
        records,
        preferences,
        activePanel: preferences.activePanel,
        selectedRecordId: state.selectedRecordId ?? records[0]?.id ?? null,
        activeRoute: action.recovered ? 'recovery' : state.activeRoute,
        storageStatus: action.recovered ? 'recovered' : 'ready',
        lastError: action.error ?? null,
      };
    }
    case 'bootstrap:error':
      return { ...state, storageStatus: 'error', lastError: action.error, activeRoute: 'recovery' };
    case 'navigate':
      return {
        ...state,
        activeRoute: action.route,
        activePanel: action.panel ?? routeToPanel(action.route, state.activePanel),
        lastError: action.route === 'recovery' ? state.lastError : null,
      };
    case 'select':
      return { ...state, selectedRecordId: action.recordId };
    case 'panel:set':
      return {
        ...state,
        activePanel: action.panel,
        preferences: { ...state.preferences, activePanel: action.panel },
      };
    case 'error:set':
      return { ...state, lastError: action.error, activeRoute: action.error ? 'recovery' : state.activeRoute };
    case 'preferences:reset':
      return { ...state, preferences: fleetPulseDefaultPreferences, activePanel: fleetPulseDefaultPreferences.activePanel };
    case 'preferences:save': {
      const preferences = { ...state.preferences, ...action.preferences };
      return { ...state, preferences, activePanel: preferences.activePanel, storageStatus: 'ready', lastError: null };
    }
    case 'record:create': {
      const nextRecord: FleetPulseVehicleRecord = {
        id: `veh-${Date.now()}`,
        unit: 'FP-New',
        route: 'Unassigned',
        operator: 'Pending',
        status: 'queued',
        priority: 'standard',
        updatedAt: new Date().toISOString(),
      };
      return {
        ...state,
        records: [nextRecord, ...state.records],
        selectedRecordId: nextRecord.id,
        activeRoute: 'editor',
        activePanel: 'details',
      };
    }
    default:
      return state;
  }
}

export function getFleetPulseSnapshot(state: FleetPulseMatrixState): FleetPulseMatrixSnapshot {
  const selectedRecord = state.records.find((record) => record.id === state.selectedRecordId) ?? null;
  return {
    activeRoute: state.activeRoute,
    activeScreen: routeToScreen(state.activeRoute),
    selectedRecordId: state.selectedRecordId,
    selectedRecord,
    counts: getFleetPulseCounts(state.records),
    storageStatus: state.storageStatus,
    lastError: state.lastError,
    activePanel: state.activePanel,
    records: state.records,
    preferences: state.preferences,
  };
}

export function getFleetPulseCounts(records: FleetPulseVehicleRecord[]): FleetPulseCounts {
  return records.reduce<FleetPulseCounts>(
    (counts, record) => ({
      total: counts.total + 1,
      active: counts.active + (record.status === 'active' ? 1 : 0),
      queued: counts.queued + (record.status === 'queued' ? 1 : 0),
      maintenance: counts.maintenance + (record.status === 'maintenance' ? 1 : 0),
      critical: counts.critical + (record.priority === 'critical' ? 1 : 0),
    }),
    { total: 0, active: 0, queued: 0, maintenance: 0, critical: 0 },
  );
}

function routeToPanel(route: FleetPulseRoute, fallback: FleetPulsePanel): FleetPulsePanel {
  if (route === 'queue') return 'queue';
  if (route === 'settings') return 'settings';
  if (route === 'editor') return 'details';
  if (route === 'operations') return 'operations';
  return fallback;
}

function routeToScreen(route: FleetPulseRoute): string {
  switch (route) {
    case 'queue':
      return 'QueueAndStatusManagementFleetpulseMatrixV2r8';
    case 'settings':
      return 'SettingsAndPreferencesFleetpulseMatrixV2r8';
    case 'editor':
      return 'VehicleEditorFleetpulseMatrixV2r8';
    case 'recovery':
      return 'EmptyAndErrorRecoveryFleetpulseMatrixV2r8';
    case 'operations':
    default:
      return 'VehicleOperationsFleetpulseMatrixV2r8';
  }
}
