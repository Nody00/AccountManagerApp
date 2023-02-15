export const state = {
  accounts: [
    {
      username: "dk999",
      password: "password",
      movements: [
        {
          id: 222,
          type: "Expense",
          date: new Date(),
          amount: 100,
        },
        {
          id: 22231,
          type: "Transaction",
          date: new Date(),
          amount: 200,
        },
        {
          id: 221232,
          type: "Deposit",
          date: new Date(),
          amount: 40,
        },
        {
          id: 221232,
          type: "Expense",
          date: new Date(),
          amount: 1300,
        },
      ],
    },
    {
      username: "js111",
      password: "111",
      movements: [
        {
          id: 222,
          type: "Expense",
          date: new Date(),
          amount: 100,
        },
        {
          id: 22231,
          type: "Transaction",
          date: new Date(),
          amount: 200,
        },
        {
          id: 221232,
          type: "Deposit",
          date: new Date(),
          amount: 40,
        },
        {
          id: 221232,
          type: "Expense",
          date: new Date(),
          amount: 1300,
        },
      ],
    },
  ],
};
export let curAccount;
export function setCurrentAccount(data) {
  const account = state.accounts.find(
    (acc) => acc.password === data.password && acc.username === data.username
  );
  if (!account) return;
  curAccount = account;
  return true;
}

export function resetCurrentAccount() {
  curAccount = "";
}
