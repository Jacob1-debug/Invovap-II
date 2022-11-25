import AccountSidebar from "../../components/Login/AccountSidebar";
import LoginForm from "../../components/Login/LoginForm";
function index() { 
  return (
    <>
      <div className="md:flex justify-between w-full md:my-16">
   <div className="lg:w-30%">
    <AccountSidebar/>
   </div>
        <div className="md:w-[70%] w-full md:border-l md:pt-16 pt-8 p-4 lg:px-16">
       <LoginForm/>
        </div>
      </div>
    </>
  );
}

export default index;
