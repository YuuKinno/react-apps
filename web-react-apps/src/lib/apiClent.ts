import type { FetchBooksParams } from "../lib/type";

// books apiを呼ぶ関数の定義
export const fetchBooksList = async ({
  query,
  startIndex = 0,
  maxResults = 10,
  orderBy = 'relevance',
}: FetchBooksParams) => {
  const apiKey = import.meta.env.VITE_APP_GOOGLE_BOOKS_API_KEY;
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
      query
    )}&startIndex=${startIndex}&maxResults=${maxResults}&orderBy=${orderBy}&key=${apiKey}`
  );

  if (!response.ok) {
    throw new Error('Google Books APIからのデータ取得に失敗しました。');
  }
  return await response.json();
}