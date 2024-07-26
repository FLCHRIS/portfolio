export const formatDate = (date: string) => {
  const formattedDate = new Date(date).toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formattedDate;
};
