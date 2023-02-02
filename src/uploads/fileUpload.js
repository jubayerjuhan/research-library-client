import axios from "axios";

export const uploadFile = async (file) => {
  const fromData = new FormData();
  fromData.append("avater", file);

  try {
    const { data } = await axios.post(
      "https://my-instructor-server.ts.r.appspot.com/api/upload-files",
      fromData
    );
    return data.file;
  } catch (error) {
    console.log(error);
  }
};
