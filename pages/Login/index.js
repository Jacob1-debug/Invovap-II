import AccountSidebar from "../../components/Login/AccountSidebar";
import LoginForm from "../../components/Login/LoginForm";
function index() { 
  return (
    <>
      <div className="flex justify-between w-full my-16">
   <div className="w-30%">
    <AccountSidebar/>
   </div>
        <div className="w-[70%] border-l pt-16 p-4 px-16">
       <LoginForm/>
        </div>
      </div>
    </>
  );
}

export default index;
