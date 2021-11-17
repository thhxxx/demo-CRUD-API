import {useState} from "react";

export const Test = () => {
    const [file, setFile] = useState()
    if (file) {
        for (let i = 0; i < file.length; i++) {
            console.log(file[i].name)
        }
    }
    return (
        <div>
            {file && file.name}
            <input
                type="file"
                multiple
                onChange={event => setFile(event.target.files)}
            />

        </div>
    )
}