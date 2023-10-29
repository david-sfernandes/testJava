import { useUserStore } from "../store/userStore";
import baseHeaders from "../config/headers";

const useLibrary = () => {
  const baseUrl = "https://areader-spring-zkmzgms3ea-rj.a.run.app/library";
  const { email } = useUserStore();

  const addBook = async (isbn: string) => {
    const response = await fetch(`${baseUrl}/add`, {
      method: "POST",
      headers: {
        ...baseHeaders(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userEmail: email, isbn: isbn }),
    });
    return await response.json();
  };

  const updateStatus = async (id: number, status: string) => {
    const response = await fetch(
      `${baseUrl}/updateStatus?id=${id}&status=${status}`,
      { method: "PATCH", headers: baseHeaders() }
    );
    return await response.json();
  };

  const getBooks = async () => {
    const response = await fetch(`${baseUrl}/${email}`, {
      headers: baseHeaders(),
    });
    return await response.json();
  };

  const getBookAnnotations = async (id: number) => {
    const response = await fetch(`${baseUrl}/annotations/${id}`, {
      headers: baseHeaders(),
    });
    return await response.json();
  };

  const removeBook = async (id: number) => {
    const response = await fetch(`${baseUrl}/remove/${id}`, {
      method: "DELETE",
      headers: baseHeaders(),
    });
    return await response.json();
  };

  const checkLibrary = async (isbn: string) => {
    const response = await fetch(
      `${baseUrl}/checkLibrary?isbn=${isbn}&userEmail=${email}`,
      { headers: baseHeaders() }
    );
    return await response.json();
  };

  return {
    addBook,
    updateStatus,
    getBooks,
    getBookAnnotations,
    removeBook,
    checkLibrary,
  };
};

export default useLibrary;
