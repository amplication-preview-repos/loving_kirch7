import { Collector as TCollector } from "../api/collector/Collector";

export const COLLECTOR_TITLE_FIELD = "name";

export const CollectorTitle = (record: TCollector): string => {
  return record.name?.toString() || String(record.id);
};
