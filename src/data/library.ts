import { useUserStore } from "../store/userStore";

const baseUrl = "http://192.168.0.3:8080/library";
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
  const response = await fetch(`${baseUrl}/updateStatus`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status: status, id: id }),
  });
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
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id }),
  });
  return await response.json();
};

export {
  addBook,
  updateStatus,
  getBooks,
  getBookAnnotations,
  removeBook,
};
