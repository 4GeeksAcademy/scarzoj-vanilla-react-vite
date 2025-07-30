import { useParams } from "react-router";
export const UserPage = () => {
  let { userSlug } = useParams();
  const url = `https://playground.4geeks.com/contact/agendas/${userSlug}/contacts`;
  console.log(url);
  return <>{userSlug}</>;
};
