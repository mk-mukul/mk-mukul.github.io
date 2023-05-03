
import Link from "next/link";
import ParaLink from "../components/ParaLink";

const Blogs = () => {
    const data = ["blog-post-one", "blog-post-two", "blog-post-three"]
    return (
        <>
            <section className="min-h-screen py-20">
                <div className="flex justify-between">
                    <h2 className=" text-textSecondary text-4xl md:text-6xl lg:text-4xl font-bold p">
                        mk Blogs {`(30)`}
                    </h2>
                    <input type={"text"} className=" p-2 rounded-lg" placeholder="search" />
                    <div></div>
                </div>
                <div className="grid grid-cols-4 gap-10 p-4">
                    {data.map((val, ind) => {
                        return (
                            <div key={ind} className="col-span-3 grid gap-2 px-6 py-4 rounded bg-bgSecondary drop-shadow-lg hover:drop-shadow-md">
                                <span className="text-textSecondary text-base">2023-01-07</span>
                                <h3 className="text-2xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, laborum.</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum incidunt error eum obcaecati, inventore accusamus!</p>
                                <Link href={`/blogpost/${val}`}><a href=""><ParaLink text="Read More" /></a></Link>

                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Blogs;