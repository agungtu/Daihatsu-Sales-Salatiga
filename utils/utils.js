export const formatCurrency = (value) => {
  if (value === "" || value === null || value === undefined) return "Rp 0";
  return new Intl.NumberFormat("in-IN", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
};
