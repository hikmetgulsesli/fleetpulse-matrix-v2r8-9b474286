import type { FleetPulseMatrixSnapshot } from '../features/fleetpulse-matrix-v2r8/fleetpulse-matrix-v2r8.store';

declare global {
  interface Window {
    app?: FleetPulseMatrixSnapshot;
  }
}

export function publishFleetPulseAppSnapshot(snapshot: FleetPulseMatrixSnapshot): void {
  if (typeof window !== 'undefined') {
    window.app = snapshot;
  }
}
