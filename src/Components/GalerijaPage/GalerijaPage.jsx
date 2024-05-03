import { useState } from "react"
import './GalerijaPage.css'
import Lightbox from "yet-another-react-lightbox"
import { slides } from "../../data.js"
import "yet-another-react-lightbox/styles.css"
import {
    Captions,
    Fullscreen,
    Counter

} from "yet-another-react-lightbox/plugins"
import "yet-another-react-lightbox/plugins/captions.css"
import "yet-another-react-lightbox/plugins/counter.css";
import Images from "./images.jsx"

function App() {
    // const [open, setOpen] = useState<boolean>(false);
    const [index, setIndex] = useState(-1)

    return (
        <div className="cela-strana">
            <div className="header">
                <h1>Galerija</h1>
            </div>

            <div className="slike">
                <Images data={slides} onClick={currentIndex => setIndex(currentIndex)} />

                <Lightbox
                    plugins={[Captions, Fullscreen, Counter]}
                    captions={{
                        showToggle: true,
                        descriptionTextAlign: "end"
                    }}
                    counter={{
                        container:
                            { style: { top: "unset", bottom: 0 } }
                    }}


                    index={index}
                    open={index >= 0}
                    close={() => setIndex(-1)}
                    slides={slides}
                />
            </div>
        </div>
    )
}

export default App
