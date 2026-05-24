// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Vehicle Operations - FleetPulse Matrix V2R8
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, CircleUserRound, EllipsisVertical, Menu, Plus, Search, Settings, X } from "lucide-react";


export type VehicleOperationsFleetpulseMatrixV2r8ActionId = "create-task-1" | "retry-load-2" | "create-record-3" | "status-4" | "priority-5" | "button-6-6" | "button-7-7" | "button-8-8" | "button-9-9" | "button-10-10" | "button-11-11" | "log-event-12" | "view-full-13";

export interface VehicleOperationsFleetpulseMatrixV2r8Props {
  actions?: Partial<Record<VehicleOperationsFleetpulseMatrixV2r8ActionId, () => void>>;
}

export function VehicleOperationsFleetpulseMatrixV2r8({ actions }: VehicleOperationsFleetpulseMatrixV2r8Props) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="hidden xl:flex flex-col h-full py-6 px-4 gap-stack-tight bg-surface-container-low dark:bg-surface-container-lowest fixed left-0 top-0 w-sidebar-width border-r border-outline-variant dark:border-outline z-40">
      <div className="mb-8 px-3">
      <h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim">FleetPulse Matrix</h1>
      </div>
      <div className="flex items-center gap-3 px-3 mb-6">
      <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold">
                      FM
                  </div>
      <div>
      <div className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim text-sm">Fleet Manager</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant">Central Command</div>
      </div>
      </div>
      <button className="w-full bg-primary text-on-primary py-2 px-4 rounded font-body-md text-body-md mb-6 hover:opacity-90 transition-opacity" type="button" data-action-id="create-task-1" onClick={actions?.["create-task-1"]}>
                  Create Task
              </button>
      <div className="flex-1 flex flex-col gap-2">
      {/* Active Tab: Operations */}
      <div className="flex items-center gap-3 bg-secondary-container dark:bg-primary-container text-on-secondary-container dark:text-on-primary-container rounded-lg px-3 py-2 cursor-pointer active:scale-95 duration-150">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Operations</span>
      </div>
      {/* Inactive Tabs */}
      <div className="flex items-center gap-3 text-on-surface-variant dark:text-on-surface-variant px-3 py-2 hover:bg-surface-container-highest dark:hover:bg-surface-container-high transition-colors cursor-pointer active:scale-95 duration-150 rounded-lg">
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Queue</span>
      </div>
      <div className="flex items-center gap-3 text-on-surface-variant dark:text-on-surface-variant px-3 py-2 hover:bg-surface-container-highest dark:hover:bg-surface-container-high transition-colors cursor-pointer active:scale-95 duration-150 rounded-lg">
      <Settings aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Settings</span>
      </div>
      </div>
      <div className="mt-auto flex flex-col gap-2 border-t border-outline-variant pt-4">
      <div className="flex items-center gap-3 text-on-surface-variant dark:text-on-surface-variant px-3 py-2 hover:bg-surface-container-highest dark:hover:bg-surface-container-high transition-colors cursor-pointer active:scale-95 duration-150 rounded-lg">
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Help</span>
      </div>
      <div className="flex items-center gap-3 text-on-surface-variant dark:text-on-surface-variant px-3 py-2 hover:bg-surface-container-highest dark:hover:bg-surface-container-high transition-colors cursor-pointer active:scale-95 duration-150 rounded-lg">
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Logout</span>
      </div>
      </div>
      </nav>
      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col xl:ml-[240px] h-screen overflow-hidden">
      {/* TopNavBar */}
      <header className="flex justify-between items-center w-full px-gutter h-14 z-50 bg-surface dark:bg-surface-dim border-b border-outline-variant dark:border-outline shrink-0">
      <div className="flex items-center gap-4">
      <Menu className="xl:hidden cursor-pointer" aria-hidden={true} focusable="false" />
      {/* Desktop Search Left Aligned */}
      <div className="hidden md:flex items-center bg-surface-container-low border border-outline-variant rounded px-3 py-1.5 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary w-64">
      <Search className="text-on-surface-variant mr-2 text-[20px]" aria-hidden={true} focusable="false" />
      <input className="bg-transparent border-none p-0 focus:ring-0 text-body-md font-body-md text-on-surface w-full placeholder:text-on-surface-variant outline-none" placeholder="Search Matrix..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-4 text-primary dark:text-primary-fixed-dim">
      <Circle className="cursor-pointer hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors rounded-full p-1 active:opacity-80" aria-hidden={true} focusable="false" />
      <Circle className="cursor-pointer hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors rounded-full p-1 active:opacity-80" aria-hidden={true} focusable="false" />
      <CircleUserRound  style={{fontVariationSettings: "'FILL' 1"}} className="cursor-pointer hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors rounded-full p-1 active:opacity-80" aria-hidden={true} focusable="false" />
      </div>
      </header>
      {/* Main Workspace */}
      <main className="flex-1 overflow-y-auto p-container-padding flex gap-6 bg-background relative">
      {/* Left/Main Column: Dashboard & Data */}
      <div className="flex-1 flex flex-col gap-6 min-w-0">
      {/* Header Actions */}
      <div className="flex justify-between items-center">
      <h2 className="font-display-sm text-display-sm text-on-surface">Vehicle Operations</h2>
      <div className="flex gap-3">
      <button className="bg-surface text-secondary border border-outline-variant py-1.5 px-4 rounded font-body-md text-body-md hover:bg-surface-container-low transition-colors" type="button" data-action-id="retry-load-2" onClick={actions?.["retry-load-2"]}>
                                  Retry Load
                              </button>
      <button className="bg-primary text-on-primary py-1.5 px-4 rounded font-body-md text-body-md hover:opacity-90 transition-opacity shadow-sm flex items-center gap-2" type="button" data-action-id="create-record-3" onClick={actions?.["create-record-3"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                                  Create Record
                              </button>
      </div>
      </div>
      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-surface border-t-4 border-primary rounded border border-outline-variant p-4 flex flex-col gap-1 shadow-sm">
      <span className="font-label-caps text-label-caps text-on-surface-variant">Total Vehicles</span>
      <span className="font-display-sm text-display-sm text-on-surface">1,248</span>
      </div>
      <div className="bg-surface border-t-4 border-[#10b981] rounded border border-outline-variant p-4 flex flex-col gap-1 shadow-sm">
      <span className="font-label-caps text-label-caps text-on-surface-variant">Active Tasks</span>
      <span className="font-display-sm text-display-sm text-on-surface">342</span>
      </div>
      <div className="bg-surface border-t-4 border-error rounded border border-outline-variant p-4 flex flex-col gap-1 shadow-sm">
      <span className="font-label-caps text-label-caps text-on-surface-variant">Overdue Maintenance</span>
      <span className="font-display-sm text-display-sm text-error">18</span>
      </div>
      <div className="bg-surface border-t-4 border-[#3b82f6] rounded border border-outline-variant p-4 flex flex-col gap-1 shadow-sm">
      <span className="font-label-caps text-label-caps text-on-surface-variant">Technician Availability</span>
      <span className="font-display-sm text-display-sm text-on-surface">86%</span>
      </div>
      </div>
      {/* Filters & Controls */}
      <div className="flex flex-wrap items-center gap-3 bg-surface p-3 rounded border border-outline-variant shadow-sm">
      <div className="flex items-center bg-surface-container-low border border-outline-variant rounded px-2 py-1 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary flex-1 min-w-[200px]">
      <Search className="text-on-surface-variant mr-2 text-[18px]" aria-hidden={true} focusable="false" />
      <input className="bg-transparent border-none p-0 focus:ring-0 text-body-md font-body-md text-on-surface w-full outline-none text-sm" placeholder="Filter vehicles by ID or Model..." type="text" />
      </div>
      <div className="flex gap-2">
      <button className="flex items-center gap-1 border border-outline-variant rounded px-3 py-1 text-body-sm font-body-sm hover:bg-surface-container-low" type="button" data-action-id="status-4" onClick={actions?.["status-4"]}>
                                  Status <Circle className="text-[16px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="flex items-center gap-1 border border-outline-variant rounded px-3 py-1 text-body-sm font-body-sm hover:bg-surface-container-low" type="button" data-action-id="priority-5" onClick={actions?.["priority-5"]}>
                                  Priority <Circle className="text-[16px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      {/* High Density Table */}
      <div className="bg-surface rounded border border-outline-variant shadow-sm flex-1 flex flex-col min-h-0">
      <div className="overflow-auto flex-1">
      <table className="w-full text-left border-collapse whitespace-nowrap">
      <thead className="sticky top-0 bg-surface z-10 border-b border-outline-variant">
      <tr>
      <th className="px-3 py-2 font-label-caps text-label-caps text-on-surface-variant">Vehicle ID</th>
      <th className="px-3 py-2 font-label-caps text-label-caps text-on-surface-variant">Model</th>
      <th className="px-3 py-2 font-label-caps text-label-caps text-on-surface-variant">Status</th>
      <th className="px-3 py-2 font-label-caps text-label-caps text-on-surface-variant">Next Service</th>
      <th className="px-3 py-2 font-label-caps text-label-caps text-on-surface-variant">Assigned Tech</th>
      <th className="px-3 py-2 font-label-caps text-label-caps text-on-surface-variant text-right">Actions</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-surface-container-high">
      {/* Row 1 - Selected */}
      <tr className="bg-secondary-container bg-opacity-20 cursor-pointer">
      <td className="px-3 py-unit font-data-mono text-data-mono text-primary">V-8829</td>
      <td className="px-3 py-unit font-body-md text-body-md text-on-surface">Volvo FH16</td>
      <td className="px-3 py-unit">
      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[#ecfdf5] text-[#065f46]">Active</span>
      </td>
      <td className="px-3 py-unit font-body-sm text-body-sm text-on-surface-variant">Oct 12, 2023</td>
      <td className="px-3 py-unit font-body-sm text-body-sm text-on-surface">J. Smith</td>
      <td className="px-3 py-unit text-right">
      <button className="text-on-surface-variant hover:text-primary p-1 rounded hover:bg-surface-container" type="button" data-action-id="button-6-6" onClick={actions?.["button-6-6"]}><EllipsisVertical className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </td>
      </tr>
      {/* Row 2 */}
      <tr className="table-row-hover cursor-pointer transition-colors duration-150">
      <td className="px-3 py-unit font-data-mono text-data-mono text-primary">V-7710</td>
      <td className="px-3 py-unit font-body-md text-body-md text-on-surface">Scania R500</td>
      <td className="px-3 py-unit">
      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[#fef2f2] text-[#991b1b]">Maintenance</span>
      </td>
      <td className="px-3 py-unit font-body-sm text-body-sm text-error font-medium">Overdue</td>
      <td className="px-3 py-unit font-body-sm text-body-sm text-on-surface">A. Chen</td>
      <td className="px-3 py-unit text-right">
      <button className="text-on-surface-variant hover:text-primary p-1 rounded hover:bg-surface-container" type="button" data-action-id="button-7-7" onClick={actions?.["button-7-7"]}><EllipsisVertical className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </td>
      </tr>
      {/* Row 3 */}
      <tr className="table-row-hover cursor-pointer transition-colors duration-150">
      <td className="px-3 py-unit font-data-mono text-data-mono text-primary">V-6522</td>
      <td className="px-3 py-unit font-body-md text-body-md text-on-surface">Mercedes Actros</td>
      <td className="px-3 py-unit">
      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[#ecfdf5] text-[#065f46]">Active</span>
      </td>
      <td className="px-3 py-unit font-body-sm text-body-sm text-on-surface-variant">Nov 05, 2023</td>
      <td className="px-3 py-unit font-body-sm text-body-sm text-on-surface">M. Davis</td>
      <td className="px-3 py-unit text-right">
      <button className="text-on-surface-variant hover:text-primary p-1 rounded hover:bg-surface-container" type="button" data-action-id="button-8-8" onClick={actions?.["button-8-8"]}><EllipsisVertical className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </td>
      </tr>
      {/* Row 4 */}
      <tr className="table-row-hover cursor-pointer transition-colors duration-150">
      <td className="px-3 py-unit font-data-mono text-data-mono text-primary">V-9011</td>
      <td className="px-3 py-unit font-body-md text-body-md text-on-surface">Kenworth T680</td>
      <td className="px-3 py-unit">
      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[#eff6ff] text-[#1e40af]">In Transit</span>
      </td>
      <td className="px-3 py-unit font-body-sm text-body-sm text-on-surface-variant">Oct 20, 2023</td>
      <td className="px-3 py-unit font-body-sm text-body-sm text-on-surface">--</td>
      <td className="px-3 py-unit text-right">
      <button className="text-on-surface-variant hover:text-primary p-1 rounded hover:bg-surface-container" type="button" data-action-id="button-9-9" onClick={actions?.["button-9-9"]}><EllipsisVertical className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </td>
      </tr>
      {/* Row 5 */}
      <tr className="table-row-hover cursor-pointer transition-colors duration-150">
      <td className="px-3 py-unit font-data-mono text-data-mono text-primary">V-3345</td>
      <td className="px-3 py-unit font-body-md text-body-md text-on-surface">Peterbilt 579</td>
      <td className="px-3 py-unit">
      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[#fef2f2] text-[#991b1b]">Maintenance</span>
      </td>
      <td className="px-3 py-unit font-body-sm text-body-sm text-on-surface-variant">Today</td>
      <td className="px-3 py-unit font-body-sm text-body-sm text-on-surface">R. Taylor</td>
      <td className="px-3 py-unit text-right">
      <button className="text-on-surface-variant hover:text-primary p-1 rounded hover:bg-surface-container" type="button" data-action-id="button-10-10" onClick={actions?.["button-10-10"]}><EllipsisVertical className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      </div>
      {/* Right Slide-out / Context Panel (Selection Preview) */}
      <aside className="hidden lg:flex w-80 bg-surface border border-outline-variant rounded shadow-sm flex-col h-full overflow-hidden shrink-0">
      {/* Panel Header */}
      <div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest">
      <div>
      <h3 className="font-headline-md text-headline-md text-on-surface">V-8829 Details</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Volvo FH16</p>
      </div>
      <button className="text-on-surface-variant hover:bg-surface-container p-1 rounded transition-colors" type="button" data-action-id="button-11-11" onClick={actions?.["button-11-11"]}>
      <X aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* Panel Content Scrollable */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-6">
      {/* Vehicle Specs */}
      <div>
      <h4 className="font-label-caps text-label-caps text-on-surface-variant mb-2 border-b border-outline-variant pb-1">Specifications</h4>
      <dl className="grid grid-cols-2 gap-y-2 text-sm">
      <dt className="text-on-surface-variant font-body-sm">VIN</dt>
      <dd className="text-on-surface font-data-mono text-right">1VWF1...92</dd>
      <dt className="text-on-surface-variant font-body-sm">Year</dt>
      <dd className="text-on-surface font-body-sm text-right">2021</dd>
      <dt className="text-on-surface-variant font-body-sm">Mileage</dt>
      <dd className="text-on-surface font-body-sm text-right">145,200 mi</dd>
      <dt className="text-on-surface-variant font-body-sm">Location</dt>
      <dd className="text-on-surface font-body-sm text-right">Depot Alpha</dd>
      </dl>
      </div>
      {/* Activity Feed */}
      <div>
      <h4 className="font-label-caps text-label-caps text-on-surface-variant mb-3 border-b border-outline-variant pb-1">Recent Activity</h4>
      <div className="relative border-l border-outline-variant ml-3 space-y-4 pb-4">
      {/* Event 1 */}
      <div className="relative pl-5">
      <div className="absolute w-2 h-2 bg-[#10b981] rounded-full -left-[5px] top-1.5 ring-4 ring-surface"></div>
      <p className="font-body-sm text-body-sm text-on-surface font-medium">Status changed to Active</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Today, 08:30 AM • System</p>
      </div>
      {/* Event 2 */}
      <div className="relative pl-5">
      <div className="absolute w-2 h-2 bg-surface-variant rounded-full -left-[5px] top-1.5 ring-4 ring-surface"></div>
      <p className="font-body-sm text-body-sm text-on-surface font-medium">Pre-trip inspection completed</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Today, 07:15 AM • J. Smith</p>
      </div>
      {/* Event 3 */}
      <div className="relative pl-5">
      <div className="absolute w-2 h-2 bg-primary rounded-full -left-[5px] top-1.5 ring-4 ring-surface"></div>
      <p className="font-body-sm text-body-sm text-on-surface font-medium">Assigned to Route 44B</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Yesterday, 18:45 PM • Dispatch</p>
      </div>
      </div>
      </div>
      </div>
      {/* Panel Footer Actions */}
      <div className="p-4 border-t border-outline-variant bg-surface-container-lowest flex gap-2">
      <button className="flex-1 bg-surface border border-outline-variant text-secondary py-1.5 rounded font-body-md text-body-md hover:bg-surface-container-low transition-colors" type="button" data-action-id="log-event-12" onClick={actions?.["log-event-12"]}>
                              Log Event
                          </button>
      <button className="flex-1 bg-primary text-on-primary py-1.5 rounded font-body-md text-body-md hover:opacity-90 transition-opacity" type="button" data-action-id="view-full-13" onClick={actions?.["view-full-13"]}>
                              View Full
                          </button>
      </div>
      </aside>
      </main>
      </div>
    </>
  );
}
