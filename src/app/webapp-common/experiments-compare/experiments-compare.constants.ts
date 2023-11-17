export type MetricValueType = 'min_value' | 'max_value' | 'value';

export interface SelectedMetric {
  name: string;
  path: string;
}

export interface DataDictionary {
  dataDictionary: boolean;
  link: string;
  dataValue: string;
}

export const RENAME_MAP = {
  'network_design': 'Network Design',
  'uncommitted_changes': 'Uncommitted Changes',
  'installed_packages': 'Installed Packages',
  'setup_shell_script': 'Setup Shell Script',
  ' input models': 'Input Models',
  ' output models': 'Output Models',
  'model': 'Model',
  'source': 'Source',
  ' default': 'Default',
  'augmentation': 'Augmentation',
  'filtering': 'Filtering',
  'iteration': 'Iteration',
  'labels_enumeration': 'Labels Enumeration',
  'mapping': 'Mapping',
  'view': 'View',
  '_legacy': 'General',
  'container': 'Container'
};

export const MAX_ROWS_FOR_SMART_COMPARE_ARRAYS = 20000;
export const COMPARE_DETAILS_ONLY_FIELDS_BASE = [
  'id',
  'name',
  'type',
  'status',
  'last_update',
  'project.name',
  'models.input.name',
  'models.output.name',
  'models.output.model.name',
  'models.output.model.uri',
  'models.output.model.framework',
  'models.output.model.design',
  'models.input.name',
  'models.input.model.name',
  'models.input.model.uri',
  'models.input.model.framework',
  'models.input.model.labels',
  'models.input.model.design',
  'execution.artifacts',
  'container',
  'script',
  'tags',
  'system_tags',
  'published',
  'last_iteration',
  'configuration',
  'last_change',
  'completed',
  'created',
  'user.name',
  'parent.name',
  'execution.queue.name',
  'active_duration',
  'started',
  'status_message',
  'status_reason',
  'last_worker',
  'runtime'
];

export const COMPARE_DEBUG_IMAGES_ONLY_FIELDS = [
  'id',
  'name',
  'type',
  'status',
  'last_update',
  'project.name',
  'tags',
  'published',
  'last_iteration',
];

export const LIMITED_VIEW_LIMIT = 10;
