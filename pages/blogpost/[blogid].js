import { useRouter } from 'next/router'

const Blog = () => {
  const router = useRouter()
  const { blogid } = router.query

  return <>
    <section className="min-h-screen py-20 max-w-[1080px] mx-auto">
      <h1 className='text-5xl font-medium mb-4'>This is my Blog Title {blogid}</h1>
      <div className='p-4'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nostrum delectus id modi suscipit placeat repudiandae magnam sequi ab corporis. Quidem repellat amet porro nesciunt. Omnis quibusdam vero maxime optio.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nostrum delectus id modi suscipit placeat repudiandae magnam sequi ab corporis. Quidem repellat amet porro nesciunt. Omnis quibusdam vero maxime optio.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nostrum delectus id modi suscipit placeat repudiandae magnam sequi ab corporis. Quidem repellat amet porro nesciunt. Omnis quibusdam vero maxime optio.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nostrum delectus id modi suscipit placeat repudiandae magnam sequi ab corporis. Quidem repellat amet porro nesciunt. Omnis quibusdam vero maxime optio.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nostrum delectus id modi suscipit placeat repudiandae magnam sequi ab corporis. Quidem repellat amet porro nesciunt. Omnis quibusdam vero maxime optio.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nostrum delectus id modi suscipit placeat repudiandae magnam sequi ab corporis. Quidem repellat amet porro nesciunt. Omnis quibusdam vero maxime optio.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nostrum delectus id modi suscipit placeat repudiandae magnam sequi ab corporis. Quidem repellat amet porro nesciunt. Omnis quibusdam vero maxime optio.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, rerum. Ullam corrupti adipisci voluptate distinctio natus! Expedita atque sequi sint dolorum voluptatibus hic voluptas nisi, ullam saepe eligendi fugiat earum, exercitationem eveniet voluptatem vel. Fugiat vitae similique quod natus excepturi nostrum pariatur incidunt totam debitis alias velit praesentium expedita, ab eos tempore molestias tempora eveniet a possimus. Harum exercitationem recusandae reprehenderit sint autem ab facere voluptatum. Vitae ipsum excepturi eveniet odio, modi doloremque labore, facere molestiae tempore veniam ducimus quod quos consectetur? Asperiores rerum ad repellat eaque id, accusamus possimus soluta voluptatibus, voluptatum autem quo architecto. Magnam dolor fugit tempore.</p>
      </div>
    </section>
  </>
}

export default Blog;
