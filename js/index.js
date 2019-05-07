window.onload = function(){
	loadColumns();
	loadSoftwares();
	loadStaff();
	loadSiteInfo();
}

var curentColumn = false;

function loadColumns(){
	var innerHTML = '';
	for(var i in columns){
		innerHTML += '<div class="column-item" id="column_'+ i +'" onclick="switchColumn(\''+ i +'\')">'+ columns[i].name +'</div>'
	}
	
	document.getElementById("columns").innerHTML = innerHTML;
}

function switchColumn(columnId){
	curentColumn = columnId;
	var columns = document.getElementsByClassName('column-item');
	for(var i = 0;i < columns.length; i ++){
		columns[i].classList.remove('column-item-active');
	}
	
	document.getElementById("column_" + columnId).classList.add('column-item-active');
	
	loadSoftwares();
}

function loadSoftwares(){
	if(curentColumn == false){
		document.getElementById("softwares").innerHTML = '<div class="noSoftware" id="noSoftware">请先选择分类</div>';
	}else{
		var softwares = software[curentColumn];
		if(!softwares || softwares.length == 0){
			document.getElementById("softwares").innerHTML = '<div class="noSoftware" id="noSoftware">该分类下没有数据</div>';
			return ;
		}
		
		var innerHTML = '';
		for(var i = 0; i < softwares.length; i ++){
			innerHTML += '<div class="list-item">'
							+ '<div class="list-title">'
								+ '<div class="title-title">'+ softwares[i].name +'</div>'
								+ '<div class="title-staff" onclick="window.open(\''+ staff[softwares[i].staff].blog +'\')">'+ staff[softwares[i].staff].name +'</div>'
							+ '</div>'
							+ '<div class="list-item-other">'
								+ '<div class="list-link">'
									+ '<a href="'+ softwares[i].url +'" target="_blank">'+ softwares[i].url +'</a>'
								+ '</div>'
								+ '<div class="list-note">'+ softwares[i].note +'</div>'
							+ '</div>'
						+ '</div>';
		}
		
		document.getElementById("softwares").innerHTML = innerHTML;
	}
}

function loadStaff(){
	var innerHTML = '';
	for(var i in staff){
		innerHTML += '<div class="staff" onclick="window.open(\''+ staff[i].blog +'\')">'+ staff[i].name +'</div>';
	}
	
	document.getElementById("staff").innerHTML = '贡献者们:' + innerHTML;
}

function loadSiteInfo(){
	document.getElementById("notice").innerHTML = '<p class="tip">公告</p>' + siteNotice;
}