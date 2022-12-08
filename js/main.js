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
        navigationHeader.style.marginLeft= '-100vw'; /*abrir e fechar*/
        navigationHeader.style.animationName = ''; /*Animacao de abrir e fechar*/
        content.style.filter = ''; /*Tirar o borrado do content*/
    }
}

function closeSidebar(){ /*Funcao para fechar o sidebar clicando no content*/
    if(showSidebar){
        toggleSidebar();
    }
}

window.addEventListener('resize', function(event){
    if(this.window.innerWidth > 768 && showSidebar){
        toggleSidebar();
    }
});