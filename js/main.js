/*     FUNCTION TASK	
			
			let a=parseInt(prompt("Enter the 1st value"));
			let b=parseInt(prompt("Enter the 2nd value"));
		
			function one(no1,no2){
				c=a+b;
				console.log(c);
				if(a==b){
					d=c*3
					console.log(d);
				}
				else{
					console.log("Enter correct value");
				}
			}
			one(a,b);
			
			
			let a=parseInt(prompt("Enter the 1st value"));
			let b=parseInt(prompt("Enter the 2nd value"));
			
			function two(first,second){
				c=a+b;
				console.log(c);
			if((a==50)||(b==50)||(c==50)){
					console.log("it is True")
				}
				else{
					console.log("false")
				}
			}
			two(a,b);
			
			
			let a=parseInt(prompt("Enter the 1st value"));
			function three(a){
				if(a%3==0){
					console.log("Multiple of 3");
				}
				 else if(a%7==0){
					console.log("Multiple of 7");
				}
				else{
					console.log("Not Muliple by 3 and 7");
				}
			}          
             three(a);
			 
			 
			 let a=parseInt(prompt("Enter the 1st value"));
			 let b=parseInt(prompt("Enter the 2nd value"));
			 
			 function four(one,two){
				 if((a>50)&&(a<99)&&(b>50)&&(b<99)){
					 console.log("Value is True");
				 }
				 else{
					  console.log("Value is False");
				 }
			 }
			 four(a,b)
			 
			 let a=parseInt(prompt("Enter the 1st value"));
			 let b=parseInt(prompt("Enter the 2nd value"));
			 let c=parseInt(prompt("Enter the 3rd value"));
			 
			 function five(one,two){
				 if ((a>b)&&(a>c)){
					 console.log(a,"a value is greater")
				 }
				 else if((b>c)&&(b>a)){
					 console.log(b,"b value is greater")
				 }
				 else if((c>a)&&(c>b)){
					 console.log(c,"c value is greater")
				 }
				 else if((a==b)&&(b==c)&&(a==c)){
					 console.log(a,b,c,"values are same")
				 }
				 else{
					 console.log("Enter correct Value")
				 }
			 }
			 five(a,b,c)
			 
			 
			 
			 let a=parseInt(prompt("Enter the 1st value"));
			 let b=parseInt(prompt("Enter the 2nd value"));
			    part1=100-a;
			    part2=100-b;
			 function six(one,two){
				 if(part1<=part2){
					 console.log(a,"a is nearest of 100")
				 }
				 else if(part2<=part1){
					 
					  console.log(b,"b is nearest of 100")
				 }
				 else{
					 console.log("Enter correct value")
				 }
			 }
			 six(a,b) */
			 
			 
			 
			 
			// Loop Task:
			
			    // add the odd number:					
						 // var n=parseInt(prompt("Enter the value"));
						   //var sum=0;
						   // while(n>0){
							   // rem=n%10;
							   // n=(n-rem)/10
							   
							   // if(rem%2!==0){
								   // sum=sum+rem
							   // }
						   // }
						   // document.write(sum)
						   
					   
					// square the input value:
					
								 // var n=parseInt(prompt("Enter the value"));
							   // var sum=0;
							   // while(n>0){
								   // rem=n%10;
								   // n=(n-rem)/10
								   
								   // add=rem**2
									   // sum+=add
								   
							   // }
							   // document.write(sum)
							   
					   
					  // Calulate the input average:
					  
								 var n=parseInt(prompt("Enter the value"));
									  var sum=0;  
									  var count=0;
									   while(n>0){
										   count++
										   rem=n%10;
										   n=(n-rem)/10
										   
										   sum+=rem
																	   
									   }
									   sum=sum/count
									   document.write(sum)