
$(document).on('DOMNodeInserted', '#sparq-container', function(){
  setTimeout(() => {
             checkForEMTB()
             },200)
})

$(document).on('click', '#sparq-container', function(){
  setTimeout(() => {
             checkForEMTB()
             },200)
})

var checkForEMTB = function(){
  isEmtbStyle = !!window.emtbState;
  if(!isEmtbStyle){
    $('.sparq-list-box-tags_emtb_style_ds6lzdwgxmqzldahx2si9n4j').addClass('sparq-hide');
  } else{
    $('.sparq-list-box-tags_emtb_style_ds6lzdwgxmqzldahx2si9n4j').removeClass('sparq-hide');
  }
  
  let x = document.querySelector('.capitalize.filter-width.emtb');
  if(x){
	x.innerText = "eMTB";
    x.style.textTransform = 'none'
  }
}

window.sq = window.sq || {};
window.sq.onComplete = function(){
    window.emtbState = history.state && history.state.tags_style_hndhjmts2imsd51wz4mf2byj && history.state.tags_style_hndhjmts2imsd51wz4mf2byj.indexOf('emtb') > -1;
  setTimeout(() => {
    history.replaceState(null,'',window.location.pathname)         
             },100)
             
             let search = document.querySelector('#search form');
console.log(search)
if(search){
$(search).attr('target','_blank');
}
	
}