import AccountSidebar from "../../components/Login/AccountSidebar";
import RegisterForm from "../../components/Register/RegisterForm";
function index() { 
  return (
    <>
      <div className="md:flex justify-between w-full md:my-16 my-8">
   <div className="md:w-30%">
    <AccountSidebar/>
   </div>
        <div className="md:w-[70%] w-full md:border-l md:pt-16 pt-4 p-4 lg:px-16">
     <RegisterForm/>
        </div>
      </div>
    </>
  );
}

export default index;
