import React from 'react';

import {Image} from 'react-bootstrap';

// página de inicio, tiene una imagen y una cita.
function Home() {


    return (
        <div>
            <blockquote  className="blockquote mb-0 text-center"> 
                    <cite>"Don't wish it was easier, wish you were better"</cite>
                <footer className="blockquote-footer">
                    Jim Rohn
                </footer>
            </blockquote>
            <Image src= 'https://ia800109.us.archive.org/8/items/091Nature/091_Nature.jpg' fluid 
            alt = 'imagen portada'
            />

        </div>
    );

}



export default Home;