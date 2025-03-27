var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var nameInput = document.getElementById('name')
var downloadBtn = document.getElementById('download-btn')
const x = canvas.width / 2;



var image = new Image()
image.crossOrigin="anonymous";
image.src = 'invitation.png'
image.onload = function () {
	drawImage()
}

function drawImage() {
	// ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
	ctx.font = '48pt b';
	ctx.fillStyle = '#ffffff'
	ctx.textAlign = "center";

	ctx.fillText(nameInput.value, x, 840)
    
}

nameInput.addEventListener('input', function () {
	drawImage()
})

downloadBtn.addEventListener('click', function () {
	downloadBtn.href = canvas.toDataURL('image/jpg')
	downloadBtn.download = 'كل عام وأنت بخير' + nameInput.value
})