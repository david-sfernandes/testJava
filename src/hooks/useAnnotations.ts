import { CameraCapturedPicture } from "expo-camera";
import { useUserStore } from "../store/userStore";
import baseHeaders from "../config/headers";

const useAnnotations = () => {
  const baseUrl = "https://areader-spring-zkmzgms3ea-rj.a.run.app/annotation";
  const { email } = useUserStore();

  const addAnnotation = async (
    annotation: string,
    bookId: number,
    image: CameraCapturedPicture
  ) => {
    const formData = new FormData();

    // @ts-ignore: suppress param type
    formData.append("file", {
      uri: image.uri,
      name: image.uri,
      type: "image/jpeg",
    });
    formData.append("text", annotation);
    formData.append("libraryBookId", bookId.toString());

    const response = await fetch(`${baseUrl}/add`, {
      method: "POST",
      headers: {
        ...baseHeaders(),
        "Content-Type": "multipart/form-data;",
      },
      body: formData,
    });
    return await response.json();
  };

  const getAnnotations = async () => {
    const response = await fetch(`${baseUrl}/${email}`, {
      headers: baseHeaders(),
    });
    return await response.json();
  };

  const getAnnotationsByIsbn = async (isbn: string) => {
    const response = await fetch(`${baseUrl}/${email}/${isbn}`, {
      headers: baseHeaders(),
    });
    return await response.json();
  };

  const deleteAnnotation = async (id: number) => {
    const response = await fetch(`${baseUrl}/remove?id=${id}`, {
      method: "DELETE",
      headers: baseHeaders()
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
