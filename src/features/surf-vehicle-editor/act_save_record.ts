import type { FleetPulseRoute } from '../fleetpulse-matrix-v2r8/fleetpulse-matrix-v2r8.store';

export interface SaveVehicleRecordDeps {
  navigate: (route: FleetPulseRoute) => void;
}

export function saveVehicleRecord({ navigate }: SaveVehicleRecordDeps) {
  navigate('operations');
}
