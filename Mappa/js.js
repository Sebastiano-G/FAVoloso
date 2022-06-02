function start() {
    document.getElementById('start').style.display='none'; 
    document.getElementById('btn-start').style.display='none';
};

function one() {
    document.getElementById('isla-1').classList.remove('inactive');
    document.getElementById('isla-1').style.zIndex="201";
};

function next() {
    document.getElementById('isla-1').classList.add('inactive'); document.getElementById('isla-1').style.zIndex='1';
    document.getElementById('i-2').style.display='none'; 
};




