var console_args = process.argv,
	i = 2,
	sum = 0;

while(console_args.length > i){
	var x = Number(console_args[i]);
	if(x != NaN){
		sum += x;
	}
	i++;
}

console.log(sum);