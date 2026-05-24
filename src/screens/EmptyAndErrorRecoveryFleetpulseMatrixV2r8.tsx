// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Empty and Error Recovery - FleetPulse Matrix V2R8
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Menu, Plus, RefreshCw, Search, Settings, X } from "lucide-react";


export type EmptyAndErrorRecoveryFleetpulseMatrixV2r8ActionId = "create-task-1" | "button-2-2" | "retry-load-3" | "create-record-4" | "clear-all-filters-5" | "technical-details-6";

export interface EmptyAndErrorRecoveryFleetpulseMatrixV2r8Props {
  actions?: Partial<Record<EmptyAndErrorRecoveryFleetpulseMatrixV2r8ActionId, () => void>>;
}

export function EmptyAndErrorRecoveryFleetpulseMatrixV2r8({ actions }: EmptyAndErrorRecoveryFleetpulseMatrixV2r8Props) {
  return (
    <>
      {/* Mobile TopNav / Tablet/Desktop Hidden TopNav equivalent */}
      <header className="md:hidden bg-surface dark:bg-surface-dim border-b border-outline-variant dark:border-outline flex justify-between items-center w-full px-gutter h-14 z-50">
      <div className="font-display-sm text-display-sm text-primary dark:text-primary-fixed-dim">
                  FleetPulse Matrix
              </div>
      <div className="flex items-center gap-4">
      <Search className="text-primary cursor-pointer" aria-hidden={true} focusable="false" />
      <Menu className="text-primary cursor-pointer" aria-hidden={true} focusable="false" />
      </div>
      </header>
      {/* SideNavBar (Desktop/Tablet) */}
      <nav className="hidden md:flex flex-col h-full py-6 px-4 gap-stack-tight bg-surface-container-low dark:bg-surface-container-lowest border-r border-outline-variant dark:border-outline fixed left-0 top-0 w-sidebar-width z-40">
      {/* Brand */}
      <div className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim mb-8 px-3">
                  FleetPulse Matrix
              </div>
      {/* Main Nav */}
      <div className="flex-1 flex flex-col gap-2 font-label-caps text-label-caps">
      {/* Active State: Assuming we were trying to view the Queue or Operations and failed. Defaulting to Operations as a safe primary intent, though this is an error state overlaying content */}
      <div className="flex items-center gap-3 bg-secondary-container dark:bg-primary-container text-on-secondary-container dark:text-on-primary-container rounded-lg px-3 py-2 cursor-pointer active:scale-95 duration-150">
      <Circle style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                      Operations
                  </div>
      <div className="flex items-center gap-3 text-on-surface-variant dark:text-on-surface-variant px-3 py-2 hover:bg-surface-container-highest dark:hover:bg-surface-container-high transition-colors rounded-lg cursor-pointer active:scale-95 duration-150">
      <Circle aria-hidden={true} focusable="false" />
                      Queue
                  </div>
      <div className="flex items-center gap-3 text-on-surface-variant dark:text-on-surface-variant px-3 py-2 hover:bg-surface-container-highest dark:hover:bg-surface-container-high transition-colors rounded-lg cursor-pointer active:scale-95 duration-150">
      <Settings aria-hidden={true} focusable="false" />
                      Settings
                  </div>
      </div>
      {/* Create Task CTA */}
      <button className="bg-primary text-on-primary font-label-caps text-label-caps py-3 px-4 rounded w-full flex justify-center items-center gap-2 mb-6 hover:bg-primary/90 transition-colors" type="button" data-action-id="create-task-1" onClick={actions?.["create-task-1"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                  Create Task
              </button>
      {/* Footer Profile & Actions */}
      <div className="border-t border-outline-variant pt-4 mt-auto flex flex-col gap-2 font-label-caps text-label-caps">
      <div className="flex items-center gap-3 text-on-surface-variant px-3 py-2 hover:bg-surface-container-highest transition-colors rounded-lg cursor-pointer">
      <Circle aria-hidden={true} focusable="false" />
                      Help
                  </div>
      <div className="flex items-center gap-3 text-on-surface-variant px-3 py-2 hover:bg-surface-container-highest transition-colors rounded-lg cursor-pointer">
      <Circle aria-hidden={true} focusable="false" />
                      Logout
                  </div>
      {/* User Info Compact */}
      <div className="flex items-center gap-3 px-3 py-2 mt-2">
      <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-headline-md">
                          FM
                      </div>
      <div className="flex flex-col">
      <span className="font-headline-md text-headline-md text-on-surface text-[14px]">Fleet Manager</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Central Command</span>
      </div>
      </div>
      </div>
      </nav>
      {/* Main Workspace */}
      <main className="flex-1 flex flex-col md:ml-sidebar-width h-screen bg-surface-container-low overflow-hidden">
      {/* Desktop TopAppBar (Actions/Context) */}
      <div className="hidden md:flex bg-surface border-b border-outline-variant h-14 px-container-padding flex items-center justify-between z-30">
      <div className="flex items-center gap-4">
      <div className="flex items-center bg-surface-container px-3 py-1.5 rounded-full border border-outline-variant focus-within:border-primary transition-colors recessed-input">
      <Search className="text-on-surface-variant text-[18px] mr-2" aria-hidden={true} focusable="false" />
      <input className="bg-transparent border-none outline-none text-body-sm w-64 text-on-surface placeholder:text-on-surface-variant" disabled={true} placeholder="Active Search: Region West, Status: Idle" type="text" value="Region West, Status: Idle" />
      </div>
      </div>
      <div className="flex items-center gap-3">
      <button className="p-2 text-on-surface-variant hover:bg-surface-container-highest rounded-full transition-colors" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      {/* Canvas Area: The Empty/Error State */}
      <div className="flex-1 flex items-center justify-center p-container-padding overflow-y-auto">
      <div className="w-full max-w-2xl bg-surface border border-outline-variant rounded-xl shadow-[0_4px_12px_rgba(26,43,60,0.04)] p-8 md:p-12 flex flex-col items-center text-center">
      {/* Graphic / Icon */}
      <div className="w-24 h-24 bg-surface-container-highest rounded-full flex items-center justify-center mb-6 relative">
      <Circle className="text-[48px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      {/* Decorative technical accent */}
      <div className="absolute top-0 right-0 w-4 h-4 bg-error rounded-full border-2 border-surface flex items-center justify-center">
      <X className="text-[10px] text-on-error" aria-hidden={true} focusable="false" />
      </div>
      </div>
      {/* Messaging */}
      <h1 className="font-display-sm text-display-sm text-on-surface mb-2">No vehicles match these filters</h1>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-md mb-8">
                          Unable to load fleet data for the current query parameters. Try clearing your active filters or creating a new vehicle record to proceed.
                      </p>
      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
      <button className="bg-primary text-on-primary font-label-caps text-label-caps px-6 py-3 rounded hover:bg-primary/90 transition-colors flex items-center justify-center gap-2" type="button" data-action-id="retry-load-3" onClick={actions?.["retry-load-3"]}>
      <RefreshCw className="text-[18px]" aria-hidden={true} focusable="false" />
                              Retry Load
                          </button>
      <button className="bg-surface text-secondary font-label-caps text-label-caps border border-outline px-6 py-3 rounded hover:bg-surface-container-highest transition-colors flex items-center justify-center gap-2" type="button" data-action-id="create-record-4" onClick={actions?.["create-record-4"]}>
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" />
                              Create Record
                          </button>
      </div>
      {/* Secondary Action */}
      <button className="text-primary font-body-sm text-body-sm hover:underline mb-8 flex items-center gap-1" type="button" data-action-id="clear-all-filters-5" onClick={actions?.["clear-all-filters-5"]}>
      <Circle className="text-[16px]" aria-hidden={true} focusable="false" />
                          Clear All Filters
                      </button>
      {/* Technical Details Accordion */}
      <div className="w-full text-left border border-outline-variant rounded bg-surface-container-lowest overflow-hidden">
      <button className="w-full flex items-center justify-between p-3 bg-surface-container-low hover:bg-surface-container-high transition-colors text-on-surface-variant font-label-caps text-label-caps border-b border-outline-variant" id="tech-details-toggle" type="button" data-action-id="technical-details-6" onClick={actions?.["technical-details-6"]}>
      <div className="flex items-center gap-2">
      <Circle className="text-[16px]" aria-hidden={true} focusable="false" />
                                  Technical Details
                              </div>
      <Circle id="tech-details-icon" className="text-[18px] transition-transform duration-200" aria-hidden={true} focusable="false" />
      </button>
      <div className="hidden p-4 bg-surface-container-lowest font-data-mono text-data-mono text-on-surface-variant text-[11px] leading-relaxed overflow-x-auto" id="tech-details-content">
      <div className="flex gap-2 mb-1">
      <span className="text-error font-bold">ERR_CODE:</span>
      <span>Q_RGN_WST_0x4A9</span>
      </div>
      <div className="flex gap-2 mb-1">
      <span className="text-on-surface font-bold">TIMESTAMP:</span>
      <span>2023-10-27T14:32:01.442Z</span>
      </div>
      <div className="flex gap-2 mb-1">
      <span className="text-on-surface font-bold">QUERY_PARAMS:</span>
      <span>&#123; "region": "west", "status": "idle", "limit": 50 &#125;</span>
      </div>
      <div className="flex gap-2">
      <span className="text-on-surface font-bold">TRACE_ID:</span>
      <span className="truncate">req_98a7f6c5e4d3b2a1_fpm_core_db</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      
    </>
  );
}
