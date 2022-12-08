var header = document.getElementById('header');
var navigationHeader = document.getElementById('navigation_header');
var content = document.getElementById('content');
var showSidebar = false;

function toggleSidebar()
{
    showSidebar = !showSidebar;
    if(showSidebar){
        /*abrir e fechar*/
        navigationHeader.style.marginLeft= '-10vw'; 
        /*Animacao de abrir e fechar*/
        navigationHeader.style.animationName = 'showSidebar'; 
        /*Deixar borrado o content*/
        content.style.filter = 'blur(2px)'; 
        }
        else {
            //abrir e fechar
            navigationHeader.style.marginLeft= '-100vw'; 
            //Animacao de abrir e fechar*/
            navigationHeader.style.animationName = ''; 
            //Tirar o borrado do content
            content.style.filter = ''; 
    }
}

/*Funcao para fechar o sidebar clicando no content*/
function closeSidebar(){
    if(showSidebar){
        toggleSidebar();
    }
}

window.addEventListener('resize', function(event){
    if(this.window.innerWidth > 768 && showSidebar){
        toggleSidebar();
    }
});