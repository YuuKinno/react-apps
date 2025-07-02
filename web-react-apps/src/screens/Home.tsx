import { useEffect, useState } from 'react'
import { fetchBooksList } from '../lib/apiClent'

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    description: string;
    imageLinks: {
      thumbnail: string;
    };
  };
}

const Home = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const loadBooks = async () => {
      try {
        setError(null);
        // 検索クエリを指定して書籍リストを取得します。
        const data = await fetchBooksList({ query: 'エンジニア' });
        if (data && data.items) {
          const items = Array.isArray(data.items) ? data.items : [data.items];
          setBooks(items);
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('書籍の取得中に不明なエラーが発生しました。');
        }
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadBooks();
  },[]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {books.map(book => (
        <div key={book.id}>
          <h2>{book.volumeInfo.title}</h2>
          <p>{book.volumeInfo.description}</p>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
          <hr />
        </div>
      ))}
    </div>
  )
}

export default Home
 