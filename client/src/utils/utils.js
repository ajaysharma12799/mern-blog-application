const formatDate = (date) => {
  const d = new Date(date);

  const day = d.getDay();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();

  return `${day}/${month}/${year}`;
};

export { formatDate };
