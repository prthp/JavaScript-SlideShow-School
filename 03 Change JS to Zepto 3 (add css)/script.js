/*
iQuery = function(id){

	var iQueryFn = function (id){
		this.elm = document.getElementById(id);

		this.html = function(str){
			this.elm.innerHTML = str;
			return this;
		}

		this.append = function(str){
			this.html(this.elm.innerHTML+str);
			return this;
		}

		this.prepend = function(str){
			this.html(str+this.elm.innerHTML);
			return this;
		}

		this.css = function(pr,val){
			this.elm.style[pr] = val;
		}
	}

	return new iQueryFn(id);
}

$ = iQuery;

// test ..

$('box').append(' Appended Value').css('color','red');
*/
/*

iQuery = function(id){

	var iQueryFn = function (id){
		this.elm = document.getElementById(id);

		this.html = function(str){
			this.elm.innerHTML = str;
			return this;
		}

		this.append = function(str){
			this.html(this.elm.innerHTML+str);
			return this;
		}

		this.prepend = function(str){
			this.html(str+this.elm.innerHTML);
			return this;
		}

		this.css = function(pr,val){
			if(typeof pr == 'string'){
				this.elm.style[pr] = val;
			}else{
				for(var i in pr){
					this.elm.style[i] = pr[i];
				}
			}
		}
	}

	return new iQueryFn(id);
}

$ = iQuery;

// test ..

$('box').append(' Appended Value').css({color:'red',fontSize:'20px'});
*/