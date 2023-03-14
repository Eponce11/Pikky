

const AddPost = () => {



    return (

        <div>
            Hello World
        </div>
    )
}

function convertToBase64(file:any){
    return new Promise ( (resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file)
        fileReader.onload = () => {
            resolve(fileReader.result)
        } 
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}

export default AddPost