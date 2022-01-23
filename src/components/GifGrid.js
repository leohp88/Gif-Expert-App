import { useFetchGif } from "../hooks/useFetchGif";
import { GifGridItem } from "./GifGridItem";

const GifGrid = ({ categoria }) => {
  const { data: images, loading } = useFetchGif(categoria);

  return (
    <>
      <h3>{categoria}</h3>
      {loading ? "Cargando..." : "Carga Completa"}
      <div className="card-grid">
        {images.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};

export default GifGrid;
