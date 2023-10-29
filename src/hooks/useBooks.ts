const key = "AIzaSyDCgG9EV_EVc07xYFchVEaSSWV_jfGvm6g";
const url = "https://www.googleapis.com/books/v1";
const admUserID = "112361005183718434273";

const useBooks = () => {
  const search = (value: string) => `${url}/volumes?q=${value}&key=${key}`;
  const searchByISBN = (value: string) =>`${url}/volumes?q=isbn:${value}&key=${key}`;
  const recomendations = `${url}/users/${admUserID}/bookshelves/1001/volumes`;
  const scifi = `${url}/users/${admUserID}/bookshelves/1002/volumes`;
  const classics = `${url}/users/${admUserID}/bookshelves/1003/volumes`;
  const youngAdult = `${url}/users/${admUserID}/bookshelves/1004/volumes`;

  return {
    search,
    searchByISBN,
    recomendations,
    scifi,
    classics,
    youngAdult,
  };
};

export default useBooks;
