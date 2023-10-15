import { useUserStore } from "../store/userStore";

const useAnnotations = () => {
  const baseUrl = "http://192.168.0.5:8080/annotation";
  const { email } = useUserStore();

  const addAnnotation = async (
    annotation: string,
    bookId: number,
    image: FileData
  ) => {
    const formData = new FormData();

    // @ts-ignore: suppress param type
    formData.append("file", {
      uri: image.uri,
      name: image.fileName,
      type: image.type,
    });
    formData.append("text", annotation);
    formData.append("libraryBookId", bookId.toString());

    const response = await fetch(`${baseUrl}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data;",
      },
      body: formData,
    });
    return await response.json();
  };

  const getAnnotations = async () => {
    const response = await fetch(`${baseUrl}/${email}`);
    return await response.json();
  };

  const getAnnotationsByIsbn = async (isbn: string) => {
    const response = await fetch(`${baseUrl}/${email}/${isbn}`);
    return await response.json();
  };

  const deleteAnnotation = async (id: number) => {
    const response = await fetch(`${baseUrl}/remove`, {
      method: "DELETE",
      body: JSON.stringify({ id: id }),
    });
    return await response.json();
  };
  return {
    addAnnotation,
    getAnnotations,
    getAnnotationsByIsbn,
    deleteAnnotation,
  };
};

export default useAnnotations;
