import './Jumbotron.css'

const Jumbotron = ({ readMoreBtn }) => {

    return (

        <main>

            <figure>
                <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </figure>

            <section>
                <p>FEATURED POSTS</p>
                <h1>I am A Blogger & I Love Foods</h1>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
                <hr />
                {readMoreBtn && <button className='btn'>Read More</button>}

                <div>
                    <button>Forward</button>
                    <button>Next</button>
                </div>
            </section>

        </main>

    )

}

export default Jumbotron
