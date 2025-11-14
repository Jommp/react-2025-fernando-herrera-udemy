interface Props {
  title: string;
  subtitle?: string;
}

const defaultSubtitle = 'Ropa minimalista inspirada en el diseño futurista de Tesla.';

export const CustomJumbotron = ({ title, subtitle }: Props) => {
  return (
    <section className="py-16 px-4 lg:px-8 bg-muted/30">
      <div className="container mx-auto text-center">
        <h1 className="font-monserrat text-2xl lg:text-5xl font-bold tracking-tight mb-6">
          { title }
        </h1>

        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          { subtitle || defaultSubtitle }
        </p>
      </div>
    </section>
  );
};
