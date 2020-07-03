const saveToken = (val: string) => {
  try {
    const stringToken = JSON.stringify(val);
    localStorage.setItem('token', stringToken);
  } catch {
    // ignore write errors
  }
};

const loadToken = () => {
  try {
    const token = localStorage.getItem('token');
    return token ?? '';
  } catch {
    return '';
  }
};

const purge = () => {
  try {
    localStorage.removeItem('token');
  } catch {}
};

export const storage = {
  saveToken,
  loadToken,
  purge,
};
