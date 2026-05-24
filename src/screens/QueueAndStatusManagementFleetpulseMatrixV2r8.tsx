// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Queue and Status Management - FleetPulse Matrix V2R8
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, CircleUserRound, Ellipsis, Search, Settings, TriangleAlert, User } from "lucide-react";


export type QueueAndStatusManagementFleetpulseMatrixV2r8ActionId = "create-task-1" | "button-2-2" | "button-3-3" | "button-4-4" | "button-5-5" | "button-6-6" | "button-7-7" | "button-8-8" | "button-9-9" | "operations-1" | "queue-2" | "settings-3" | "help-4" | "logout-5";

export interface QueueAndStatusManagementFleetpulseMatrixV2r8Props {
  actions?: Partial<Record<QueueAndStatusManagementFleetpulseMatrixV2r8ActionId, () => void>>;
}

export function QueueAndStatusManagementFleetpulseMatrixV2r8({ actions }: QueueAndStatusManagementFleetpulseMatrixV2r8Props) {
  return (
    <>
      {/* Shared Component: SideNavBar */}
      <nav className="bg-surface-container-low dark:bg-surface-container-lowest fixed left-0 top-0 h-full w-sidebar-width border-r border-outline-variant dark:border-outline flex flex-col py-6 px-4 gap-stack-tight z-40 shadow-none">
      <div className="mb-6 px-3">
      <h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim">Fleet Manager</h1>
      <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider mt-1">Central Command</p>
      </div>
      <div className="flex flex-col gap-1 flex-1">
      <a className="flex items-center gap-3 text-on-surface-variant dark:text-on-surface-variant px-3 py-2 hover:bg-surface-container-highest dark:hover:bg-surface-container-high transition-colors cursor-pointer active:scale-95 duration-150 rounded-lg" href="#" data-action-id="operations-1" onClick={actions?.["operations-1"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Operations</span>
      </a>
      <a className="flex items-center gap-3 bg-secondary-container dark:bg-primary-container text-on-secondary-container dark:text-on-primary-container rounded-lg px-3 py-2 cursor-pointer active:scale-95 duration-150" href="#" data-action-id="queue-2" onClick={actions?.["queue-2"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Queue</span>
      </a>
      <a className="flex items-center gap-3 text-on-surface-variant dark:text-on-surface-variant px-3 py-2 hover:bg-surface-container-highest dark:hover:bg-surface-container-high transition-colors cursor-pointer active:scale-95 duration-150 rounded-lg" href="#" data-action-id="settings-3" onClick={actions?.["settings-3"]}>
      <Settings  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Settings</span>
      </a>
      </div>
      <div className="mt-auto pt-6 border-t border-outline-variant">
      <button className="w-full bg-primary text-on-primary py-2 px-4 rounded font-label-caps text-label-caps mb-4 hover:opacity-90 transition-opacity" type="button" data-action-id="create-task-1" onClick={actions?.["create-task-1"]}>Create Task</button>
      <div className="flex flex-col gap-1">
      <a className="flex items-center gap-3 text-on-surface-variant dark:text-on-surface-variant px-3 py-2 hover:bg-surface-container-highest dark:hover:bg-surface-container-high transition-colors cursor-pointer active:scale-95 duration-150 rounded-lg" href="#" data-action-id="help-4" onClick={actions?.["help-4"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Help</span>
      </a>
      <a className="flex items-center gap-3 text-on-surface-variant dark:text-on-surface-variant px-3 py-2 hover:bg-surface-container-highest dark:hover:bg-surface-container-high transition-colors cursor-pointer active:scale-95 duration-150 rounded-lg" href="#" data-action-id="logout-5" onClick={actions?.["logout-5"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Logout</span>
      </a>
      </div>
      <div className="flex items-center gap-3 mt-4 px-3">
      <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
      <User className="text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <p className="font-body-sm text-body-sm text-on-surface">Fleet Manager Avatar</p>
      </div>
      </div>
      </div>
      </nav>
      {/* Main Workspace Area */}
      <main className="ml-[240px] flex-1 flex flex-col h-full bg-background relative z-0">
      {/* Shared Component: TopNavBar */}
      <header className="bg-surface dark:bg-surface-dim font-body-md text-body-md border-b border-outline-variant dark:border-outline flex justify-between items-center w-full px-gutter h-14 z-50 shadow-none shrink-0 sticky top-0">
      <div className="flex items-center gap-4">
      <span className="font-display-sm text-display-sm text-primary dark:text-primary-fixed-dim">FleetPulse Matrix</span>
      <div className="relative hidden lg:flex items-center ml-8">
      <Search className="absolute left-2 text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <input className="pl-8 pr-4 py-1.5 bg-surface-container border border-outline-variant rounded focus:border-primary focus:ring-1 focus:ring-primary text-body-sm font-body-sm w-64 outline-none transition-colors" placeholder="Search tasks, vehicles..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-2">
      <button className="p-2 text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors cursor-pointer active:opacity-80 rounded-full flex items-center justify-center" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button className="p-2 text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors cursor-pointer active:opacity-80 rounded-full flex items-center justify-center" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button className="p-2 text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors cursor-pointer active:opacity-80 rounded-full flex items-center justify-center" type="button" aria-label="Open user profile" data-action-id="button-4-4" disabled={!actions?.["button-4-4"]} onClick={actions?.["button-4-4"]}>
      <CircleUserRound aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Kanban Board Area */}
      <div className="flex-1 overflow-x-auto overflow-y-hidden p-container-padding">
      <div className="flex gap-gutter h-full pb-4">
      {/* Lane 1: Backlog */}
      <div className="kanban-lane flex flex-col gap-3 bg-surface-container-low rounded-xl p-3 border border-outline-variant">
      <div className="flex justify-between items-center px-1 pb-2 border-b border-outline-variant">
      <h2 className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">Backlog <span className="bg-surface-variant text-on-surface-variant px-1.5 py-0.5 rounded ml-2">4</span></h2>
      <button className="text-on-surface-variant hover:text-primary transition-colors" type="button" data-action-id="button-5-5" onClick={actions?.["button-5-5"]}>
      <Ellipsis className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="flex-1 overflow-y-auto flex flex-col gap-stack-tight pr-1">
      {/* Card */}
      <div className="bg-surface border border-outline-variant rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer group relative">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-outline-variant rounded-l-lg group-hover:bg-primary transition-colors"></div>
      <div className="flex justify-between items-start mb-2">
      <span className="font-data-mono text-data-mono text-on-surface-variant">TSK-8921</span>
      <span className="text-[10px] font-bold uppercase tracking-wider text-outline px-1.5 py-0.5 border border-outline rounded flex items-center gap-1">Low</span>
      </div>
      <h3 className="font-headline-md text-body-md font-semibold text-on-surface mb-1">Preventative Maintenance</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Unit #4092 - Freightliner Cascadia</p>
      <div className="flex items-center justify-between mt-auto pt-2 border-t border-outline-variant/50">
      <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded-full bg-surface-variant flex items-center justify-center text-xs font-bold text-on-surface-variant border border-outline-variant">Un</div>
      <span className="font-body-sm text-[11px] text-on-surface-variant">Unassigned</span>
      </div>
      <span className="font-label-caps text-[10px] text-on-surface-variant bg-surface-container px-1.5 py-0.5 rounded">1d in status</span>
      </div>
      </div>
      {/* Card */}
      <div className="bg-surface border border-outline-variant rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer group relative">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-outline-variant rounded-l-lg group-hover:bg-primary transition-colors"></div>
      <div className="flex justify-between items-start mb-2">
      <span className="font-data-mono text-data-mono text-on-surface-variant">TSK-8924</span>
      <span className="text-[10px] font-bold uppercase tracking-wider text-tertiary-fixed-dim bg-tertiary px-1.5 py-0.5 rounded flex items-center gap-1">Med</span>
      </div>
      <h3 className="font-headline-md text-body-md font-semibold text-on-surface mb-1">Replace Brake Pads</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Unit #3105 - Volvo VNL</p>
      <div className="flex items-center justify-between mt-auto pt-2 border-t border-outline-variant/50">
      <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded-full bg-surface-variant flex items-center justify-center text-xs font-bold text-on-surface-variant border border-outline-variant">Un</div>
      <span className="font-body-sm text-[11px] text-on-surface-variant">Unassigned</span>
      </div>
      <span className="font-label-caps text-[10px] text-on-surface-variant bg-surface-container px-1.5 py-0.5 rounded">0d in status</span>
      </div>
      </div>
      </div>
      </div>
      {/* Lane 2: In Inspection */}
      <div className="kanban-lane flex flex-col gap-3 bg-surface-container-low rounded-xl p-3 border border-outline-variant">
      <div className="flex justify-between items-center px-1 pb-2 border-b border-outline-variant">
      <h2 className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">In Inspection <span className="bg-surface-variant text-on-surface-variant px-1.5 py-0.5 rounded ml-2">2</span></h2>
      <button className="text-on-surface-variant hover:text-primary transition-colors" type="button" data-action-id="button-6-6" onClick={actions?.["button-6-6"]}>
      <Ellipsis className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="flex-1 overflow-y-auto flex flex-col gap-stack-tight pr-1">
      {/* Card */}
      <div className="bg-surface border border-outline-variant rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer group relative">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary rounded-l-lg"></div>
      <div className="flex justify-between items-start mb-2">
      <span className="font-data-mono text-data-mono text-on-surface-variant">TSK-8890</span>
      <span className="text-[10px] font-bold uppercase tracking-wider text-error-container bg-error px-1.5 py-0.5 rounded flex items-center gap-1">High</span>
      </div>
      <h3 className="font-headline-md text-body-md font-semibold text-on-surface mb-1">Engine Diagnostic</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Unit #5021 - Kenworth T680</p>
      <div className="mb-3 flex items-center gap-2">
      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold uppercase bg-error-container text-on-error-container border border-error/20">
      <TriangleAlert className="text-[12px]" aria-hidden={true} focusable="false" /> Risk
                                      </span>
      </div>
      <div className="flex items-center justify-between mt-auto pt-2 border-t border-outline-variant/50">
      <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center text-xs font-bold text-on-primary-container">JD</div>
      <span className="font-body-sm text-[11px] text-on-surface">J. Doe</span>
      </div>
      <div className="flex items-center gap-2">
      <span className="font-label-caps text-[10px] text-error bg-error-container px-1.5 py-0.5 rounded">3d in status</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Lane 3: In Repair */}
      <div className="kanban-lane flex flex-col gap-3 bg-surface-container-low rounded-xl p-3 border border-outline-variant">
      <div className="flex justify-between items-center px-1 pb-2 border-b border-outline-variant">
      <h2 className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">In Repair <span className="bg-surface-variant text-on-surface-variant px-1.5 py-0.5 rounded ml-2">1</span></h2>
      <button className="text-on-surface-variant hover:text-primary transition-colors" type="button" data-action-id="button-7-7" onClick={actions?.["button-7-7"]}>
      <Ellipsis className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="flex-1 overflow-y-auto flex flex-col gap-stack-tight pr-1">
      {/* Card */}
      <div className="bg-surface border border-outline-variant rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer group relative">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-lg"></div>
      <div className="flex justify-between items-start mb-2">
      <span className="font-data-mono text-data-mono text-on-surface-variant">TSK-8855</span>
      <span className="text-[10px] font-bold uppercase tracking-wider text-tertiary-fixed-dim bg-tertiary px-1.5 py-0.5 rounded flex items-center gap-1">Med</span>
      </div>
      <h3 className="font-headline-md text-body-md font-semibold text-on-surface mb-1">Transmission Overhaul</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Unit #2201 - Peterbilt 579</p>
      <div className="mb-3 flex items-center gap-2">
      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold uppercase bg-secondary-container text-on-secondary-container border border-secondary/20">
      <Circle className="text-[12px]" aria-hidden={true} focusable="false" /> On Track
                                      </span>
      </div>
      <div className="flex items-center justify-between mt-auto pt-2 border-t border-outline-variant/50">
      <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded-full bg-tertiary-container flex items-center justify-center text-xs font-bold text-on-tertiary-container">AS</div>
      <span className="font-body-sm text-[11px] text-on-surface">A. Smith</span>
      </div>
      <span className="font-label-caps text-[10px] text-on-surface-variant bg-surface-container px-1.5 py-0.5 rounded">2d in status</span>
      </div>
      </div>
      </div>
      </div>
      {/* Lane 4: Pending Parts */}
      <div className="kanban-lane flex flex-col gap-3 bg-surface-container-low rounded-xl p-3 border border-outline-variant">
      <div className="flex justify-between items-center px-1 pb-2 border-b border-outline-variant">
      <h2 className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">Pending Parts <span className="bg-surface-variant text-on-surface-variant px-1.5 py-0.5 rounded ml-2">1</span></h2>
      <button className="text-on-surface-variant hover:text-primary transition-colors" type="button" data-action-id="button-8-8" onClick={actions?.["button-8-8"]}>
      <Ellipsis className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="flex-1 overflow-y-auto flex flex-col gap-stack-tight pr-1">
      {/* Card */}
      <div className="bg-surface border border-outline-variant rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer group relative">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary rounded-l-lg"></div>
      <div className="flex justify-between items-start mb-2">
      <span className="font-data-mono text-data-mono text-on-surface-variant">TSK-8812</span>
      <span className="text-[10px] font-bold uppercase tracking-wider text-error-container bg-error px-1.5 py-0.5 rounded flex items-center gap-1">High</span>
      </div>
      <h3 className="font-headline-md text-body-md font-semibold text-on-surface mb-1">Cooling System Repair</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-2">Unit #4110 - International LT</p>
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-1.5 mb-3 flex items-center gap-2">
      <Circle className="text-[14px] text-outline" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-[11px] text-on-surface-variant truncate">Radiator Core Assembly (PO-9921)</span>
      </div>
      <div className="flex items-center justify-between mt-auto pt-2 border-t border-outline-variant/50">
      <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center text-xs font-bold text-on-secondary-container">MK</div>
      <span className="font-body-sm text-[11px] text-on-surface">M. King</span>
      </div>
      <span className="font-label-caps text-[10px] text-tertiary bg-tertiary-fixed px-1.5 py-0.5 rounded">5d in status</span>
      </div>
      </div>
      </div>
      </div>
      {/* Lane 5: Ready for Pickup */}
      <div className="kanban-lane flex flex-col gap-3 bg-surface-container-low rounded-xl p-3 border border-outline-variant opacity-70">
      <div className="flex justify-between items-center px-1 pb-2 border-b border-outline-variant">
      <h2 className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">Ready for Pickup <span className="bg-surface-variant text-on-surface-variant px-1.5 py-0.5 rounded ml-2">0</span></h2>
      <button className="text-on-surface-variant hover:text-primary transition-colors" type="button" data-action-id="button-9-9" onClick={actions?.["button-9-9"]}>
      <Ellipsis className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center p-4 border-2 border-dashed border-outline-variant rounded-lg text-center text-on-surface-variant">
      <Circle className="text-display-sm mb-2 opacity-50" aria-hidden={true} focusable="false" />
      <p className="font-body-sm">Drop tasks here to mark complete</p>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
