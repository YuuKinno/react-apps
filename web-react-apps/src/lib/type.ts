
type orderBy = 'relevance' | 'newest';

export interface FetchBooksParams {
  query: string;
  startIndex?: number;
  maxResults?: number;
  orderBy?: orderBy;
}