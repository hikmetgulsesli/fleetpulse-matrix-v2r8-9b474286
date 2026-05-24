import type { FleetPulseMatrixAction } from '../fleetpulse-matrix-v2r8/fleetpulse-matrix-v2r8.store';
import type { FleetPulsePanel } from '../../__fixtures__/fleetpulse-matrix-v2r8.fixture';

export interface SearchVehicleRecordsDeps {
  dispatch: (action: FleetPulseMatrixAction) => void;
  panel: FleetPulsePanel;
}

export function searchVehicleRecords({ dispatch, panel }: SearchVehicleRecordsDeps) {
  dispatch({ type: 'panel:set', panel });
}
