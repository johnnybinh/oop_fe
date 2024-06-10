import _ from "lodash";
const apiUrl = "http://localhost:25566/api/spending";

export const getData = async () => {
  try {
    const res = await fetch(apiUrl, {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
};

export const postData = async (data) => {
  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error("error");
    }
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteData = async (id) => {
  try {
    const res = await fetch(`http://localhost:25566/api/spending/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    console.log("nuked!", id);
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

export const getTotalSpending = async () => {
  const data = await getData();
  return _.sumBy(data, "amount");
};
