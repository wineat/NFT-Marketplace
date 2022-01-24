
//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors(){
    var colors = []
    for(var i = 10; i < 99; i ++){
      var color = getColor()
      colors[i] = color
    }
    return colors
}

//This function code needs to modified so that it works with Your cat code.
function headColor(color,code) {
    $('.cat__head, .cat__chest').css('background', '#' + color)  //This changes the color of the cat
    $('#headcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnabody').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function mouthAndBellyColor(color,code) {
    $('.cat__mouth-contour,  .cat__tail, .cat__chest_inner').css('background', '#' + color)  //This changes the color of the cat
    $('#mouthcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnamouth').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function eyesColor(color,code) {
    $('.cat__eye').find('span').css('background', '#' + color)  //This changes the color of the cat
    $('#eyescode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnaeyes').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function earsAndPawColor(color,code) {
    $('.cat__ear--left, .cat__ear--right, .cat__paw-left, .cat__paw-right, .cat__paw-right_inner, .cat__paw-left_inner').css('background', '#' + color)  //This changes the color of the cat
    $('#earscode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnaears').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function eyeVariation(num) {

    $('#dnashape').html(num)
    switch (num) {
        case 1:
            normalEyes()
            $('#eyeName').html('Basic')
            break
        case 2:
            normalEyes()
            $('#eyeName').html('Chill')
            eyesType1()
            break
        case 3:
            normalEyes()
            $('#eyeName').html('Cute')
            eyesType2()
            break
        case 4:
            normalEyes()
                $('#eyeName').html('Watching')
                eyesType3()            
                break
        case 5:
            normalEyes()
                $('#eyeName').html('Night eyes')
                eyesType4()            
                break
        case 6:
            normalEyes()
                $('#eyeName').html('Wonder down')
                eyesType5()            
                break
        case 7:
            normalEyes()
                $('#eyeName').html('Wonder up')
                eyesType6()            
                break
        case 8:
            normalEyes()
                $('#eyeName').html('Circle')
                eyesType7()            
                break
        
    }
}

function decorationVariation(num) {
    $('#dnadecoration').html(num)
    switch (num) {
        case 1:
            normaldecoration()
            $('#decorationName').html('Basic')
            break
        case 2:
            normaldecoration()
            $('#decorationName').html('Left Hair')
            decorationType1()
            break
        case 3:
            normaldecoration()
            $('#decorationName').html('Right Hair')
            decorationType2()
            break
        case 4:
            normaldecoration()
            $('#decorationName').html('Both hair')
            decorationType3()
            break
        default:
            break
        
    }
}

function Pattern1Color(color,code) {
    $('.cat__head-dots').css('background', '#' + color)  //This changes the color of the cat
    $('#Pattern1Name').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnadecorationMid').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function Pattern2Color(color,code) {
    $('.cat__head-dots_first, .cat__head-dots_second').css('background', '#' + color)  //This changes the color of the cat
    $('#Pattern2Name').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnadecorationSides').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function animationVariation(num) {
    $('#dnadanimation').html(num)
    $('#animationName').html('code: '+num) 
    switch (num) {
        case 1:
            $('#animationName').html('Head')
            movingHead()
            break
        case 2:
            $('#animationName').html('Tail')
            movingTail()
            break
        case 3:
            $('#animationName').html('Ears')
            movingEars()
            break
        case 4:
            $('#animationName').html('Left Ear')
            leftEar()
            break
        case 5:
            $('#animationName').html('Right Ear')
            rightEar()
            break
        case 6:
            $('#animationName').html('Attentive')
            attentiveCat()
            break
    }
}


function normalEyes() {
    $('.cat__eye').find('span').css('border', 'none')
}

function eyesType1() {
    $('.cat__eye').find('span').css('border-top', '15px solid')
}

function eyesType2() {
    $('.cat__eye').find('span').css('border-bottom', '15px solid')
}

function eyesType3() {
    $('.cat__eye').find('span').css({ 'border-top': '15px solid', 'border-bottom': '15px solid' })
}

function eyesType4() {
    $('.cat__eye').find('span').css({ 'border-right': '15px solid', 'border-left': '15px solid' })
}

function eyesType5() {
    $('.cat__eye').find('span').css({ 'border-right': '15px solid', 'border-left': '15px solid', 'border-top': '15px solid' })
}

function eyesType6() {
    $('.cat__eye').find('span').css({ 'border-right': '15px solid', 'border-left': '15px solid', 'border-bottom': '15px solid' })
}

function eyesType7() {
    $('.cat__eye').find('span').css('border', '15px solid')
}

function normaldecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

function decorationType1() {
    $('.cat__head-dots_first').css({ "transform": "rotate(15deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
}

function decorationType2() {
    $('.cat__head-dots_second').css({ "transform": "rotate(-15deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

function decorationType3() {
    $('.cat__head-dots_first').css({ "transform": "rotate(15deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(-15deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

function movingHead() {
    resetAnimation()
        $('#head').addClass('movingHead')
        $('#leftEar').addClass('movingEarsLeft')
        $('#rightEar').addClass('movingEarsRight')    
}

function movingTail() {
    resetAnimation()
        $('#tail').addClass('movingTail')
    
}

//moving both ears
function movingEars() {
    resetAnimation()
        $('#leftEar').addClass('movingEarsLeft')
        $('#rightEar').addClass('movingEarsRight')
    
}

// Single Ears

function leftEar() {
    resetAnimation()
        $('#leftEar').addClass('moving-Single-EarLeft')
    
}

function rightEar() {
    resetAnimation()
        $('#rightEar').addClass('moving-Single-EarRight')
    
}

function attentiveCat() {
    resetAnimation()
        $('#leftEar').addClass('attentionLeft')
        $('#rightEar').addClass('attentionRight')
    
}

function resetAnimation() {
    document.getElementById("head").classList.remove("movingHead")
    document.getElementById("leftEar").classList.remove("movingEarsLeft", "moving-Single-EarLeft", "attentionLeft")
    document.getElementById("rightEar").classList.remove("movingEarsRight", "moving-Single-EarRight", "attentionRight")
    document.getElementById("tail").classList.remove("movingTail")

}
