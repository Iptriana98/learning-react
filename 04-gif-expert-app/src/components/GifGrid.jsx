import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifCardItem, LoadingMessage } from './';

export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs(category)

    return (
        <>
            <h3>{category}</h3>
            <LoadingMessage isLoading={isLoading} />
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifCardItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}
