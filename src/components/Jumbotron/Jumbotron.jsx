import './Jumbotron.css'

const Jumbotron = ({readMoreBtn}) => {

    return (

        <main>

            <figure>
                <img src="https://source.unsplash.com/random/400×400/?food" alt="" />
            </figure>

            <section>
                <p>Featured Posts</p>
                <h1>I am A Blogger & I Love Foods</h1>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
                {readMoreBtn && <button>Read More</button>}

                <div>
                    <button>Forward</button>
                    <button>Next</button>
                </div>
            </section>



        </main>

    )

}

export default Jumbotron
