code=['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
current = 0;

document.addEventListener('keydown', function konami(e){
  console.log(current+'/'+code[current]+'/'+e.key)
  if (String(e.key) == code[current]){
    current ++;
    if (current == 10){
      current = 0;
      alert('vous avez tapé le konami code')
    }
  }else{
    current = 0
  }
  });