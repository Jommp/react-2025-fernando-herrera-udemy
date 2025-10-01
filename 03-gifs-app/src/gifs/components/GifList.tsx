import type { Gif } from "../interfaces/gif.interface";

interface Props {
  gifs: Gif[];
};

export const GifList = ({ gifs }: Props) => {
  return (
    <section className='gifs-container'>
      {
        gifs.map((gif) => (
          <article className='gif-card' key={gif.id}>
            <img src={gif.url} alt={gif.title} />

            <h3>
              { gif.title }
            </h3>

            <p>
              { `${gif.width}X${gif.height} (1.5MB)` }
            </p>
          </article>
        ))
      }
    </section>
  );
};
