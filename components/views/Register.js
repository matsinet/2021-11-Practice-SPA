import html from "html-literal";

export default () => html`
  <form id="register" method="POST" action="">
    <div>
      <label for="username">Username:</label>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Enter Your Username"
      />
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" name="password" id="password" />
    </div>
    <div>
      <label for="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="your@email.here"
      />
    </div>
    <input type="submit" name="register" value="Register" />
  </form>
`;
