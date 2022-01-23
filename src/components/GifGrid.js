import { useFetchGif } from "../hooks/useFetchGif";
import { GifGridItem } from "./GifGridItem";

const GifGrid = ({ categoria }) => {
  const { data: images, loading } = useFetchGif(categoria);

  return (
    <>
      <h3 className="animate__pulse">{categoria}</h3>
      {loading && <p className="animate__shakeX">Cargando...</p>}
      <div className="card-grid animate__fadeInUp">
        {images.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};

export default GifGrid;
