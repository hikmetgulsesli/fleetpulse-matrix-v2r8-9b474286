import type { FleetPulseMatrixAction } from '../fleetpulse-matrix-v2r8/fleetpulse-matrix-v2r8.store';
import type { FleetPulseVehicleRecord } from '../../__fixtures__/fleetpulse-matrix-v2r8.fixture';

export interface SelectVehicleRecordDeps {
  dispatch: (action: FleetPulseMatrixAction) => void;
  records: FleetPulseVehicleRecord[];
  index: number;
}

export function selectVehicleRecord({ dispatch, records, index }: SelectVehicleRecordDeps) {
  dispatch({ type: 'select', recordId: records[index]?.id ?? null });
}
