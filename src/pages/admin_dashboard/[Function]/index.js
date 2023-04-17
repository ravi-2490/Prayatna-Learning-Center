import { useRouter } from "next/router";

import Enquiry from "./components/Enquiry";
import Post_notification from "./components/Post_notification";
import See_users from "./components/See_users";

const Index = () => {
  const router = useRouter();
  const functionId = parseInt(router.query.Function);
  if (functionId === 1) {
    return <Enquiry />;
  } else if (functionId === 2) {
    return <Post_notification />;
  } else {
    return <See_users />;
  }
};

export default Index;
