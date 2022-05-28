const backgroundColor = [152, 208, 160]

const testImage = new Image()
testImage.crossOrigin = 'anonymous'
testImage.src = 'https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/graphics/pokemon/tapu_bulu/front.png'


const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

testImage.onload = () => {
  context.drawImage(testImage, 0, 0);
  testImage.style.display = 'none';
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < imageData.data.length; i += 4) {
    if (
      imageData.data[i] === backgroundColor[0] &&
      imageData.data[i + 1] === backgroundColor[1] && 
      imageData.data[i + 2] === backgroundColor[2]
    ) imageData.data[i + 3] = 0
  }
  context.putImageData(imageData, 0, 0)
};
