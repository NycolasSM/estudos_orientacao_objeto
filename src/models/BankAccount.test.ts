import { BankAccount } from "./BankAccount";

describe("Test all functionalities of a BackAccount", () => {
  test("must create an account with number and agency with default values", () => {
    const account = new BankAccount();
    expect(account.number).toBe("00000-0");
    expect(account.agency).toBe("0000-0");
  });

  test("must create an account with specific number and agency values", () => {
    const number = "01234-5";
    const agency = "0123-4";
    const account = new BankAccount(number, agency);

    expect(account.number).toBe(number);
    expect(account.agency).toBe(agency);
  });

  test("the balance of a newly created bank account must be 0", () => {
    const account = new BankAccount();
    expect(account.checkBalance()).toBe(0);
  });

  test("the balance must be changed correctly after making the deposits", () => {
    const account = new BankAccount();
    account.deposit(25);
    account.deposit(25);
    account.deposit(100);
    expect(account.checkBalance()).toBe(150);
  });

  test("the balance must be change correctly after making withdraw", () => {
    const account = new BankAccount();
    account.deposit(500)
    account.withdraw(150.54)
    expect(account.checkBalance().toFixed(2)).toBe('349.46')
  })
});
