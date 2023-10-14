import { useUserStore } from "../store/userStore";

const useLibrary = () => {
  const baseUrl = "http://192.168.0.5:8080/library";
  const { email } = useUserStore();

  const addBook = async (isbn: string) => {
    const response = await fetch(`${baseUrl}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userEmail: email, isbn: isbn }),
    });
    return await response.json();
  };

  const updateStatus = async (id: number, status: string) => {
    const response = await fetch(
      `${baseUrl}/updateStatus?id=${id}&status=${status}`,
      { method: "PATCH" }
    );
    return await response.json();
  };

  const getBooks = async () => {
    const response = await fetch(`${baseUrl}/${email}`);
    return await response.json();
  };

  const getBookAnnotations = async (id: number) => {
    const response = await fetch(`${baseUrl}/annotations/${id}`);
    return await response.json();
  };

  const removeBook = async (id: number) => {
    const response = await fetch(`${baseUrl}/remove/${id}`, {
      method: "DELETE",
    });
    return await response.json();
  };

  const checkLibrary = async (isbn: string) => {
    const response = await fetch(
      `${baseUrl}/checkLibrary?isbn=${isbn}&userEmail=${email}`
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
