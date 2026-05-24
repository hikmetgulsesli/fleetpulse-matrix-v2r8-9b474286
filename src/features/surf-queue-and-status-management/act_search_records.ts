import type { FleetPulseMatrixAction } from '../fleetpulse-matrix-v2r8/fleetpulse-matrix-v2r8.store';

export interface SearchQueueRecordsDeps {
  dispatch: (action: FleetPulseMatrixAction) => void;
}

export function searchQueueRecords({ dispatch }: SearchQueueRecordsDeps) {
  dispatch({ type: 'panel:set', panel: 'queue' });
}
