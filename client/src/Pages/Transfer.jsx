import { useState } from "react";

function Transfer({
  accounts,
  setAccounts,
  currentUser,
  setPage
}) {
  const [receiverAccountNumber, setReceiverAccountNumber] =
    useState("");

  const [amount, setAmount] = useState("");

  function transferMoney(event) {
    event.preventDefault();

    const transferAmount = Number(amount);

    const receiver = accounts.find(
      (account) =>
        account.accountNumber === receiverAccountNumber
    );

    if (receiverAccountNumber === "") {
      alert("Please enter receiver account number");
      return;
    }

    if (
      receiverAccountNumber ===
      currentUser.accountNumber
    ) {
      alert(
        "You cannot transfer money to your own account"
      );
      return;
    }

    if (!receiver) {
      alert("Receiver account not found");
      return;
    }

    if (amount === "" || transferAmount <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    if (transferAmount > currentUser.balance) {
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
          balance: account.balance - transferAmount
        };
      }

      if (
        account.accountNumber ===
        receiverAccountNumber
      ) {
        return {
          ...account,
          balance: account.balance + transferAmount
        };
      }

      return account;
    });

    setAccounts(updatedAccounts);

    alert("Money transferred successfully");

    setPage("dashboard");
  }

  return (
    <div>
      <h1>Transfer Money</h1>

      <p>
        Current Balance: ৳{currentUser.balance}
      </p>

      <form onSubmit={transferMoney}>
        <label>Receiver Account Number</label>

        <br />

        <input
          type="text"
          placeholder="Enter receiver account number"
          value={receiverAccountNumber}
          onChange={(event) =>
            setReceiverAccountNumber(event.target.value)
          }
        />

        <br />
        <br />

        <label>Transfer Amount</label>

        <br />

        <input
          type="number"
          placeholder="Enter transfer amount"
          value={amount}
          onChange={(event) =>
            setAmount(event.target.value)
          }
        />

        <br />
        <br />

        <button type="submit">
          Transfer
        </button>
      </form>

      <br />

      <button onClick={() => setPage("dashboard")}>
        Back to Dashboard
      </button>
    </div>
  );
}

export default Transfer;