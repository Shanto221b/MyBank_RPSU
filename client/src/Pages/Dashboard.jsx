function Dashboard({
  currentUser,
  setPage,
  setCurrentAccountNumber
}) {
  function logoutUser() {
    setCurrentAccountNumber("");
    setPage("login");
  }

  return (
    <div>
      <h1>MyBank Dashboard</h1>

      <h3>
        Account Holder: {currentUser.name}
      </h3>

      <p>
        Account Number: {currentUser.accountNumber}
      </p>

      <p>
        Current Balance: ৳{currentUser.balance}
      </p>

      <button onClick={() => setPage("deposit")}>
        Deposit Money
      </button>

      <br />
      <br />

      <button onClick={() => setPage("withdraw")}>
        Withdraw Money
      </button>

      <br />
      <br />

      <button onClick={() => setPage("transfer")}>
        Transfer Money
      </button>

      <br />
      <br />

      <button onClick={logoutUser}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;