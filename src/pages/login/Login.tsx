import Button from "../../components/button";
import Icon from "../../components/icon/Icon";
import { ScrapAssistLogo } from "./assets/logo";

const Login = () => {
  return (
    <div className="bg-cds_accent-700 min-h-screen flex flex-col items-center justify-between">
      <header className="flex flex-col items-center mt-8 md:flex-row md:items-start md:mt-44">
        <div
          className="w-[73px] aspect-square h-auto"
          aria-label="scrap_assist_logo"
        >
          <ScrapAssistLogo />
        </div>
        <span
          aria-label="srap_assist_title"
          className="font-bold text-5xl text-cds_accent-50 ml-6 mt-2 text-center"
        >
          Scrap Assist
        </span>
      </header>
      <main className="p-12 rounded-lg shadow-md text-center md:h-2/5 md:w-2/5 flex flex-col justify-center items-center gap-6 mb-8 md:mb-40 bg-cds_primary-50">
        <h1 className="text-2xl font-bold">Welcome Back!</h1>
        <p className="antialiased w-full max-w-[256px] mb-3">
          Please log in with your account to access Scrap Assist.
        </p>
        <form>
          <Button
            size="xxl"
            className="text-md"
            rightIcon={
              <Icon name="SparklesIcon" className="animate-pulse" height={16} />
            }
            buttonType={"cds_solid"}
            spacing={"xxl"}
            label="Logging In"
            type="button"
          />
        </form>
      </main>
      <footer className="antialiased text-cds_accent-50 text-center mb-5">
        If you&apos;re having trouble logging in, please contact the IT team at{" "}
        <a href="mailto:itsupport@sellparker.com.au">
          itsupport@sellparker.com.au
        </a>
      </footer>
    </div>
  );
};

export default Login;
