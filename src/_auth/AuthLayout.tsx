import { Outlet, Navigate } from "react-router-dom";

// import { useUserContext } from "@/context/AuthContext";

export default function AuthLayout() {
  const  isAuthenticated  = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>

          <img
            // eslint-disable-next-line no-nonoctal-decimal-escape
            src="Public\assets\images\8257_cosmonaut-fall-interstellar_1200x2000.jpg"
            alt="logo"
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
          />
        </>
      )}
    </>
  );
}