// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Settings and Preferences - FleetPulse Matrix V2R8
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, ListFilter, Pencil, Plus, Settings, Trash2 } from "lucide-react";


export type SettingsAndPreferencesFleetpulseMatrixV2r8ActionId = "create-task-1" | "button-2-2" | "button-3-3" | "button-4-4" | "button-5-5" | "reset-to-defaults-6" | "retry-load-7" | "save-preferences-8" | "operations-1" | "queue-2" | "settings-3" | "help-4" | "logout-5";

export interface SettingsAndPreferencesFleetpulseMatrixV2r8Props {
  actions?: Partial<Record<SettingsAndPreferencesFleetpulseMatrixV2r8ActionId, () => void>>;
}

export function SettingsAndPreferencesFleetpulseMatrixV2r8({ actions }: SettingsAndPreferencesFleetpulseMatrixV2r8Props) {
  return (
    <>
      {/* Sidebar Navigation */}
      <nav className="hidden md:flex flex-col h-full py-6 px-4 gap-stack-tight fixed left-0 top-0 w-sidebar-width bg-surface-container-low dark:bg-surface-container-lowest border-r border-outline-variant dark:border-outline z-40">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8 px-3">
      <img alt="Fleet Manager Avatar" className="w-10 h-10 rounded-full object-cover" data-alt="A professional headshot of a corporate fleet manager in a modern, well-lit office setting. The individual appears authoritative yet approachable, dressed in business casual attire. The lighting is bright and high-key, reinforcing the crisp, functional corporate aesthetic of the interface. The background is softly blurred to keep focus on the subject." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAztWg8LeSdTauJ4X43HTw6nSdifGtDGwffS78IrovFEsdWxLDQj5HCqqfdab28bcF42tmqDITb97iOExMcG8p5AdySnRqm0kPY4TnUAPC_JWgPsl6SjkdcFZ-RQlCjMSYnWfPFNCUrQ-LDPM-OEIUyuDBABIM0vdxgcvBmp7p0a1UQG3LgVNz1nsusmiiGsMn_uBeVF1nU4tqsEjXWAuALlxols97nkZcArIE2S7T0M8kPYoUfITm2RkAmfDkRUHh11YehxEig8uo" />
      <div>
      <h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim">Fleet Manager</h1>
      <p className="font-label-caps text-label-caps text-on-surface-variant">Central Command</p>
      </div>
      </div>
      {/* Create Task CTA */}
      <div className="px-3 mb-6">
      <button className="w-full flex justify-center items-center gap-2 bg-primary text-on-primary py-2 px-4 rounded font-headline-md text-headline-md hover:bg-surface-tint transition-colors" type="button" data-action-id="create-task-1" onClick={actions?.["create-task-1"]}>
      <Plus className="text-[20px]" aria-hidden={true} focusable="false" />
                      Create Task
                  </button>
      </div>
      {/* Main Navigation Tabs */}
      <div className="flex-1 flex flex-col gap-1">
      <a className="flex items-center gap-3 text-on-surface-variant dark:text-on-surface-variant px-3 py-2 hover:bg-surface-container-highest dark:hover:bg-surface-container-high transition-colors cursor-pointer active:scale-95 duration-150 rounded" href="#" data-action-id="operations-1" onClick={actions?.["operations-1"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Operations</span>
      </a>
      <a className="flex items-center gap-3 text-on-surface-variant dark:text-on-surface-variant px-3 py-2 hover:bg-surface-container-highest dark:hover:bg-surface-container-high transition-colors cursor-pointer active:scale-95 duration-150 rounded" href="#" data-action-id="queue-2" onClick={actions?.["queue-2"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Queue</span>
      </a>
      {/* Active Tab */}
      <a className="flex items-center gap-3 bg-secondary-container dark:bg-primary-container text-on-secondary-container dark:text-on-primary-container rounded-lg px-3 py-2 cursor-pointer active:scale-95 duration-150" href="#" data-action-id="settings-3" onClick={actions?.["settings-3"]}>
      <Settings className="fill-icon text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Settings</span>
      </a>
      </div>
      {/* Footer Navigation Tabs */}
      <div className="mt-auto flex flex-col gap-1 border-t border-outline-variant pt-4">
      <a className="flex items-center gap-3 text-on-surface-variant dark:text-on-surface-variant px-3 py-2 hover:bg-surface-container-highest dark:hover:bg-surface-container-high transition-colors cursor-pointer active:scale-95 duration-150 rounded" href="#" data-action-id="help-4" onClick={actions?.["help-4"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Help</span>
      </a>
      <a className="flex items-center gap-3 text-on-surface-variant dark:text-on-surface-variant px-3 py-2 hover:bg-surface-container-highest dark:hover:bg-surface-container-high transition-colors cursor-pointer active:scale-95 duration-150 rounded text-error hover:text-error-container" href="#" data-action-id="logout-5" onClick={actions?.["logout-5"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Logout</span>
      </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 md:ml-[240px] p-container-padding lg:p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto space-y-8">
      {/* Page Header */}
      <div>
      <h2 className="font-display-sm text-display-sm text-primary">Settings and Preferences</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Configure your workspace behavior and notification rules.</p>
      </div>
      {/* Bento Grid Layout for Settings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Workflow Preferences */}
      <section className="bg-surface border border-outline-variant rounded-xl p-6 shadow-sm">
      <h3 className="font-headline-md text-headline-md text-on-surface mb-4 flex items-center gap-2 border-b border-outline-variant pb-2">
      <Circle className="text-secondary" aria-hidden={true} focusable="false" />
                              Workflow Preferences
                          </h3>
      <div className="space-y-5">
      <label className="flex items-center justify-between cursor-pointer group">
      <div>
      <span className="font-body-md text-body-md text-on-surface block">High Density View</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Compress tables and reduce padding to show more data.</span>
      </div>
      <div className="relative inline-flex items-center h-6 rounded-full w-11 bg-outline-variant transition-colors group-hover:bg-outline">
      <span className="inline-block w-4 h-4 transform bg-surface rounded-full transition-transform translate-x-1"></span>
      </div>
      </label>
      <div>
      <label className="font-label-caps text-label-caps text-on-surface-variant block mb-1">Default Sort Order</label>
      <select className="w-full border-outline-variant rounded bg-surface text-body-md font-body-md focus:border-primary focus:ring-1 focus:ring-primary h-10 px-3">
      <option>Severity (Highest First)</option>
      <option>Date (Newest First)</option>
      <option>Status (Pending First)</option>
      </select>
      </div>
      <div>
      <label className="font-label-caps text-label-caps text-on-surface-variant block mb-1">Auto-refresh Interval</label>
      <select className="w-full border-outline-variant rounded bg-surface text-body-md font-body-md focus:border-primary focus:ring-1 focus:ring-primary h-10 px-3">
      <option>Every 30 seconds</option>
      <option>Every 1 minute</option>
      <option>Every 5 minutes</option>
      <option>Manual refresh only</option>
      </select>
      </div>
      </div>
      </section>
      {/* Saved Filters */}
      <section className="bg-surface border border-outline-variant rounded-xl p-6 shadow-sm flex flex-col">
      <h3 className="font-headline-md text-headline-md text-on-surface mb-4 flex items-center gap-2 border-b border-outline-variant pb-2">
      <ListFilter className="text-secondary" aria-hidden={true} focusable="false" />
                              Saved Filters
                          </h3>
      <div className="flex-1 overflow-y-auto pr-2 space-y-2 max-h-[300px]">
      {/* Filter Item */}
      <div className="flex items-center justify-between p-3 border border-outline-variant rounded hover:bg-surface-container-low transition-colors group">
      <div>
      <span className="font-body-md text-body-md text-on-surface font-medium block">Critical Western Region</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Status: Critical, Region: West</span>
      </div>
      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="text-secondary hover:text-primary transition-colors" title="Rename" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Pencil className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="text-error hover:text-error-container transition-colors" title="Delete" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Trash2 className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      {/* Filter Item */}
      <div className="flex items-center justify-between p-3 border border-outline-variant rounded hover:bg-surface-container-low transition-colors group">
      <div>
      <span className="font-body-md text-body-md text-on-surface font-medium block">Overdue Maintenance</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Type: Maintenance, SLA: Breached</span>
      </div>
      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="text-secondary hover:text-primary transition-colors" title="Rename" type="button" data-action-id="button-4-4" onClick={actions?.["button-4-4"]}>
      <Pencil className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="text-error hover:text-error-container transition-colors" title="Delete" type="button" data-action-id="button-5-5" onClick={actions?.["button-5-5"]}>
      <Trash2 className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </div>
      </section>
      {/* Notification Settings */}
      <section className="bg-surface border border-outline-variant rounded-xl p-6 shadow-sm lg:col-span-2">
      <h3 className="font-headline-md text-headline-md text-on-surface mb-4 flex items-center gap-2 border-b border-outline-variant pb-2">
      <Circle className="text-secondary" aria-hidden={true} focusable="false" />
                              Notification Settings
                          </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <label className="flex items-start gap-3 p-3 border border-outline-variant rounded cursor-pointer hover:bg-surface-container-low transition-colors">
      <input defaultChecked={true} className="mt-1 border-outline-variant text-primary focus:ring-primary rounded" type="checkbox" />
      <div>
      <span className="font-body-md text-body-md text-on-surface font-medium block">Task Assignments</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Alert me when a new task is assigned to my queue.</span>
      </div>
      </label>
      <label className="flex items-start gap-3 p-3 border border-outline-variant rounded cursor-pointer hover:bg-surface-container-low transition-colors">
      <input defaultChecked={true} className="mt-1 border-outline-variant text-primary focus:ring-primary rounded" type="checkbox" />
      <div>
      <span className="font-body-md text-body-md text-on-surface font-medium block">Overdue Alerts</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Notify me when tasks breach their SLA timeframe.</span>
      </div>
      </label>
      </div>
      </section>
      </div>
      {/* Action Bar */}
      <div className="flex items-center justify-between pt-6 border-t border-outline-variant mt-8">
      <button className="text-error hover:text-error-container font-headline-md text-headline-md flex items-center gap-2 px-4 py-2 transition-colors" type="button" data-action-id="reset-to-defaults-6" onClick={actions?.["reset-to-defaults-6"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
                          Reset to Defaults
                      </button>
      <div className="flex gap-4">
      <button className="px-4 py-2 border border-outline-variant text-on-surface rounded font-headline-md text-headline-md hover:bg-surface-container-low transition-colors" type="button" data-action-id="retry-load-7" onClick={actions?.["retry-load-7"]}>
                              Retry Load
                          </button>
      <button className="px-6 py-2 bg-primary text-on-primary rounded font-headline-md text-headline-md hover:bg-surface-tint transition-colors shadow-sm" type="button" data-action-id="save-preferences-8" onClick={actions?.["save-preferences-8"]}>
                              Save Preferences
                          </button>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
