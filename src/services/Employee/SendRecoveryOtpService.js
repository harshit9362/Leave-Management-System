//Internal Lib Import
const { CreateError } = require("../../helper/ErrorHandler");
const GenRandNumber = require("../../helper/GenRandNumber");
const SendMailUtility = require("../../utility/SendMailUtility");

const SendRecoveryOtpService = async (Request, EmployeesModel, OtpModel) => {
  const { Email } = Request.params;

  const Employee = await EmployeesModel.aggregate([
    { $match: { Email: Email } },
  ]);
  if (!Employee.length > 0) {
    throw CreateError("Employee Not Found", 404);
  }

  const OtpCode = GenRandNumber(6);

  const EmailBody = `<p style="font-size: 30px;">
  Hi user, <br /> <br />
  Your LMS Portal Account Recovery Code is <b>${OtpCode}</b> </p> <br />
  Please enter this code in the portal to recover your account. <br />
  Do not share this code with anyone. <br /> <br />
  <b>Thank you.</b>`;

  const EmailSubject = `Your ${process.env.APPLICATION_NAME} Account Recovery Code`;

  await SendMailUtility(Email, EmailBody, EmailSubject);

  const newOtpCode = new OtpModel({
    OtpCode: OtpCode,
    Email: Email,
  });

  await newOtpCode.save();

  return { message: "Otp Send Successfull" };
};
module.exports = SendRecoveryOtpService;
