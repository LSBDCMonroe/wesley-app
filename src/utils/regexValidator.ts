function nameTest( name: string) : boolean {
  const nameRegex = /^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
  return nameRegex.test(name);
}

function emailTest( email: string) : boolean {
  const emailRegex = /^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
  return emailRegex.test(email);
}

function userTest( user: any) : boolean {
  const emailRegex = /^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
  return emailRegex.test(user.email) || nameTest(user.firstName);
}


export { nameTest, emailTest, userTest };