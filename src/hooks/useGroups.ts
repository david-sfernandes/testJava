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
    const res: Group = await fetch(
      `${url}/create?libraryBookId=${bookId}&password=${password}`,
      options
    ).then((res) => res.json());
    return res;
  };

  const removeAnnotation = async () => {};

  const leave = async () => {};

  const join = async () => {};

  const addAnnotation = async () => {};

  const getByOwner = async () => {
    const options = { headers: baseHeaders() };
    console.log("email: ", email);
    const res = await fetch(`${url}/owner/${email}`, options).then(
      (res) => res.json()
    );
    return res;
  };

  const getByMembers = async () => {
    const options = { headers: baseHeaders() };
    const res = await fetch(`${url}/member/${email}`, options).then(
      (res) => res.json()
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
