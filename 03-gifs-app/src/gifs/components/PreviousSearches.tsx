interface Props {
  searches: string[];
  onPreviousSearchClicked: (term: string) => void;
}

export const PreviousSearches = ({ searches, onPreviousSearchClicked }: Props) => {
  return (
    <section className='previous-searches'>
      <h2>Busquedas previas</h2>

      <ul className='previous-searches-list'>
        {
          searches.map(search => (
            <li
              key={search}
              onClick={() => onPreviousSearchClicked(search)}
            >
              {search}
            </li>
          ))
        }
      </ul>
    </section>
  );
};
