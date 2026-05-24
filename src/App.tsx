import { useCallback, useEffect, useMemo, useReducer } from 'react';
import {
  EmptyAndErrorRecoveryFleetpulseMatrixV2r8,
  QueueAndStatusManagementFleetpulseMatrixV2r8,
  SettingsAndPreferencesFleetpulseMatrixV2r8,
  VehicleEditorFleetpulseMatrixV2r8,
  VehicleOperationsFleetpulseMatrixV2r8,
  type EmptyAndErrorRecoveryFleetpulseMatrixV2r8ActionId,
  type QueueAndStatusManagementFleetpulseMatrixV2r8ActionId,
  type SettingsAndPreferencesFleetpulseMatrixV2r8ActionId,
  type VehicleEditorFleetpulseMatrixV2r8ActionId,
  type VehicleOperationsFleetpulseMatrixV2r8ActionId,
} from './screens';
import { fleetPulseMatrixRepository } from './features/fleetpulse-matrix-v2r8/fleetpulse-matrix-v2r8.repo';
import {
  createFleetPulseInitialState,
  fleetPulseMatrixReducer,
  getFleetPulseSnapshot,
  type FleetPulseRoute,
} from './features/fleetpulse-matrix-v2r8/fleetpulse-matrix-v2r8.store';
import { publishFleetPulseAppSnapshot } from './test/bridge';

export default function App() {
  const [state, dispatch] = useReducer(fleetPulseMatrixReducer, undefined, createFleetPulseInitialState);
  const snapshot = useMemo(() => getFleetPulseSnapshot(state), [state]);

  useEffect(() => {
    dispatch({ type: 'bootstrap:start' });
    const result = fleetPulseMatrixRepository.load();
    dispatch({
      type: 'bootstrap:success',
      records: result.state.records,
      preferences: result.state.preferences,
      recovered: result.status === 'recovered',
      error: result.error,
    });
  }, []);

  useEffect(() => {
    if (state.storageStatus === 'ready' || state.storageStatus === 'recovered') {
      fleetPulseMatrixRepository.save({ records: state.records, preferences: state.preferences });
    }
  }, [state.preferences, state.records, state.storageStatus]);

  useEffect(() => {
    publishFleetPulseAppSnapshot(snapshot);
  }, [snapshot]);

  const navigate = useCallback((route: FleetPulseRoute) => {
    dispatch({ type: 'navigate', route });
  }, []);

  const createRecord = useCallback(() => dispatch({ type: 'record:create' }), []);
  const retryLoad = useCallback(() => {
    const result = fleetPulseMatrixRepository.load();
    dispatch({
      type: 'bootstrap:success',
      records: result.state.records,
      preferences: result.state.preferences,
      recovered: result.status === 'recovered',
      error: result.error,
    });
    navigate('operations');
  }, [navigate]);
  const clearPersistedData = useCallback(() => {
    fleetPulseMatrixRepository.clear();
    const result = fleetPulseMatrixRepository.load();
    dispatch({
      type: 'bootstrap:success',
      records: result.state.records,
      preferences: result.state.preferences,
      recovered: false,
      error: null,
    });
    navigate('operations');
  }, [navigate]);
  const resetPreferences = useCallback(() => dispatch({ type: 'preferences:reset' }), []);
  const savePreferences = useCallback(() => {
    dispatch({ type: 'preferences:save', preferences: { activePanel: state.activePanel } });
  }, [state.activePanel]);

  const operationsActions = useMemo<Partial<Record<VehicleOperationsFleetpulseMatrixV2r8ActionId, () => void>>>(
    () => ({
      'create-task-1': createRecord,
      'retry-load-2': retryLoad,
      'create-record-3': createRecord,
      'status-4': () => dispatch({ type: 'panel:set', panel: 'operations' }),
      'priority-5': () => dispatch({ type: 'panel:set', panel: 'queue' }),
      'button-6-6': () => dispatch({ type: 'select', recordId: state.records[0]?.id ?? null }),
      'button-7-7': () => dispatch({ type: 'select', recordId: state.records[1]?.id ?? state.records[0]?.id ?? null }),
      'button-8-8': () => navigate('queue'),
      'button-9-9': () => navigate('settings'),
      'button-10-10': () => navigate('editor'),
      'button-11-11': () => dispatch({ type: 'error:set', error: null }),
      'log-event-12': () => dispatch({ type: 'panel:set', panel: 'details' }),
      'view-full-13': () => navigate('editor'),
    }),
    [createRecord, navigate, retryLoad, state.records],
  );

  const queueActions = useMemo<Partial<Record<QueueAndStatusManagementFleetpulseMatrixV2r8ActionId, () => void>>>(
    () => ({
      'create-task-1': createRecord,
      'button-2-2': () => dispatch({ type: 'panel:set', panel: 'queue' }),
      'button-3-3': () => dispatch({ type: 'select', recordId: state.records[0]?.id ?? null }),
      'button-4-4': () => dispatch({ type: 'select', recordId: state.records[1]?.id ?? null }),
      'button-5-5': () => dispatch({ type: 'select', recordId: state.records[2]?.id ?? null }),
      'button-6-6': () => navigate('operations'),
      'button-7-7': () => navigate('editor'),
      'button-8-8': retryLoad,
      'button-9-9': () => dispatch({ type: 'error:set', error: null }),
      'operations-1': () => navigate('operations'),
      'queue-2': () => navigate('queue'),
      'settings-3': () => navigate('settings'),
      'help-4': () => dispatch({ type: 'panel:set', panel: 'details' }),
      'logout-5': () => navigate('operations'),
    }),
    [createRecord, navigate, retryLoad, state.records],
  );

  const settingsActions = useMemo<Partial<Record<SettingsAndPreferencesFleetpulseMatrixV2r8ActionId, () => void>>>(
    () => ({
      'create-task-1': createRecord,
      'button-2-2': () => dispatch({ type: 'panel:set', panel: 'settings' }),
      'button-3-3': () => dispatch({ type: 'preferences:save', preferences: { compactDensity: !state.preferences.compactDensity } }),
      'button-4-4': () => dispatch({ type: 'preferences:save', preferences: { refreshMinutes: 1 } }),
      'button-5-5': () => dispatch({ type: 'preferences:save', preferences: { refreshMinutes: 10 } }),
      'reset-to-defaults-6': resetPreferences,
      'retry-load-7': retryLoad,
      'save-preferences-8': savePreferences,
      'operations-1': () => navigate('operations'),
      'queue-2': () => navigate('queue'),
      'settings-3': () => navigate('settings'),
      'help-4': () => dispatch({ type: 'panel:set', panel: 'details' }),
      'logout-5': () => navigate('operations'),
    }),
    [createRecord, navigate, resetPreferences, retryLoad, savePreferences, state.preferences.compactDensity],
  );

  const editorActions = useMemo<Partial<Record<VehicleEditorFleetpulseMatrixV2r8ActionId, () => void>>>(
    () => ({
      'create-task-1': createRecord,
      'cancel-edit-2': () => navigate('operations'),
      'save-record-3': () => navigate('operations'),
      'operations-1': () => navigate('operations'),
      'queue-2': () => navigate('queue'),
      'settings-3': () => navigate('settings'),
      'help-4': () => dispatch({ type: 'panel:set', panel: 'details' }),
      'logout-5': () => navigate('operations'),
      'link-6': () => navigate('operations'),
    }),
    [createRecord, navigate],
  );

  const recoveryActions = useMemo<Partial<Record<EmptyAndErrorRecoveryFleetpulseMatrixV2r8ActionId, () => void>>>(
    () => ({
      'create-task-1': createRecord,
      'button-2-2': retryLoad,
      'retry-load-3': retryLoad,
      'create-record-4': createRecord,
      'clear-all-filters-5': clearPersistedData,
      'technical-details-6': () => dispatch({ type: 'panel:set', panel: 'details' }),
    }),
    [clearPersistedData, createRecord, retryLoad],
  );

  return (
    <div
      data-setfarm-root="fleetpulse-matrix-v2r8"
      data-active-route={snapshot.activeRoute}
      data-storage-status={snapshot.storageStatus}
      className="min-h-screen bg-slate-50 text-slate-950"
    >
      {state.activeRoute === 'queue' ? <QueueAndStatusManagementFleetpulseMatrixV2r8 actions={queueActions} /> : null}
      {state.activeRoute === 'settings' ? <SettingsAndPreferencesFleetpulseMatrixV2r8 actions={settingsActions} /> : null}
      {state.activeRoute === 'editor' ? <VehicleEditorFleetpulseMatrixV2r8 actions={editorActions} /> : null}
      {state.activeRoute === 'recovery' ? <EmptyAndErrorRecoveryFleetpulseMatrixV2r8 actions={recoveryActions} /> : null}
      {state.activeRoute === 'operations' ? <VehicleOperationsFleetpulseMatrixV2r8 actions={operationsActions} /> : null}
    </div>
  );
}
