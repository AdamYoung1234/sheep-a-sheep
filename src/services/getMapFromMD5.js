import axios from "axios";

const getMapFromMD5 = async (md5) => {
  let config = {
    method: "get",
    url: `https://cat-match-static.easygame2021.com/maps/${md5}.txt`,
  };

  try {
    const response = await axios(config);

    return response.data;
  } catch (ex) {
    console.log(ex);
    throw ex;
  }
};

export default getMapFromMD5;
