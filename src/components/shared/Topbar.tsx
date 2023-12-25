import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useSignOutAccount } from "@/lib/react-query/quriesAndMutations";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {useUserContext} from "@/Context/AuthContext";
const Topbar = () => {
  const navigate=useNavigate();
  const {mutate:signOut, isSuccess}=useSignOutAccount();
  const {user}=useUserContext();
  useEffect(() => {
   if(isSuccess) navigate(0);
  }, [isSuccess])
  

  return (
    <section className="topbar ">
      <div className="flex-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center  text-[35px] font-bold leading-[140%]">
          <img
            src="Public\assets\images\BlackBox.svg"
            alt="logo"
            width={65}
            height={65}
          />Social
        </Link>
        <div className="flex gap-4 ">
          <Button variant="ghost" className="shad-button_ghost"
           onClick={()=>signOut()}>
            <img src="Public\assets\icons\logout.svg" alt="logout" />
          </Button>
          <Link to={`/profile/${user.id}`} className="flex-center gap-3">
          <img src={user.imageUrl || '/assets/images/profile.png'} alt="profile" className="h-8 w-8 rounded-full"/>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
