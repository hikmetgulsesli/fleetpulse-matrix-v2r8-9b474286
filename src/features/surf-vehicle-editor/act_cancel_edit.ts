import type { FleetPulseRoute } from '../fleetpulse-matrix-v2r8/fleetpulse-matrix-v2r8.store';

export interface CancelVehicleEditDeps {
  navigate: (route: FleetPulseRoute) => void;
}

export function cancelVehicleEdit({ navigate }: CancelVehicleEditDeps) {
  navigate('operations');
}
