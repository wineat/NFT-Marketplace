
var colors = Object.values(allColors())

var defaultDNA = {
    "headcolor" : 10,
    "mouthColor" : 13,
    "eyesColor" : 96,
    "earsColor" : 10,
    //Cattributes
    "eyesShape" : 1,
    "decorationPattern" : 1,
    "decorationMidcolor" : 13,
    "decorationSidescolor" : 13,
    "animation" :  1,
    "lastNum" :  1
    }

// when page load
$( document ).ready(function() {
  $('#dnabody').html(defaultDNA.headcolor);
  $('#dnamouth').html(defaultDNA.mouthColor);
  $('#dnaeyes').html(defaultDNA.eyesColor);
  $('#dnaears').html(defaultDNA.earsColor);
    
  $('#dnashape').html(defaultDNA.eyesShape)
  $('#dnadecoration').html(defaultDNA.decorationPattern)
  $('#dnadecorationMid').html(defaultDNA.decorationMidcolor)
  $('#dnadecorationSides').html(defaultDNA.decorationSidescolor)
  $('#dnaanimation').html(defaultDNA.animation)
  $('#dnaspecial').html(defaultDNA.lastNum)

  renderCat(defaultDNA)
});

function getDna(){
    var dna = ''
    dna += $('#dnabody').html()
    dna += $('#dnamouth').html()
    dna += $('#dnaeyes').html()
    dna += $('#dnaears').html()
    dna += $('#dnashape').html()
    dna += $('#dnadecoration').html()
    dna += $('#dnadecorationMid').html()
    dna += $('#dnadecorationSides').html()
    dna += $('#dnaanimation').html()
    dna += $('#dnaspecial').html()

    return parseInt(dna)
}

function renderCat(dna){
    headColor(colors[dna.headcolor],dna.headcolor)
    $('#bodycolor').val(dna.headcolor)
    mouthAndBellyColor(colors[dna.mouthColor],dna.mouthColor)
    $('#mouthcolor').val(dna.mouthColor)
    eyesColor(colors[dna.eyesColor],dna.eyesColor)
    $('#eyescolor').val(dna.eyesColor)
    earsAndPawColor(colors[dna.earsColor],dna.earsColor)
    $('#earscolor').val(dna.earsColor)
    eyeVariation(dna.eyesShape)
    $('#eyeshape').val(dna.eyesShape)
    decorationVariation(dna.decorationPattern)
    $('#decorationshape').val(dna.decorationPattern)
    Pattern1Color(colors[dna.decorationMidcolor],dna.decorationMidcolor)   
    $('#pattern1').val(dna.decorationMidcolor)
    Pattern2Color(colors[dna.decorationSidescolor],dna.decorationSidescolor)
    $('#pattern2').val(dna.decorationSidescolor)
    animationVariation(dna.animation)
    $('#animation').val(dna.animation)
}

function randomDNA(){
  var dnaStr = String(Math.floor(Math.random()*1E16))
  //Colors
  var dna = { 
  "headcolor" : dnaStr.substring(0, 2),
  "mouthColor" : dnaStr.substring(2, 4),
  "eyesColor" : dnaStr.substring(4, 6),
  "earsColor" : dnaStr.substring(6, 8),
  //Cattributes
  "eyesShape" : dnaStr.substring(8,9) % 8 + 1    ,
  "decorationPattern" : dnaStr.substring(9, 10)  % 8 + 1,
  "decorationMidcolor" : dnaStr.substring(10, 12),
  "decorationSidescolor" : dnaStr.substring(12, 14),
  "animation" :  dnaStr.substring(14, 15) % 6 + 1,
  "lastNum" :  dnaStr.substring(15, 16)
  }
  return dna
}

//Random cat DNA
function randomCat(){
var dna = randomDNA()   
  //Rendering Cat
 renderCat(dna)
}

function defaultCat() {
  renderCat(defaultDNA)
}

// Changing cat colors
$('#bodycolor').change(()=>{
    var colorVal = $('#bodycolor').val()
    headColor(colors[colorVal],colorVal)
})

$('#mouthcolor').change(()=>{
    var colorVal = $('#mouthcolor').val()
    mouthAndBellyColor(colors[colorVal],colorVal)
})

$('#eyescolor').change(()=>{
    var colorVal = $('#eyescolor').val()
    eyesColor(colors[colorVal],colorVal)
})

$('#earscolor').change(()=>{
    var colorVal = $('#earscolor').val()
    earsAndPawColor(colors[colorVal],colorVal) 
})

$('#eyeshape').change(()=>{
  var shape = parseInt($('#eyeshape').val())
  eyeVariation(shape)
})

$('#decorationshape').change(()=>{
  var shape = parseInt($('#decorationshape').val())
  decorationVariation(shape)
})

$('#Pattern1').change(()=>{
  var colorVal = $('#Pattern1').val()
  Pattern1Color(colors[colorVal],colorVal)
})

$('#Pattern2').change(()=>{
  var colorVal = $('#Pattern2').val()
  Pattern2Color(colors[colorVal],colorVal)
})

$('#animation').change(()=>{
  var animationVal = parseInt($('#animation').val())
  animationVariation(animationVal)
})

function showColors(){
  $('#catColors').removeClass('hidden')
  $('#cattributes').addClass('hidden')
}

function showCattributes(){
  $('#cattributes').removeClass('hidden')
  $('#catColors').addClass('hidden')
}