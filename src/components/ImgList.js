import React from 'react'
import '../style/ImgList.css'

const ImgList = (props) => {
    // console.log(props)
    return (
        <div className="container">
            <div className="row">
                {props.images.map(image => {
                    let srcPath = 'https://farm' + image.farm + '.staticflickr.com/' + image.server + '/' + image.id + '_' + image.secret + '.jpg';

                    return (
                        <div key={image.id} className="col-md-4" style={{ marginBottom: "2rem" }} >
                            <div className="imageList__container">
                                <img className="imageList__image" src={srcPath} alt={image.farm} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ImgList


// {/* nama attribute di app.js adalah "images" */}
// { props.images.map(image => {
//     // key={image.id} adalah request dari react nya yang mengharuskan key unique. dan ditempatkan di parents
//     // return <p key={image.id}>{image.tags}</p>

//     return (
//         <div key={image.id}>
//             <img src={image.largeImageURL} alt={image.tags} />
//             <button>Search</button>
//         </div>
//     )

// })}