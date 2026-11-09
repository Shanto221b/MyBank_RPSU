import { useState } from "react";

function Login({
  accounts,
  setPage,
  setCurrentAccountNumber
}) {
  const [accountNumber, setAccountNumber] = useState("");
  const [password, setPassword] = useState("");

  function loginUser(event) {
    event.preventDefault();

    const user = accounts.find(
      (account) =>
        account.accountNumber === accountNumber &&
        account.password === password
    );

    if (user) {
      setCurrentAccountNumber(user.accountNumber);
      setPage("dashboard");
    } else {
      alert("Wrong account number or password");
    }
  }

  return (
    <div>
      <h1>MyBank Login</h1>

      <form onSubmit={loginUser}>
        <label>Account Number</label>

        <br />

        <input
          type="text"
          placeholder="Enter account number"
          value={accountNumber}
          onChange={(event) =>
            setAccountNumber(event.target.value)
          }
        />

        <br />
        <br />

        <label>Password</label>

        <br />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(event) =>
            setPassword(event.target.value)
          }
        />

        <br />
        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;