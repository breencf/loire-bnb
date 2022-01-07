import Cookies from "js-cookie";

export const csrfFetch = async (url, options = {}) => {
  options.method = options.method || "GET";
  options.headers = options.headers || {};

  if (options.method.toUpperCase() !== "GET") {
    options.headers["Content-Type"] =
      options.headers["Content-Type"] || "application/json";
    options.headers["XSRF-Token"] = Cookies.get("XSRF-TOKEN");
  }
  const res = await window.fetch(url, options);
  //console.log(res);
  if (res.status >= 400) throw res;

  return res;
};

// call this to get the "XSRF-TOKEN" cookie, should only be used in development
export const restoreCSRF = () => {
  return csrfFetch("/api/csrf/restore");
};
