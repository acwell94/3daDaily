export const useRefClick = (page: any) => () => {
  page.current?.scrollIntoView({ behavior: "smooth", block: "start" });
};
