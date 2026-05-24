export type FleetPulseVehicleStatus = 'active' | 'queued' | 'maintenance';
export type FleetPulseVehiclePriority = 'critical' | 'high' | 'standard';

export interface FleetPulseVehicleRecord {
  id: string;
  unit: string;
  route: string;
  operator: string;
  status: FleetPulseVehicleStatus;
  priority: FleetPulseVehiclePriority;
  updatedAt: string;
}

export interface FleetPulsePreferences {
  activePanel: FleetPulsePanel;
  compactDensity: boolean;
  refreshMinutes: number;
}

export type FleetPulsePanel = 'operations' | 'queue' | 'settings' | 'details';

export const fleetPulseVehicleRecords: FleetPulseVehicleRecord[] = [
  {
    id: 'veh-117',
    unit: 'FP-117',
    route: 'North Ridge',
    operator: 'Mina Alvarez',
    status: 'active',
    priority: 'critical',
    updatedAt: '2026-05-24T08:15:00.000Z',
  },
  {
    id: 'veh-204',
    unit: 'FP-204',
    route: 'Harbor Loop',
    operator: 'Jon Bell',
    status: 'queued',
    priority: 'high',
    updatedAt: '2026-05-24T08:05:00.000Z',
  },
  {
    id: 'veh-319',
    unit: 'FP-319',
    route: 'Airport Express',
    operator: 'Priya Shah',
    status: 'maintenance',
    priority: 'standard',
    updatedAt: '2026-05-24T07:50:00.000Z',
  },
];

export const fleetPulseDefaultPreferences: FleetPulsePreferences = {
  activePanel: 'operations',
  compactDensity: false,
  refreshMinutes: 5,
};
