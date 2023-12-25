import FooterSignIn from "../components/FooterSignIn";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Testimonial from "../components/Testimonial";

const SignIn = () => {
  return (
    <>
      <main className="bg-gray/10 w-full font-lexend">
        <section className="px-4 pt-12 md:max-w-[1280px] 2xl:max-w-[1596px] m-auto">
          <Navbar />
          <Login />
          <Testimonial />
          <FooterSignIn />
        </section>
      </main>
    </>
  );
};

export default SignIn;
