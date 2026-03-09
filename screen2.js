// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {

    var checkbox = document.getElementsByClassName('agreeCheckbox')[0]
    var button = document.getElementById('continueBtn')

    checkbox.addEventListener('change', function(){

        if(checkbox.checked){
            button.classList.add('active')
            button.disabled = false
        }
        else {
            button.classList.remove('active')
            button.disabled = true
        }

    })

});