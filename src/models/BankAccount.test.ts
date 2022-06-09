import { BankAccount } from "./BankAccount";

describe("Test all functionalities of a BackAccount", () => {
  test("must create an account with number and agency with default values", () => {
    const account = new BankAccount();
    expect(account.number).toBe("00000-0");
    expect(account.agency).toBe("0000-0");
  });

  test("must create an account with specific number and agency values", () => {
    const number = '01234-5'
    const agency = '0123-4'
    const account = new BankAccount(number, agency)

    expect(account.number).toBe(number)
    expect(account.agency).toBe(agency)
  });
});
