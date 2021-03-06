export default function Card({img, title, subtitle, description}) {
    return (
        <>
            <article className="w-11/12 md:w-4/6 m-3 md:m-5 rounded-md shadow-2xl">

                <div className="flex justify-center w-full h-44">
                    <img className="rounded w-full h-full" src={img} alt="PENDIENTE SEO"/>
                </div>

                <div className="w-full m-5">
                    <h3 className="text-xl pr-10">{title}</h3>
                    <p className="mb-5 text-sm text-gray-500 pr-10">{subtitle}</p>
                    <p className="break-words text-gray-800 pr-10">{description}</p>
                </div>

                <div className="flex justify-center w-full my-5">
                    <button
                        className="w-11/12 flex items-center justify-center px-4 py-1.5 border border-transparent rounded-md shadow-sm text-white bg-primary hover:bg-primaryDark">Call
                        to action
                    </button>
                </div>

            </article>

            <style jsx>{`

              article:hover {
                transition: transform .2s;
                transform: scale(1.03);
              }

            `}</style>
        </>
    );
}

