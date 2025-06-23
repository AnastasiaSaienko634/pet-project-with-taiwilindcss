import css from "./SearchBox.module.css";
export default function SearchBox({ setSearchContact, searchContact }) {
  return (
    <div className={css.searchBoxContent}>
      <label htmlFor="serachBox">
        Find contacts by name
        <input
          className={css.searchBox}
          type="text"
          id="serachBox"
          value={searchContact}
          onChange={(event) => {
            setSearchContact(event.target.value);
          }}
        />
      </label>
    </div>
  );
}
