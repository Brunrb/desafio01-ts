export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number){
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (): void => {
    console.log("Náo é possível alterar o nome!");
  }

  getName = (): string => {
    return this.name;
  }

  deposit = (): void => {
    if(this.validateStatus()){
      console.log('Voce depositou');
    }
  }

  withdraw = (): void => {
    console.log('Voce sacou');
  }

  getBalance = (): void => {
    console.log(this.balance);
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error('Conta inválida');
  }
}
