export const state = {
  accounts: [
    {
      username: "dk999",
      password: "password",
      fullName: "Dino Krcic",
      id: Math.floor(Math.random() * 999),
      address: {
        street: "Nulla St. 711-2880",
        city: "Mankato Mississippi 96522",
      },
      email: "maxpower11@gmail.com",
      phone: "(257) 563-7401",
      credit: "100000",
      movements: [
        {
          id: 222,
          type: "expense",
          date: new Date(),
          amount: 100,
        },
        {
          id: 223,
          type: "transfer",
          date: new Date(),
          amount: 200,
        },
        {
          id: 224,
          type: "deposit",
          date: new Date(),
          amount: 40,
        },
        {
          id: 225,
          type: "expense",
          date: new Date(),
          amount: 1300,
        },
        {
          id: 225,
          type: "expense",
          date: new Date(),
          amount: 1300,
        },
        {
          id: 225,
          type: "expense",
          date: new Date(),
          amount: 1300,
        },
        {
          id: 225,
          type: "expense",
          date: new Date(),
          amount: 1300,
        },
      ],
    },
    {
      username: "js111",
      password: "password",
      fullName: "John Smith",
      id: Math.floor(Math.random() * 999),
      address: {
        street: "606-3727 Ullamcorper. Street",
        city: "Roseville NH 11523",
      },
      email: "johnsmith@gmail.com",
      phone: "(786) 713-8616",
      credit: "1000",
      movements: [
        {
          id: 222,
          type: "expense",
          date: new Date(),
          amount: 100,
        },
        {
          id: 223,
          type: "transfer",
          date: new Date(),
          amount: 200,
        },
        {
          id: 224,
          type: "deposit",
          date: new Date(),
          amount: 40,
        },
        {
          id: 225,
          type: "expense",
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

  // Getting the movements from local storage
  const movementsLocal = localStorage.getItem(curAccount.username);
  let movementsData;
  if (movementsLocal) {
    movementsData = JSON.parse(movementsLocal);
  } else {
    // if the local storage is empty set it to default movements
    movementsData = curAccount.movements;
  }

  // Fixing the date format
  movementsData.forEach((mov) => {
    mov.date = new Date(mov.date);
  });
  console.log(movementsData);
  console.log(curAccount.movements);
  curAccount.movements = movementsData;
  return true;
}

export function resetCurrentAccount() {
  curAccount = "";
}

export function addNewExpense(newFormData) {
  const newExpense = {
    id: Math.floor(Math.random() * 999),
    type: newFormData.type,
    date: new Date(newFormData.date),
    amount: +newFormData.amount,
  };
  curAccount.movements.push(newExpense);
  setLocalStorage();
}

function setLocalStorage() {
  localStorage.setItem(
    curAccount.username,
    JSON.stringify(curAccount.movements)
  );
}
