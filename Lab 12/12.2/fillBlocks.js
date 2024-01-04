const block=document.getElementById('block').children;

for(let i=0;i<block.length;i++) {
	const ukr_letter = 'адвмипозтжєйцїфякснглрчуеюбщіхьш'
    block[i].textContent=ukr_letter[Math.floor(Math.random()*(ukr_letter.length - 1))]; 
} 