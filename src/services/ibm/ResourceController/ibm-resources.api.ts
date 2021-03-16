type PlanHistoryItem = {
  resource_plan_id: string;
  start_date: string;
  requestor_id: string;
}

export type ResourceInstance = {
  id: string;
  guid: string;
  crn: string;
  url: string;
  name: string;
  account_id: string;
  resource_group_id: string;
  resource_group_crn: string;
  resource_id: string;
  resource_plan_id: string;
  target_crn: string;
  parameters?: any;
  state: string;
  type: string;
  sub_type?: string;
  allow_cleanup: boolean;
  locked: boolean;
  last_operation: any;
  dashboard_url: string;
  plan_history: PlanHistoryItem[];
  extensions?: any;
  resource_aliases_url: string;
  resource_bindings_url: string;
  resource_keys_url: string;
  created_at: string;
  created_by: string;
  updated_at: string;
  updated_by: string;
  deleted_at: string;
  deleted_by: string;
  scheduled_reclaim_at: string;
  scheduled_reclaim_by: string;
  restored_at: string;
  restored_by: string;
}


export type ResourceInstancesList = {
  next_url: string;
  resources: ResourceInstance[];
  rows_count: number;
}

export abstract class IbmResourcesApi {
  abstract getResourceInstance(id: string): Promise<ResourceInstance>;
  abstract getResources(): Promise<ResourceInstancesList>;

}