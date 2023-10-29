import {Buffer} from "buffer";
const password = "areader";
const username = "areader";

const baseHeaders = () => {
  
  const credentials = Buffer.from(`${username}:${password}`).toString("base64");;
  return {
    Authorization: `Basic ${credentials}`,
  };
};

export default baseHeaders;
