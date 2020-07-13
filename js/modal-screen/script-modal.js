function setClassDisplayImage(strSize){
    let imgBlock = document.getElementById('img-block');
    let modalDialog = document.getElementById('modal-dialog');

    switch (strSize) {
        case 'xl':
            modalDialog.className = 'modal-dialog modal-xl modal-dialog-centered my-0';
            imgBlock.className = 'col d-none d-lg-flex image-block p-0';
            break;
        case 'lg':
            modalDialog.className = 'modal-dialog modal-lg modal-dialog-centered my-0';
            imgBlock.className = 'col d-none d-lg-flex image-block p-0';
            break;
        case 'sm':
            modalDialog.className = 'modal-dialog modal-sm modal-dialog-centered my-0';
            imgBlock.className = 'col d-none image-block p-0';
            break;
    }
}