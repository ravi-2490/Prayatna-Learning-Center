import { useRouter } from "next/router";

import Enquiry from "./components/Enquiry";
import Post_notification from "./components/Post_notification";
import See_users from "./components/See_users";
import Add_online_Class_User from "./components/Add_online_Class_User";

const Index = () => {
  const router = useRouter();
  const functionId = parseInt(router.query.Function);
  if (functionId === 1) {
    return <Enquiry />;
  } else if (functionId === 2) {
    return <Post_notification />;
  } else if (functionId === 3) {
    return <See_users />;
  } else {
    return <Add_online_Class_User />;
  }
};

export default Index;
