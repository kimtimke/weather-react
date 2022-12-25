import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="overview">
        <h1 id="city"> Swakopmund</h1>
        <ul>
          <li>
            Last updated: <span id="date">Sunday 20:00</span>
          </li>
          <li id="description">Clear skys</li>
        </ul>
      </div>
    </div>
  );
}
