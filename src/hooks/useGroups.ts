import baseHeaders from "../config/headers";
import { useUserStore } from "../store/userStore";

const useGroups = () => {
  const url = "https://areader-spring-zkmzgms3ea-rj.a.run.app/group";
  const { email } = useUserStore();

  const create = async (bookId: number, password: string) => {
    const options = {
      method: "POST",
      headers: baseHeaders(),
    };
    const res = await fetch(
      `${url}/create?libraryBookId=${bookId}&password=${password}`,
      options
    ).then((res) => res.json());
    return res;
  };

  const removeAnnotation = async () => {};

  const leave = async () => {};

  const join = async (idGroup: number, password: string) => {
    const options = {
      method: "PATCH",
      headers: baseHeaders(),
    };
    const res = await fetch(
      `${url}/join?idGroup=${idGroup}&password=${password}&userEmail=${email}`,
      options
    ).then((res) => res.json());
    return res;
  };

  const addAnnotation = async (groupId, annotationId) => {
    const options = {
      method: "PATCH",
      headers: {...baseHeaders(), "Content-Type": "application/json"},
      body: JSON.stringify({ idGroup: groupId, idAnnotation: annotationId }),
    };
    const res = await fetch(`${url}/addAnnotation`, options).then((res) =>
      res.json()
    );
    return res;
  };

  const getByOwner = async (ownerEmail?: string) => {
    const options = { headers: baseHeaders() };
    console.log("email: ", email);
    const res = await fetch(
      `${url}/owner/${ownerEmail || email}`,
      options
    ).then((res) => res.json());
    return res;
  };

  const getByMembers = async () => {
    const options = { headers: baseHeaders() };
    const res = await fetch(`${url}/member/${email}`, options).then((res) =>
      res.json()
    );
    return res;
  };

  const getAnnotations = async () => {};

  return {
    create,
    removeAnnotation,
    leave,
    join,
    addAnnotation,
    getByOwner,
    getByMembers,
    getAnnotations,
  };
};

export default useGroups;
