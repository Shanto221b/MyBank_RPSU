import { useState } from "react";

function Withdraw({
  accounts,
  setAccounts,
  currentUser,
  setPage
}) {
  const [amount, setAmount] = useState("");

  function withdrawMoney(event) {
    event.preventDefault();

    const withdrawAmount = Number(amount);

    if (amount === "" || withdrawAmount <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    if (withdrawAmount > currentUser.balance) {
      alert("Insufficient balance");
      return;
    }

    const updatedAccounts = accounts.map((account) => {
      if (
        account.accountNumber ===
        currentUser.accountNumber
      ) {
        return {
          ...account,
          balance: account.balance - withdrawAmount
        };
      }

      return account;
    });

    setAccounts(updatedAccounts);

    alert("Money withdrawn successfully");

    setPage("dashboard");
  }

  return (
    <div>
      <h1>Withdraw Money</h1>

      <p>
        Current Balance: ৳{currentUser.balance}
      </p>

      <form onSubmit={withdrawMoney}>
        <label>Withdraw Amount</label>

        <br />

        <input
          type="number"
          placeholder="Enter withdraw amount"
          value={amount}
          onChange={(event) =>
            setAmount(event.target.value)
          }
        />

        <br />
        <br />

        <button type="submit">
          Withdraw
        </button>
      </form>

      <br />

      <button onClick={() => setPage("dashboard")}>
        Back to Dashboard
      </button>
    </div>
  );
}

export default Withdraw;