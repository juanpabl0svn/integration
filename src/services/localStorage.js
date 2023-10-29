const localStorage = (setter) => {
  const user = window.localStorage.getItem("userData");

  if (user !== null) {
    setter(JSON.parse(user));
    return true;
  }
  return false;
};

export default localStorage;
