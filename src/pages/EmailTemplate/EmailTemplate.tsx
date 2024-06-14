import { Logoo } from "./assets/Logoo";

export interface EmailTemplateProps {
  title: string;
}
const EmailTemplate = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-cds_accent-100">
      <table className=" rounded-lg shadow-md  md:h-2/5 md:w-2/5  gap-6 mb-8 md:mb-40 bg-cds_primary-50 py-12">
        <tbody className="">
          <tr className="flex flex-col p-12 gap-4">
            <td className="pb-8">
              <figure className="w-28 h-16 ">
                <Logoo />
              </figure>
            </td>
            <td className="text-4xl font-bold">Reset Passsword</td>
            <td className="flex flex-col">
              <span>
                Hello <b>someone@example.com</b>
              </span>
              <span>
                You are receiving this email because a password reset request
                has been initiated for V12 footwear distributor portal.
              </span>
            </td>
            <td>
              To reset your password, click the button. If you didn't request a
              new password, feel free to ignore or delete this email.
            </td>
            <td className="pb-6">
              <button className="p-2 border rounded-md bg-cds_accent-900 text-cds_primary-100 ">
                Change my password
              </button>
            </td>
            <tr className="flex flex-col text-center  text-xs border-t-2 ">
              <td className="text-slate-500 pt-6">
                If the buttosn above doesn’t work, paste the link into your
                browser{" "}
              </td>
              <td className="text-cds_primary-900 underline">
                https://www.v12.com/forgot_password
              </td>
            </tr>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default EmailTemplate;
