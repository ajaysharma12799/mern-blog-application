import { sha256 } from "js-sha256";

const formatDate = (date) => {
  const d = new Date(date);

  const day = d.getDay();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();

  return `${day}/${month}/${year}`;
};

const generateGravatar = (currentUser) => {
  const address = String(currentUser?.email).trim().toLowerCase();
  const hash = sha256(address);
  return `https://www.gravatar.com/avatar/${hash}`;
};

export { formatDate, generateGravatar };
