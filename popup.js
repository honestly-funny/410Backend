var a=0;    

function count() {
	b = document.getElementById('search_term').value;
	console.log(a);
	a += parseInt(b, 10);
    document.getElementById('demo').textContent = a;
}
document.getElementById('do-count').onclick = count;

