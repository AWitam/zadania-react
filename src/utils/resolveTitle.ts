export const resolveTitle = (data: string, emoji?: string) => {
  const removeDash = data.replace(/-/g, " ");
  const capitalize = removeDash
    .charAt(0)
    .toUpperCase()
    .concat(removeDash.slice(1));
  return emoji ? `${emoji} ${capitalize}` : capitalize;
};
