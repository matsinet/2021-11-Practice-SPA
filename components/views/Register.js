import html from "html-literal";

export default () => html`
  <form id="register" method="POST" action="">
    <div>
      <label for="url">Photo URL:</label>
      <input type="text" name="url" id="url" placeholder="Enter Photo URL" />
    </div>
    <div>
      <label for="title">Photo Title/Description:</label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Enter Photo Description"
      />
    </div>
    <input type="submit" name="submit" value="Submit Photo" />
  </form>
`;
