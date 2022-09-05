		var user1name=document.getElementById('User1name').value="User-1";
		var user2name=document.getElementById('User2name').value="User-2";
		
		document.getElementById('StartGame').addEventListener("click",function(){
			document.getElementById('Login_startDIV').style.display="none";
			document.getElementById('main_DIV').style.display="block";
			user1name=document.getElementById('User1name').value;
			user2name=document.getElementById('User2name').value;
			document.getElementById('Player_TURN').innerHTML=user1name+"'s Turn";
		});
		


		var playerTurn="User1";
		var _00=document.getElementById('00');
		var _01=document.getElementById('01');
		var _02=document.getElementById('02');

		var _10=document.getElementById('10');
		var _11=document.getElementById('11');
		var _12=document.getElementById('12');

		var _20=document.getElementById('20');
		var _21=document.getElementById('21');
		var _22=document.getElementById('22');
		const matrix={
			_00_:"a",
			_01_:"b",
			_02_:"c",
			_10_:"d",
			_11_:"e",
			_12_:"f",
			_20_:"g",
			_21_:"h",
			_22_:"i"
		};
		_00.addEventListener("click",function(){
			if(playerTurn=="User1"){
				_00.innerHTML='X';
				_00clicked("X");

				playerTurn="User2";
				document.getElementById('Player_TURN').innerHTML=user2name+"'s Turn";
			}
			else{
				_00.innerHTML='O';
				_00clicked("O");

				playerTurn="User1";
				document.getElementById('Player_TURN').innerHTML=user1name+"'s Turn";
			};
			_00=undefined;

		});
		_01.addEventListener("click",function(){
			if(playerTurn=="User1"){
				_01.innerHTML='X';
				_01clicked("X");

				playerTurn="User2";
				document.getElementById('Player_TURN').innerHTML=user2name+"'s Turn";
			}
			else{
				_01.innerHTML='O';
				_01clicked("O");

				playerTurn="User1";
				document.getElementById('Player_TURN').innerHTML=user1name+"'s Turn";
			};
			_01=undefined;

		});

		_02.addEventListener("click",function(){
			if(playerTurn=="User1"){
				_02.innerHTML='X';
				_02clicked("X");

				playerTurn="User2";
				document.getElementById('Player_TURN').innerHTML=user2name+"'s Turn";

			}
			else{
				_02.innerHTML='O';
				_02clicked("O");

				playerTurn="User1";
				document.getElementById('Player_TURN').innerHTML=user1name+"'s Turn";
			};
			_02=undefined;

		});

		_10.addEventListener("click",function(){
			if(playerTurn=="User1"){
				_10.innerHTML='X';
				_10clicked("X");

				playerTurn="User2";
				document.getElementById('Player_TURN').innerHTML=user2name+"'s Turn";

			}
			else{
				_10.innerHTML='O';
				_10clicked("O");

				playerTurn="User1";
				document.getElementById('Player_TURN').innerHTML=user1name+"'s Turn";
			};
			_10=undefined;

		});
		_11.addEventListener("click",function(){
			if(playerTurn=="User1"){
				_11.innerHTML='X';
				_11clicked("X");

				playerTurn="User2";
				document.getElementById('Player_TURN').innerHTML=user2name+"'s Turn";

			}
			else{
				_11.innerHTML='O';
				_11clicked("O");

				playerTurn="User1";
				document.getElementById('Player_TURN').innerHTML=user1name+"'s Turn";
			};
			_11=undefined;

		});
		_12.addEventListener("click",function(){
			if(playerTurn=="User1"){
				_12.innerHTML='X';
				_12clicked("X");

				playerTurn="User2";
				document.getElementById('Player_TURN').innerHTML=user2name+"'s Turn";

			}
			else{
				_12.innerHTML='O';
				_12clicked("O");

				playerTurn="User1";
				document.getElementById('Player_TURN').innerHTML=user1name+"'s Turn";
			};
			_12=undefined;

		});

		_20.addEventListener("click",function(){
			if(playerTurn=="User1"){
				_20.innerHTML='X';
				_20clicked("X");

				playerTurn="User2";
				document.getElementById('Player_TURN').innerHTML=user2name+"'s Turn";

			}
			else{
				_20.innerHTML='O';
				_20clicked("O");

				playerTurn="User1";
				document.getElementById('Player_TURN').innerHTML=user1name+"'s Turn";
			};
			_20=undefined;

		});
		_21.addEventListener("click",function(){
			if(playerTurn=="User1"){
				_21.innerHTML='X';
				_21clicked("X");

				playerTurn="User2";
				document.getElementById('Player_TURN').innerHTML=user2name+"'s Turn";

			}
			else{
				_21.innerHTML='O';
				_21clicked("O");

				playerTurn="User1";
				document.getElementById('Player_TURN').innerHTML=user1name+"'s Turn";
			};
			_21=undefined;

		});
		_22.addEventListener("click",function(){
			if(playerTurn=="User1"){
				_22.innerHTML='X';
				_22clicked("X");

				playerTurn="User2";
				document.getElementById('Player_TURN').innerHTML=user2name+"'s Turn";

			}
			else{
				_22.innerHTML='O';
				_22clicked("O");

				playerTurn="User1";
				document.getElementById('Player_TURN').innerHTML=user1name+"'s Turn";
			};
			_22=undefined;

		});
		var player1_Wins=0;
		var player1Loss=0;

		var player2_Wins=0;
		var player2Loss=0;

		var TotaltestCase=1;

 		function _HorizontaltoprowHigh(){
 			document.getElementById('00').style.color="yellow";
			document.getElementById('00').style.fontWeight="800";

			document.getElementById('01').style.color="yellow";
			document.getElementById('01').style.fontWeight="800";
		
			document.getElementById('02').style.color="yellow";
			document.getElementById('02').style.fontWeight="800";
 		}
 		function _HorizontalmidrowHigh(){
 			document.getElementById('10').style.color="yellow";
			document.getElementById('10').style.fontWeight="800";

			document.getElementById('11').style.color="yellow";
			document.getElementById('11').style.fontWeight="800";
		
			document.getElementById('12').style.color="yellow";
			document.getElementById('12').style.fontWeight="800";
 		}
 		function _HorizontalbottomrowHigh(){
 			document.getElementById('20').style.color="yellow";
			document.getElementById('20').style.fontWeight="800";

			document.getElementById('21').style.color="yellow";
			document.getElementById('21').style.fontWeight="800";
		
			document.getElementById('22').style.color="yellow";
			document.getElementById('22').style.fontWeight="800";
 		}

 		function _VerticleleftrowHigh(){
 			document.getElementById('00').style.color="yellow";
			document.getElementById('00').style.fontWeight="800";

			document.getElementById('10').style.color="yellow";
			document.getElementById('10').style.fontWeight="800";
		
			document.getElementById('20').style.color="yellow";
			document.getElementById('20').style.fontWeight="800";
 		}

 		function _VerticlemiddlerowHigh(){
 			document.getElementById('01').style.color="yellow";
			document.getElementById('01').style.fontWeight="800";

			document.getElementById('11').style.color="yellow";
			document.getElementById('11').style.fontWeight="800";
		
			document.getElementById('21').style.color="yellow";
			document.getElementById('21').style.fontWeight="800";
 		}
		
		function _VeritclerightrowHigh(){
 			document.getElementById('02').style.color="yellow";
			document.getElementById('02').style.fontWeight="800";

			document.getElementById('12').style.color="yellow";
			document.getElementById('12').style.fontWeight="800";
		
			document.getElementById('22').style.color="yellow";
			document.getElementById('22').style.fontWeight="800";
 		}
 		// '\' cross row
 		function _Cross_1High(){
 			document.getElementById('00').style.color="yellow";
			document.getElementById('00').style.fontWeight="800";

			document.getElementById('11').style.color="yellow";
			document.getElementById('11').style.fontWeight="800";
		
			document.getElementById('22').style.color="yellow";
			document.getElementById('22').style.fontWeight="800";
 		}

 		// '/' cross row
 		function _Cross_2High(){
 			document.getElementById('02').style.color="yellow";
			document.getElementById('02').style.fontWeight="800";

			document.getElementById('11').style.color="yellow";
			document.getElementById('11').style.fontWeight="800";
		
			document.getElementById('20').style.color="yellow";
			document.getElementById('20').style.fontWeight="800";
 		}

		function _00clicked(option){
			matrix._00_=option;
			if(matrix._00_ == matrix._01_ &&matrix._01_ == matrix._02_){
 				_HorizontaltoprowHigh();
				setTimeout(function(){alert("Game Over\n-Play Again ??");
				restartGame()},1000);

			}
			else if(matrix._00_ == matrix._10_ && matrix._10_ == matrix._20_){
				_VerticleleftrowHigh();
				setTimeout(function(){alert("Game Over\n-Play Again ??");
				restartGame()},1000);
			}
			else if(matrix._00_ == matrix._11_ && matrix._11_ == matrix._22_){
				_Cross_1High();
				setTimeout(function(){alert("Game Over\n-Play Again ??");
				restartGame()},1000);
			}
			



		}
		function _01clicked(option){
			matrix._01_=option;
			if(matrix._01_ ==matrix._00_ && matrix._00_== matrix._02_){
				_HorizontaltoprowHigh();
				setTimeout(function(){alert("Game Over\n-Play Again ??");
				restartGame()},1000);
			}
			else if(matrix._01_ == matrix._11_ && matrix._11_ == matrix._21_){
				_VeritclerightrowHigh();
				setTimeout(function(){alert("Game Over\n-Play Again ??");
				restartGame()},1000);
			}

		};
		function _02clicked(option){
			matrix._02_=option;
			if(matrix._02_ == matrix._00_&&matrix._00_ == matrix._01_){
				_HorizontaltoprowHigh();
				setTimeout(function(){alert("Game Over\n-Play Again ??");
				restartGame()},1000);
			}
			else if(matrix._02_ == matrix._12_&&matrix._12_ == matrix._22_){
				_VeritclerightrowHigh();
				setTimeout(function(){alert("Game Over\n-Play Again ??");
				restartGame()},1000);
			}
			else if(matrix._02_ == matrix._11_&&matrix._11_ == matrix._20_){
				_Cross_2High();
				setTimeout(function(){alert("Game Over\n-Play Again ??");
				restartGame()},1000);
			}

		};
		function _10clicked(option){
			matrix._10_=option;
			if(matrix._10_ == matrix._11_&&matrix._11_ == matrix._12_){
				_HorizontalmidrowHigh();
				setTimeout(function(){alert("Game Over\n-Play Again ??");
				restartGame()},1000);
			}
			else if(matrix._10_ == matrix._00_&&matrix._00_ == matrix._20_){
				_VerticleleftrowHigh();
				setTimeout(function(){alert("Game Over\n-Play Again ??");
				restartGame()},1000);
			}

		};
		function _11clicked(option){
			matrix._11_=option;
			if(matrix._11_ == matrix._01_&&matrix._01_ == matrix._21_){
				_VerticlemiddlerowHigh();
				setTimeout(function(){alert("Game Over\n-Play Again ??");
				restartGame()},1000);
			}
			else if(matrix._11_ == matrix._10_&&matrix._10_ == matrix._12_){
				_HorizontalmidrowHigh();
				setTimeout(function(){alert("Game Over\n-Play Again ??");
				restartGame()},1000);
			}
			else if(matrix._11_ == matrix._00_&&matrix._00_ == matrix._22_){
				_Cross_1High();
				setTimeout(function(){alert("Game Over\n-Play Again ??");
				restartGame()},1000);
			}
			else if(matrix._11_ == matrix._02_&&matrix._02_ == matrix._20_){
				_Cross_2High();
				setTimeout(function(){alert("Game Over\n-Play Again ??");
				restartGame()},1000);
			}

		};
		function _12clicked(option){
			matrix._12_=option;
			if(matrix._12_ == matrix._02_&&matrix._02_ == matrix._22_){
				_VeritclerightrowHigh();
				setTimeout(function(){alert("Game Over\n-Play Again ??");
				restartGame()},1000);
			}
			else if(matrix._12_ == matrix._10_&&matrix._10_ == matrix._11_){
				_HorizontalmidrowHigh();
				setTimeout(function(){alert("Game Over\n-Play Again ??");
				restartGame()},1000);
			};

		};
		function _20clicked(option){
			matrix._20_=option;
			if(matrix._20_ == matrix._00_&&matrix._00_ == matrix._10_){
				_VerticleleftrowHigh();
				setTimeout(function(){alert("Game Over\n-Play Again ??");
				restartGame()},1000);
			}
			else if(matrix._20_ == matrix._21_&&matrix._21_ == matrix._22_){
				_HorizontalbottomrowHigh();
				setTimeout(function(){alert("Game Over\n-Play Again ??");
				restartGame()},1000);
			}
			else if(matrix._20_ == matrix._11_&&matrix._11_ == matrix._02_){
				_Cross_2High();
				setTimeout(function(){alert("Game Over\n-Play Again ??");
				restartGame()},1000);
			};

		};
		function _21clicked(option){
			matrix._21_=option;
			if(matrix._21_ == matrix._20_&&matrix._20_ == matrix._22_){
				_HorizontalbottomrowHigh();
				setTimeout(function(){alert("Game Over\n-Play Again ??");
				restartGame()},1000);
			}
			else if(matrix._21_ == matrix._11_&&matrix._11_ == matrix._01_){
				_VerticlemiddlerowHigh();
				setTimeout(function(){alert("Game Over\n-Play Again ??");
				restartGame()},1000);
			};

		};
		function _22clicked(option){
			matrix._22_=option;
			if(matrix._22_ == matrix._00_&&matrix._00_ == matrix._11_){
				_Cross_1High();
				setTimeout(function(){alert("Game Over\n-Play Again ??");
				restartGame()},1000);
			}
			else if(matrix._22_ == matrix._02_&&matrix._02_ == matrix._12_){
				_VeritclerightrowHigh();
				setTimeout(function(){alert("Game Over\n-Play Again ??");
				restartGame()},1000);
			}
			else if(matrix._22_ == matrix._20_&&matrix._20_ == matrix._21_){
				_HorizontalbottomrowHigh();
				setTimeout(function(){alert("Game Over\n-Play Again ??");
				restartGame()},1000);
			};

		};

		function restartGame(){
			playerTurn="User1";
			_00=document.getElementById('00');
			_01=document.getElementById('01');
			_02=document.getElementById('02');

			_10=document.getElementById('10');
			_11=document.getElementById('11');
			_12=document.getElementById('12');

			_20=document.getElementById('20');
			_21=document.getElementById('21');
			_22=document.getElementById('22');

			_00.style.fontWeight="600";
			_00.style.color="white";
			
			_01.style.fontWeight="600";
			_01.style.color="white";
			
			_02.style.fontWeight="600";
			_02.style.color="white";
			
			_10.style.fontWeight="600";
			_10.style.color="white";
			
			_11.style.fontWeight="600";
			_11.style.color="white";
			
			_12.style.fontWeight="600";
			_12.style.color="white";
			
			_20.style.fontWeight="600";
			_20.style.color="white";
			
			_21.style.fontWeight="600";
			_21.style.color="white";
			
			_22.style.fontWeight="600";
			_22.style.color="white";
			
			_00.innerHTML="";
			_01.innerHTML="";
			_02.innerHTML="";

			_10.innerHTML="";
			_11.innerHTML="";
			_12.innerHTML="";
			
			_20.innerHTML="";
			_21.innerHTML="";
			_22.innerHTML="";

			matrix._00_="a";
			matrix._01_="b";
			matrix._02_="c";
			matrix._10_="d";
			matrix._11_="e";
			matrix._12_="f";
			matrix._20_="g";
			matrix._21_="h";
			matrix._22_="i";

		}