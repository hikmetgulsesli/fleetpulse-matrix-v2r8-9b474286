import type { FleetPulseMatrixAction } from '../fleetpulse-matrix-v2r8/fleetpulse-matrix-v2r8.store';

export interface CreateVehicleRecordDeps {
  dispatch: (action: FleetPulseMatrixAction) => void;
}

export function createVehicleRecord({ dispatch }: CreateVehicleRecordDeps) {
  dispatch({ type: 'record:create' });
}
