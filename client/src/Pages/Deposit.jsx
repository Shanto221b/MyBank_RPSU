import { useState } from "react";

function Deposit({
  accounts,
  setAccounts,
  currentUser,
  setPage
}) {
  const [amount, setAmount] = useState("");

  function depositMoney(event) {
    event.preventDefault();

    const depositAmount = Number(amount);

    if (amount === "" || depositAmount <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    const updatedAccounts = accounts.map((account) => {
      if (
        account.accountNumber ===
        currentUser.accountNumber
      ) {
        return {
          ...account,
          balance: account.balance + depositAmount
        };
      }

      return account;
    });

    setAccounts(updatedAccounts);

    alert("Money deposited successfully");

    setPage("dashboard");
  }

  return (
    <div>
      <h1>Deposit Money</h1>

      <p>
        Current Balance: ৳{currentUser.balance}
      </p>

      <form onSubmit={depositMoney}>
        <label>Deposit Amount</label>

        <br />

        <input
          type="number"
          placeholder="Enter deposit amount"
          value={amount}
          onChange={(event) =>
            setAmount(event.target.value)
          }
        />

        <br />
        <br />

        <button type="submit">
          Deposit
        </button>
      </form>

      <br />

      <button onClick={() => setPage("dashboard")}>
        Back to Dashboard
      </button>
    </div>
  );
}

export default Deposit;