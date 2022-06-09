export class BankAccount {
  private _balance: number;
  private _number: string;
  private _agency: string;

  constructor(number?: string, agency?: string) {
    this._balance = 0;
    this._number = this._validateNumber(number) ? number : "00000-0";
    this._agency = this._validateAgency(agency) ? agency : "0000-0";
  }

  get number(): string {
    return this._number;
  }

  set number(value: string) {
    if (this._validateNumber(value)) {
      this._number = value;
    } else {
      console.log("format of account number is invalid");
    }
  }

  get agency(): string {
    return this._agency;
  }

  set agency(value: string) {
    const regex = /^\d{4}-\d{1}$/;
    if (this._validateAgency(value)) {
      this._agency = value;
    } else {
      console.log("format of agency is invalid.");
    }
  }

  checkBalance(): number {
    return this._balance;
  }

  deposit(value: number): boolean {
    if (value > 0) {
      this._balance += value;
      return true;
    }

    return false;
  }

  withdraw(value: number): boolean {
    if (value >= 0 && this._balance >= value) {
      this._balance -= value;
      return true;
    }

    return false;
  }

  private _validateNumber(number: string): boolean {
    const regex = /^\d{5}-\d{1}$/;
    if (regex.test(number)) {
      return true;
    }

    return false;
  }

  private _validateAgency(number: string): boolean {
    const regex = /^\d{4}-\d{1}$/;
    if (regex.test(number)) {
      return true;
    }

    return false;
  }
}
