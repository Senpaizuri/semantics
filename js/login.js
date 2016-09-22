var createAcc = document.getElementById('createAcc');

createAcc.addEventListener('click',Expand);

function Expand(){
  if (document.getElementById('aanmelden').style.maxHeight  != '100em'){
    document.getElementById('aanmelden').style.maxHeight  = '100em';
    createAcc.style.display = 'none';
  } else{
  document.getElementById('aanmelden').style.maxHeight  = '12em';
  }
};
