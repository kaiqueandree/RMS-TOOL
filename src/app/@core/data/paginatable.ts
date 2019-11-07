export interface Pagination {
  count: number;
  current_page: number;
  total_pages: number;
  next_page: number | null;
  prev_page: number | null;
  limit_value: number;
  current_count: number;
}
export interface Paginatable<T> {
  pagination: Pagination;
  records: Array<T>;
}