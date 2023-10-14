import { useUserStore } from "../store/userStore";

const baseUrl = "http://192.168.0.5:8080/library";
const { email } = useUserStore();

const addAnnotation = async (
  annotation: string,
  id: number,
  image: FileData
) => {
  const formData = new FormData();

  // @ts-ignore: suppress param type
  formData.append("file", {
    uri: image.uri,
    type: image.type,
    name: image.fileName,
  });
  formData.append("text", annotation);
  formData.append("libraryBookId", id.toString());

  const response = await fetch(`${baseUrl}/annotation/add`, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data;",
    },
    body: formData,
  });
  return await response.json();
};

const getAnnotations = async () => {
  const response = await fetch(`${baseUrl}/annotation/${email}`);
  return await response.json();
};

const getAnnotationsByIsbn = async (isbn: string) => {
  const response = await fetch(`${baseUrl}/annotation/${email}/${isbn}`);
  return await response.json();
};

const deleteAnnotation = async (id: number) => {
  const response = await fetch(`${baseUrl}/annotation/remove`, {
    method: "DELETE",
    body: JSON.stringify({ id: id }),
  });
  return await response.json();
};

export { addAnnotation, getAnnotations, getAnnotationsByIsbn, deleteAnnotation };