const imagePreview = (idFile, idimage) => {

    const file = document.getElementById(idFile).files[0];

    const preview  = document.getElementById(idimage);

    const filereader = new FileReader();    //le os arquivos

    if(file){
       filereader.readAsDataURL(file)
       filereader.onloadend = () => preview.src = filereader.result
    }
}

export{
    imagePreview
}