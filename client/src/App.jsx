import { useState } from "react";

import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Deposit from "./Pages/Deposit";
import Withdraw from "./Pages/Withdraw";
import Transfer from "./Pages/Transfer";

function App() {
  const [page, setPage] = useState("login");

  const [accounts, setAccounts] = useState([
    {
      name: "Shanto Debnath",
      accountNumber: "11",
      password: "123",
      balance: 10000
    },
    {
      name: "Rahim Ahmed",
      accountNumber: "12",
      password: "456",
      balance: 5000
    }
  ]);

  const [currentAccountNumber, setCurrentAccountNumber] =
    useState("");

  const currentUser = accounts.find(
    (account) =>
      account.accountNumber === currentAccountNumber
  );

  if (page === "login") {
    return (
      <Login
        accounts={accounts}
        setPage={setPage}
        setCurrentAccountNumber={setCurrentAccountNumber}
      />
    );
  }

  if (page === "dashboard") {
    return (
      <Dashboard
        currentUser={currentUser}
        setPage={setPage}
        setCurrentAccountNumber={setCurrentAccountNumber}
      />
    );
  }

  if (page === "deposit") {
    return (
      <Deposit
        accounts={accounts}
        setAccounts={setAccounts}
        currentUser={currentUser}
        setPage={setPage}
      />
    );
  }

  if (page === "withdraw") {
    return (
      <Withdraw
        accounts={accounts}
        setAccounts={setAccounts}
        currentUser={currentUser}
        setPage={setPage}
      />
    );
  }

  if (page === "transfer") {
    return (
      <Transfer
        accounts={accounts}
        setAccounts={setAccounts}
        currentUser={currentUser}
        setPage={setPage}
      />
    );
  }

  return null;
}

export default App;