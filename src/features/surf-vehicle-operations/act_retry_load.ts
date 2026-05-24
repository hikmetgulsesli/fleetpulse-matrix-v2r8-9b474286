import type { FleetPulseRoute } from '../fleetpulse-matrix-v2r8/fleetpulse-matrix-v2r8.store';

export interface RetryVehicleOperationsLoadDeps {
  reload: () => void;
  navigate: (route: FleetPulseRoute) => void;
}

export function retryVehicleOperationsLoad({ reload, navigate }: RetryVehicleOperationsLoadDeps) {
  reload();
  navigate('operations');
}
