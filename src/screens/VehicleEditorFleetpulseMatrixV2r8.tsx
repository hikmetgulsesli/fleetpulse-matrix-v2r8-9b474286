// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Vehicle Editor - FleetPulse Matrix V2R8
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowLeft, Circle, CircleUserRound, Info, Settings } from "lucide-react";


export type VehicleEditorFleetpulseMatrixV2r8ActionId = "create-task-1" | "cancel-edit-2" | "save-record-3" | "operations-1" | "queue-2" | "settings-3" | "help-4" | "logout-5" | "link-6";

export interface VehicleEditorFleetpulseMatrixV2r8Props {
  actions?: Partial<Record<VehicleEditorFleetpulseMatrixV2r8ActionId, () => void>>;
}

export function VehicleEditorFleetpulseMatrixV2r8({ actions }: VehicleEditorFleetpulseMatrixV2r8Props) {
  return (
    <>
      {/* TopNavBar (Mobile Only) */}
      <header className="md:hidden flex justify-between items-center w-full px-gutter h-14 z-50 bg-surface border-b border-outline-variant">
      <div className="font-display-sm text-display-sm text-primary">FleetPulse Matrix</div>
      <div className="flex gap-4">
      <Circle className="text-on-surface-variant cursor-pointer active:opacity-80" aria-hidden={true} focusable="false" />
      <Circle className="text-on-surface-variant cursor-pointer active:opacity-80" aria-hidden={true} focusable="false" />
      <CircleUserRound className="text-on-surface-variant cursor-pointer active:opacity-80" aria-hidden={true} focusable="false" />
      </div>
      </header>
      {/* SideNavBar (Desktop Only) */}
      <nav className="hidden md:flex flex-col h-full py-6 px-4 gap-stack-tight bg-surface-container-low border-r border-outline-variant fixed left-0 top-0 h-full w-sidebar-width z-50">
      <div className="mb-8 text-left">
      <h1 className="block font-headline-md text-headline-md font-bold text-primary mb-6">FleetPulse Matrix</h1>
      <div className="flex items-center gap-3">
      <img alt="Fleet Manager Avatar" className="w-10 h-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKpQz-pGkWhDAmuGc_WjMxtfKd7A7ok0Ntc7mj7npAvfMWtyoY47ztRzj9NhfS6NE1PBmysbqj77eiddD_YPB17maru0EWNR8QoS56YHQ4diILvsZi6FmMU-nfwYKl6iDm68DflQXq9ir5g5HrjrkB6rgkkQL7xOGmXJJ8lkvkZZ5Pu7lKl9pIbIEsaXasT2V_MrLNscsYJ_rwcBS97t8qPuSKcgRU0lt0B2wW_-N4gPl1hlb4adlAw78krB7KRK6Kz_jzo26rbUk" />
      <div>
      <div className="block font-headline-md text-headline-md text-on-surface">Fleet Manager</div>
      <div className="block font-body-sm text-body-sm text-on-surface-variant">Central Command</div>
      </div>
      </div>
      </div>
      <button className="w-full bg-primary text-on-primary py-2 px-4 rounded font-label-caps text-label-caps mb-6 hover:bg-surface-tint transition-colors" type="button" data-action-id="create-task-1" onClick={actions?.["create-task-1"]}>Create Task</button>
      <div className="flex flex-col gap-2 flex-grow">
      {/* Active Tab */}
      <a className="flex items-center gap-3 bg-secondary-container text-on-secondary-container rounded-lg px-3 py-2 font-label-caps text-label-caps cursor-pointer active:scale-95 duration-150" href="#" data-action-id="operations-1" onClick={actions?.["operations-1"]}>
      <Circle  data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                      Operations
                  </a>
      <a className="flex items-center gap-3 text-on-surface-variant px-3 py-2 rounded-lg font-label-caps text-label-caps hover:bg-surface-container-highest transition-colors cursor-pointer active:scale-95 duration-150" href="#" data-action-id="queue-2" onClick={actions?.["queue-2"]}>
      <Circle aria-hidden={true} focusable="false" />
                      Queue
                  </a>
      <a className="flex items-center gap-3 text-on-surface-variant px-3 py-2 rounded-lg font-label-caps text-label-caps hover:bg-surface-container-highest transition-colors cursor-pointer active:scale-95 duration-150" href="#" data-action-id="settings-3" onClick={actions?.["settings-3"]}>
      <Settings aria-hidden={true} focusable="false" />
                      Settings
                  </a>
      </div>
      <div className="flex flex-col gap-2 mt-auto pt-4 border-t border-outline-variant">
      <a className="flex items-center gap-3 text-on-surface-variant px-3 py-2 rounded-lg font-label-caps text-label-caps hover:bg-surface-container-highest transition-colors cursor-pointer active:scale-95 duration-150" href="#" data-action-id="help-4" onClick={actions?.["help-4"]}>
      <Circle aria-hidden={true} focusable="false" />
                      Help
                  </a>
      <a className="flex items-center gap-3 text-on-surface-variant px-3 py-2 rounded-lg font-label-caps text-label-caps hover:bg-surface-container-highest transition-colors cursor-pointer active:scale-95 duration-150" href="#" data-action-id="logout-5" onClick={actions?.["logout-5"]}>
      <Circle aria-hidden={true} focusable="false" />
                      Logout
                  </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 md:ml-[240px] flex flex-col h-[calc(100vh-3.5rem)] md:h-screen overflow-y-auto bg-background">
      {/* Header */}
      <div className="px-container-padding py-6 border-b border-surface-variant bg-surface sticky top-0 z-10">
      <div className="flex justify-between items-end">
      <div>
      <div className="flex items-center gap-3 mb-1">
      <a className="text-on-surface-variant hover:text-primary transition-colors flex items-center" href="#" data-action-id="link-6" onClick={actions?.["link-6"]}>
      <ArrowLeft className="text-[18px]" aria-hidden={true} focusable="false" />
      </a>
      <span className="font-label-caps text-label-caps text-on-surface-variant">Operations / Vehicles</span>
      </div>
      <h2 className="font-display-sm text-display-sm text-primary flex items-center gap-3">
                              Edit Vehicle: V-8472
                              <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim" title="Unsaved changes"></span>
      </h2>
      </div>
      <div className="flex gap-3">
      <button className="px-4 py-2 bg-surface text-on-surface-variant border border-outline-variant rounded font-label-caps text-label-caps hover:bg-surface-container-highest transition-colors" type="button" data-action-id="cancel-edit-2" onClick={actions?.["cancel-edit-2"]}>
                              Cancel Edit
                          </button>
      <button className="px-4 py-2 bg-primary text-on-primary rounded font-label-caps text-label-caps hover:bg-surface-tint transition-colors shadow-sm" type="button" data-action-id="save-record-3" onClick={actions?.["save-record-3"]}>
                              Save Record
                          </button>
      </div>
      </div>
      {/* Feedback Banner */}
      <div className="mt-4 flex items-center gap-2 bg-tertiary-fixed text-on-tertiary-fixed px-3 py-2 rounded font-body-sm text-body-sm shadow-[0_4px_12px_rgba(26,43,60,0.08)]">
      <Info className="text-[16px]" aria-hidden={true} focusable="false" />
                      Changes not yet saved. Proceed with caution.
                  </div>
      </div>
      {/* Form Workspace */}
      <div className="p-container-padding">
      <div className="max-w-5xl mx-auto bg-surface border border-surface-variant rounded-xl shadow-[0_4px_12px_rgba(26,43,60,0.08)] p-6">
      <form className="space-y-8">
      {/* Section: Identification */}
      <section>
      <h3 className="font-headline-md text-headline-md text-primary mb-4 pb-2 border-b border-surface-variant">Identification</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-4">
      {/* VIN (Error State) */}
      <div className="space-y-1">
      <label className="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-1">
                                          VIN <span className="text-error">*</span>
      </label>
      <input className="w-full h-10 px-3 bg-error-container/20 border border-error text-on-surface rounded font-data-mono text-data-mono focus:outline-none focus:ring-1 focus:ring-error shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]" type="text" defaultValue="1FMCU0GZX" />
      <span className="font-body-sm text-body-sm text-error flex items-center gap-1 mt-1">
      <Circle className="text-[14px]" aria-hidden={true} focusable="false" />
                                          Invalid VIN format. Must be 17 characters.
                                      </span>
      </div>
      {/* License */}
      <div className="space-y-1">
      <label className="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-1">
                                          License Plate
                                      </label>
      <input className="w-full h-10 px-3 bg-surface border border-outline-variant text-on-surface rounded font-data-mono text-data-mono focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] transition-colors" type="text" defaultValue="XYZ-9876" />
      </div>
      {/* Type */}
      <div className="space-y-1">
      <label className="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-1">
                                          Vehicle Type <span className="text-error">*</span>
      </label>
      <div className="relative">
      <select className="w-full h-10 px-3 appearance-none bg-surface border border-outline-variant text-on-surface rounded font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] transition-colors">
      <option>Heavy Duty Truck</option>
      <option selected={true}>Light Delivery Van</option>
      <option>Utility Vehicle</option>
      </select>
      <Circle className="absolute right-3 top-2.5 text-on-surface-variant pointer-events-none" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      </section>
      {/* Section: Maintenance Cycle */}
      <section>
      <h3 className="font-headline-md text-headline-md text-primary mb-4 pb-2 border-b border-surface-variant">Maintenance Cycle</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-4">
      {/* Interval */}
      <div className="space-y-1">
      <label className="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-1">
                                          Service Interval (Miles) <span className="text-error">*</span>
      </label>
      <input className="w-full h-10 px-3 bg-surface border border-outline-variant text-on-surface rounded font-data-mono text-data-mono focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] transition-colors" type="number" defaultValue="10000" />
      </div>
      {/* Last Service */}
      <div className="space-y-1">
      <label className="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-1">
                                          Last Service Date
                                      </label>
      <input className="w-full h-10 px-3 bg-surface border border-outline-variant text-on-surface rounded font-data-mono text-data-mono focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] transition-colors" type="date" defaultValue="2023-10-15" />
      </div>
      </div>
      </section>
      {/* Section: Assignment */}
      <section>
      <h3 className="font-headline-md text-headline-md text-primary mb-4 pb-2 border-b border-surface-variant">Assignment</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-4">
      {/* Primary Tech */}
      <div className="space-y-1">
      <label className="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-1">
                                          Primary Technician
                                      </label>
      <div className="relative">
      <select className="w-full h-10 px-3 appearance-none bg-surface border border-outline-variant text-on-surface rounded font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] transition-colors">
      <option>Unassigned</option>
      <option selected={true}>Sarah Jenkins</option>
      <option>Marcus Cole</option>
      </select>
      <Circle className="absolute right-3 top-2.5 text-on-surface-variant pointer-events-none" aria-hidden={true} focusable="false" />
      </div>
      </div>
      {/* Location */}
      <div className="space-y-1">
      <label className="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-1">
                                          Current Location Base <span className="text-error">*</span>
      </label>
      <div className="relative">
      <select className="w-full h-10 px-3 appearance-none bg-surface border border-outline-variant text-on-surface rounded font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] transition-colors">
      <option>North Hub</option>
      <option selected={true}>South Depot</option>
      <option>East Terminal</option>
      </select>
      <Circle className="absolute right-3 top-2.5 text-on-surface-variant pointer-events-none" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      </section>
      </form>
      </div>
      </div>
      </main>
    </>
  );
}
