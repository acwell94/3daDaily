import { useRouter } from "next/router";

const useLink = (link: string) => {
  const router = useRouter();

  const linkToPage = () => {
    router.push(link);
  };
  return linkToPage;
};

export default useLink;
