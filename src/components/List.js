import { images } from './data'
import { motion as m } from 'framer-motion'

const Card = ({ item, setSelected }) => (
  <div className='mb-4 inline-block'>
    <m.img
      alt={item.description}
      src={item.url}
      className='image-full w-full cursor-pointer bg-base-100 shadow-xl'
      layoutId={`image-${item.id}`}
      whileHover={{
        scale: 1.025,
        transition: {
          duration: 0.2
        }
      }}
      whileTap={{
        scale: 0.95
      }}
      onClick={() => setSelected(item)}
    />
    <div className='mt-2 flex flex-wrap gap-2'>
      {item.tags.map((tag) => (
        <div key={tag} className='badge badge-ghost'>
          {tag}
        </div>
      ))}
    </div>
  </div>
)

const List = ({ setSelected }) => (
  <div className='p-4'>
    <h1 className='mb-8 text-center text-4xl font-bold'>Images</h1>
    <div className='sm:columns-2 lg:columns-4'>
      {images.map((item) => (
        <Card key={item.id} item={item} setSelected={setSelected} />
      ))}
    </div>
  </div>
)
export { List }
