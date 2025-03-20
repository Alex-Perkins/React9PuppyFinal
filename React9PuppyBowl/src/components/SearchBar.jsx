export default function Searchbar(props) {
    return (
      <section>
        <label class="searchBar">
          Search:
          <input
            value={props.searchParameter}
            onChange={(event) => props.setSearchParameter(event.target.value)}
          />
        </label>
      </section>
    );
  }
  