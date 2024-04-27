import { motion as m } from 'framer-motion'

const Modal = ({ selected, setSelected }) =>
  selected ? (
    <m.div
      className='fixed inset-0 z-20 cursor-pointer overflow-y-scroll bg-black/50'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5
        // ease: 'easeIn'
      }}
      onClick={() => setSelected(null)}
    >
      <div
        className='mx-auto my-20 w-full max-w-2xl cursor-default overflow-hidden rounded'
        onClick={(e) => e.stopPropagation()}
      >
        <m.div layoutId={`image-${selected.id}`}>
          <img src={selected.url} alt={selected.description} />
        </m.div>
        <m.div
          className='bg-base-100 p-4 pb-6'
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5
          }}
        >
          <h2 className='text-2xl font-bold'>{selected.title}</h2>
          <p className='mb-2'>{selected.description}</p>
          <div className='mb-6 flex flex-wrap gap-2'>
            {selected.tags.map((tag) => (
              <div key={tag} className='badge badge-ghost'>
                {tag}
              </div>
            ))}
          </div>
          <button className='btn btn-primary btn-block'>Download</button>
        </m.div>
      </div>
    </m.div>
  ) : null

export { Modal }
