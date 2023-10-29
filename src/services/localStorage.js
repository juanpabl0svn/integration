const localStorage = (setter) => {
  const user = window.localStorage.getItem("userData");

  if (user !== null) {
    setter(user);
    return true;
  }
  return false;
};

export default localStorage;
