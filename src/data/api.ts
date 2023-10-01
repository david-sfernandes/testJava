const api = {
  search: (value: string) =>
    `https://www.googleapis.com/books/v1/volumes?q=${value}`,
  searchByISBN: (value: string) =>
    `https://www.googleapis.com/books/v1/volumes?q=isbn:${value}`,
  recomendations:
    "https://www.googleapis.com/books/v1/users/112361005183718434273/bookshelves/1001/volumes",
  scifi:
    "https://www.googleapis.com/books/v1/users/112361005183718434273/bookshelves/1002/volumes",
  classics:
    "https://www.googleapis.com/books/v1/users/112361005183718434273/bookshelves/1003/volumes",
  youngAdult:
    "https://www.googleapis.com/books/v1/users/112361005183718434273/bookshelves/1004/volumes",
};

export default api;
