import { GetStaticProps, NextPage } from "next";
import { twMerge } from "tailwind-merge";

interface HomePageProps {
  message: string;
  hasError: boolean;
}

const HomePage: NextPage<HomePageProps> = ({ message, hasError }) => {
  return (
    <div
      className={twMerge(
        !hasError ? "from-cyan-500 to-blue-500" : "from-[#ee7474] to-red-500",
        "flex min-h-screen items-center justify-center bg-gradient-to-r py-5 text-center text-6xl font-bold text-white"
      )}
    >
      {message}
    </div>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  try {
    const req = await fetch(process.env.API_URL + "/hello");
    const data = await req.json();

    if (!req.ok) throw new Error();

    return {
      props: {
        message: data.message,
        hasError: false
      }
    };
  } catch (error) {
    console.log(error);

    return {
      props: {
        message: "Что-то пошло не так",
        hasError: true
      }
    };
  }
};
