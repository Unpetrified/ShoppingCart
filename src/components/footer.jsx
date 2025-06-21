export default function Footer() {
  return (
    <footer>
      <form>
        <legend>Join Our Sleep Society for 10% off your first order</legend>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email here"
        />
        <input type="submit" value="Subscribe" />
      </form>
    </footer>
  );
}
