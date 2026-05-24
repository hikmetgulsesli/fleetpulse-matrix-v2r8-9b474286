import type { FleetPulseMatrixAction } from '../fleetpulse-matrix-v2r8/fleetpulse-matrix-v2r8.store';
import type { FleetPulseVehicleRecord } from '../../__fixtures__/fleetpulse-matrix-v2r8.fixture';

export interface SelectQueueRecordDeps {
  dispatch: (action: FleetPulseMatrixAction) => void;
  records: FleetPulseVehicleRecord[];
  index: number;
}

export function selectQueueRecord({ dispatch, records, index }: SelectQueueRecordDeps) {
  dispatch({ type: 'select', recordId: records[index]?.id ?? null });
}
