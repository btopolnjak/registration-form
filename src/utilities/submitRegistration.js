export default function submitRegistration(fields) {
  const dataForApi = {
    fields: [
      {
        code: "fname",
        valueStr: fields.firstName,
        dataType: "string",
      },
      {
        code: "lname",
        valueStr: fields.lastName,
        dataType: "string",
      },
      {
        code: "username",
        valueStr: fields.userName,
        dataType: "string",
      },
      {
        code: "email",
        valueStr: fields.eMail,
        dataType: "string",
      },
      {
        code: "password",
        valueStr: fields.password,
        dataType: "string",
      },
      {
        code: "password_confirm",
        valueStr: fields.passwordMatch,
        dataType: "string",
      },
    ],
  };
  return new Promise((resolve, reject) => {
    // Switch to "false" to test reject handling
    let test = true;
    setTimeout(() => {
      if (test) resolve(console.log(dataForApi));
      else reject(console.log("Rejected"));
    }, 3000);
  });
}
